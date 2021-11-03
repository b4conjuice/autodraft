import useSwr from 'swr'
import format from 'date-fns/format'

import CURRENT_SEASON from '@/config/season'
import getRecord from '@/lib/getRecord'
import getWinPercentage from '@/lib/getWinPercentage'
import filterGames from '@/lib/filterGames'

const startDate = '2021-10-19' // TODO: Workaround to fix api returning games before start of 2022 season

const fetcher = (...args) => fetch(...args).then(res => res.json())
const refreshInterval = 30000

export const fetchNBATeams = team => {
  const { data } = useSwr(
    `https://www.balldontlie.io/api/v1/teams${team ? `/${team}` : ''}`,
    fetcher
  )
  return {
    data: data?.data,
  }
}

export const fetchNBATeam = (id, season = CURRENT_SEASON) => {
  const url = `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&team_ids[]=${id}&start_date=${startDate}&per_page=100`
  const { data: games } = useSwr(id ? url : null, fetcher)
  const gameIds = games?.data.map(game => game.id)
  const { data: gameList } = useSwr(
    gameIds
      ? `https://www.balldontlie.io/api/v1/stats?start_date=${startDate}&per_page=100${gameIds.reduce(
          (query, game) => `${query}&game_ids[]=${game}`,
          ''
        )}`
      : null,
    fetcher
  )
  const players = gameList?.data
    .filter(game => game.team.id === parseInt(id, 10))
    .reduce((list, game) => {
      if (!list.find(player => player.id === game.player.id))
        list.push(game.player)
      return list
    }, [])
  // const gameId = games?.data
  //   .sort((b, a) => new Date(a.date) - new Date(b.date))
  //   .filter(g => g.status === 'Final')[0].id
  // const { data: gameStats } = useSwr(
  //   gameId
  //     ? `https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&per_page=100`
  //     : null,
  //   fetcher
  // )
  // const players = gameStats?.data
  //   .filter(p => p.team.id === parseInt(id, 10))
  //   .map(p => p.player)
  const playerIds = players?.map(p => p.id)
  const { data: seasonStats } = useSwr(
    playerIds
      ? `https://www.balldontlie.io/api/v1/season_averages?&seasons[]=${season}${playerIds.reduce(
          (query, player) => `${query}&player_ids[]=${player}`,
          ''
        )}`
      : null,
    fetcher
  )
  const team = players?.map(player => ({
    ...seasonStats?.data.find(s => s.player_id === player.id),
    ...player,
  }))
  // const team = seasonStats?.data
  //   .sort((b, a) => {
  //     const bMin = getMin(b.min)
  //     const aMin = getMin(a.min)
  //     if (bMin < aMin) {
  //       return 1
  //     }
  //     if (bMin > aMin) {
  //       return -1
  //     }
  //     return 0
  //   })
  //   .map(stats => ({
  //     ...players?.find(p => p.id === stats.player_id),
  //     ...stats,
  //   }))
  return team
}

const getHour = timeMatch => {
  if (!timeMatch) return null
  const [, h, m, ampm] = timeMatch
  const hour = parseInt(h, 10)
  const min = parseInt(m, 10)
  return hour + (ampm === 'PM' ? 12 : 0) + (min === 30 ? 0.5 : 0)
}

export const fetchNBASchedule = (options = {}) => {
  // const { team, desc, start, end } = options
  const { team, start, end, season, postseason } = options
  const url = `https://www.balldontlie.io/api/v1/games?seasons[]=${
    season || CURRENT_SEASON
  }${team ? `&team_ids[]=${team}&per_page=${postseason ? '100' : '82'}` : ''}${
    start
      ? `&start_date=${start}&end_date=${end || start}&per_page=100`
      : `&start_date=${startDate}&per_page=100`
  }${postseason ? `&postseason=1` : ''}`
  const { data, revalidate } = useSwr(url, fetcher)
  // const games = data?.data.sort((b, a) =>
  //   desc
  //     ? new Date(a.date) - new Date(b.date)
  //     : new Date(b.date) - new Date(a.date)
  // )
  const re = new RegExp('^(0?[1-9]|1[0-2]):([0-5][0-9]) ?([AaPp][Mm])')
  const games = data?.data
    .map(game => ({
      ...game,
      hour: getHour(game.status.match(re)),
    }))
    .sort(
      team
        ? (b, a) => new Date(b.date) - new Date(a.date)
        : (b, a) => {
            if (b.status === 'Final') {
              if (a.status === 'Final') return 0
              return 1
            }
            if (a.status === 'Final') {
              return -1
            }
            if (b.status.includes(':')) {
              if (a.status.includes(':')) {
                return b.hour - a.hour
              }
              return 1
            }
            if (a.status.includes(':')) {
              return -1
            }
            return 0
          }
    )
  return { data: games, meta: data?.meta, revalidate }
}

export const fetchNBAGames = ids => {
  const { data } = useSwr(
    ids && ids.length > 0
      ? `https://www.balldontlie.io/api/v1/stats?per_page=100${ids.reduce(
          (query, game) => `${query}&game_ids[]=${game}`,
          ''
        )}`
      : null,
    fetcher
  )
  return data || { data: undefined }
}

export const fetchNBAGame = (id, playerId) => {
  try {
    const { data: game, revalidate: refreshGame } = useSwr(
      id ? `https://www.balldontlie.io/api/v1/games/${id}` : null,
      fetcher,
      { refreshInterval }
    )
    const { data: playerStats, revalidate: refreshStats } = useSwr(
      `https://www.balldontlie.io/api/v1/stats?game_ids[]=${id}&per_page=100${
        playerId ? `&player_ids[]=${playerId}` : ''
      }`,
      fetcher,
      { refreshInterval }
    )
    const revalidate = async () => {
      await refreshGame()
      await refreshStats()
    }
    return !game || !playerStats
      ? {
          data: undefined,
        }
      : playerId
      ? {
          data: {
            ...game,
            stats: playerStats[0],
          },
          revalidate,
        }
      : {
          data: {
            ...game,
            stats: playerStats?.data,
          },
          revalidate,
        }
  } catch (e) {
    return { error: e }
  }
}

export const fetchNBAPlayer = (id, season = CURRENT_SEASON) => {
  const { data: player } = useSwr(
    id ? `https://www.balldontlie.io/api/v1/players/${id}` : null,
    fetcher
  )
  const { data: seasonStats } = useSwr(
    id
      ? `https://www.balldontlie.io/api/v1/season_averages?&seasons[]=${season}&player_ids[]=${id}&start_date=${startDate}`
      : null,
    fetcher
  )
  const { data: stats } = useSwr(
    id
      ? `https://www.balldontlie.io/api/v1/stats?&per_page=100&seasons[]=${season}&player_ids[]=${id}&start_date=${startDate}`
      : null,
    fetcher
  )
  return player && stats && seasonStats
    ? {
        ...player,
        season: seasonStats.data[0],
        stats: stats.data.sort(
          (b, a) => new Date(a.game.date) - new Date(b.game.date)
        ),
      }
    : undefined
}

export const searchNBAPlayers = name => {
  const { data } = useSwr(
    name ? `https://www.balldontlie.io/api/v1/players?search=${name}` : null,
    fetcher
  )
  return data?.data || []
}

export const fetchNBARecord = ({ team, season = CURRENT_SEASON }) => {
  const { data: regularSeasonGames } = fetchNBASchedule({ team, season })
  if (!regularSeasonGames) return null
  const wins = regularSeasonGames
    .filter(g => g.status === 'Final')
    .reduce((array, game) => {
      if (
        (game.visitor_team_score > game.home_team_score &&
          game.visitor_team.id === parseInt(team, 10)) ||
        (game.home_team_score > game.visitor_team_score &&
          game.home_team.id === parseInt(team, 10))
      )
        array.push('W')
      return array
    }, [])
  return `${wins.length}-${
    regularSeasonGames.filter(g => g.status === 'Final').length - wins.length
  }`
}

// TODO refactor this back into fetchNBASchedule
export const fetchNBARegularSeasonSchedule = (options = {}) => {
  const { start, end, season, postseason } = options
  const { data, revalidate } = useSwr(
    `https://www.balldontlie.io/api/v1/games?seasons[]=${
      season || CURRENT_SEASON
    }${
      start
        ? `&start_date=${start}&end_date=${end || start}&per_page=100`
        : `&start_date=${startDate}&per_page=100`
    }&postseason=${postseason ? 1 : 0}`,
    async url => {
      const res = await fetcher(url)
      const { meta } = res
      if (meta.total_pages > 1) {
        const pages = Array(meta.total_pages - meta.next_page + 1)
          .fill()
          .map((_, idx) => meta.next_page + idx)
        const moreGames = (
          await Promise.all(pages.map(page => fetcher(`${url}&page=${page}`)))
        )
          .map(({ data: additionalData }) => additionalData)
          .flat()
        res.data = [...res.data, ...moreGames]
      }
      return res
    }
  )
  const re = new RegExp('^(0?[1-9]|1[0-2]):([0-5][0-9]) ?([AaPp][Mm])')
  const games = data?.data
    .map(game => ({
      ...game,
      hour: getHour(game.status.match(re)),
    }))
    .sort((b, a) => {
      if (b.date !== a.date) return new Date(b.date) - new Date(a.date)
      if (b.status === 'Final') {
        if (a.status === 'Final') return 0
        return 1
      }
      if (a.status === 'Final') {
        return -1
      }
      if (b.status.includes(':')) {
        if (a.status.includes(':')) {
          return b.hour - a.hour
        }
        return 1
      }
      if (a.status.includes(':')) {
        return -1
      }
      return 0
    })
  return { data: games, meta: data?.meta, revalidate }
}

export const fetchNBAStandings = (start = startDate) => {
  const { data: games } = fetchNBARegularSeasonSchedule({
    start,
    end: format(new Date(), 'yyyy-MM-dd'),
  })
  if (!games) return null
  const teamsWithRecord = games
    ?.filter(game => game.status === 'Final')
    .reduce((array, game) => {
      const winner =
        game.visitor_team_score > game.home_team_score
          ? game.visitor_team
          : game.home_team
      const loser =
        winner.id === game.home_team.id ? game.visitor_team : game.home_team
      if (array[winner.id]) {
        array[winner.id].wins += 1
      } else {
        array[winner.id] = {
          ...winner,
          wins: 1,
          losses: 0,
        }
      }
      if (array[loser.id]) {
        array[loser.id].losses += 1
      } else {
        array[loser.id] = {
          ...loser,
          wins: 0,
          losses: 1,
        }
      }
      return array
    }, [])
    .map(team => ({
      ...team,
      record: `${team.wins}-${team.losses}`,
      winPercentage: getWinPercentage(team).toFixed(3),
    }))
  teamsWithRecord.shift() // remove first element (since no team has id 0)
  const sortByRecord = (b, a) => {
    if (a.winPercentage !== b.winPercentage)
      return Number(a.winPercentage) - Number(b.winPercentage)
    return 0
  }
  teamsWithRecord.sort(sortByRecord)
  const { conferences, divisions } = teamsWithRecord.reduce((prev, curr) => {
    const { conference, division } = curr
    const c = conference
    const d = division
    if (prev.conferences) {
      if (prev.conferences[c]) prev.conferences[c].push(curr)
      else
        prev.conferences = {
          ...prev.conferences,
          [c]: [curr],
        }
    } else {
      prev.conferences = {
        [c]: [curr],
      }
    }
    if (prev.divisions) {
      if (prev.divisions[d]) prev.divisions[d].push(curr)
      else
        prev.divisions = {
          ...prev.divisions,
          [d]: [curr],
        }
    } else {
      prev.divisions = {
        [d]: [curr],
      }
    }
    return prev
  }, {})
  Object.keys(conferences).forEach(conference => {
    conferences[conference].sort((b, a) => {
      if (a.winPercentage !== b.winPercentage)
        return Number(a.winPercentage) - Number(b.winPercentage)

      const h2hGames = games.filter(
        game =>
          (game.home_team.id === b.id && game.visitor_team.id === a.id) ||
          (game.home_team.id === a.id && game.visitor_team.id === b.id)
      )
      if (h2hGames.length > 0) {
        const h2hRecord = h2hGames.reduce(
          (record, game) => {
            const winner =
              game.visitor_team_score > game.home_team_score
                ? game.visitor_team
                : game.home_team
            if (record[winner.id]) record[winner.id] += 1
            else record[winner.id] = 1
            return record
          },
          {
            [a.id]: 0,
            [b.id]: 0,
          }
        )
        if (h2hRecord[a.id] !== h2hRecord[b.id])
          return h2hRecord[a.id] - h2hRecord[b.id]
      }
      const bDivisionLeader =
        divisions[b.division].findIndex(team => team.id === b.id) === 0
      const aDivisionLeader =
        divisions[a.division].findIndex(team => team.id === a.id) === 0
      if (aDivisionLeader !== bDivisionLeader) {
        if (aDivisionLeader) return 1
        return -1
      }

      const bWinPercentageAgainstDivision = getWinPercentage(
        getRecord({
          team: b,
          games: filterGames({
            games,
            team: b,
            conferenceDivision: 'division',
          }),
        })
      )
      const aWinPercentageAgainstDivision = getWinPercentage(
        getRecord({
          team: a,
          games: filterGames({
            games,
            team: a,
            conferenceDivision: 'division',
          }),
        })
      )
      if (bWinPercentageAgainstDivision !== aWinPercentageAgainstDivision) {
        return aWinPercentageAgainstDivision - bWinPercentageAgainstDivision
      }

      const bWinPercentageAgainstConference = getWinPercentage(
        getRecord({
          team: b,
          games: filterGames({
            games,
            team: b,
            conferenceDivision: 'conference',
          }),
        })
      )
      const aWinPercentageAgainstConference = getWinPercentage(
        getRecord({
          team: a,
          games: filterGames({
            games,
            team: a,
            conferenceDivision: 'conference',
          }),
        })
      )
      if (bWinPercentageAgainstConference !== aWinPercentageAgainstConference) {
        return aWinPercentageAgainstConference - bWinPercentageAgainstConference
      }
      return 0
    })
  })
  const standings = {
    all: teamsWithRecord,
    conferences,
    divisions,
  }
  return standings
}

export const fetchLists = id =>
  useSwr(`/api/lists${id ? `/${id}` : ''}`, fetcher)
export const saveList = async list =>
  fetcher('/api/lists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(list),
  })
export const updateList = async list =>
  fetcher(`/api/lists/${list.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(list),
  })
export const deleteList = async id =>
  fetcher(`/api/lists/${id}`, {
    method: 'DELETE',
  })

export const fetchTeams = id =>
  useSwr(`/api/teams${id ? `/${id}` : ''}`, fetcher)
export const saveTeam = async team =>
  fetcher('/api/teams', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team),
  })
export const updateTeam = async team =>
  fetcher(`/api/teams/${team.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team),
  })
export const deleteTeam = async id =>
  fetcher(`/api/teams/${id}`, {
    method: 'DELETE',
  })
