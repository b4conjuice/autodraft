import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import format from 'date-fns/format'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import BoxScore from '@/components/boxScore'
import SelectSeason from '@/components/selectSeason'
import Footer from '@/components/footer'
import { getPosition } from '@/lib/espnRank'
import getMin from '@/lib/getMin'
import {
  fetchNBATeams,
  fetchNBATeam,
  fetchNBASchedule,
  fetchNBARecord,
} from '@/lib/api'
import CURRENT_SEASON from '@/config/season'

const Depth = ({ team }) => {
  const positions = ['PG', 'SG', 'SF', 'PF', 'C']
  const getPlayersByPosition = position => {
    const playersByPosition = team
      .filter(player => player.position?.some(pos => pos === position))
      .map(player => player.last_name)
    return playersByPosition.length > 0
      ? `${playersByPosition.join(' ')} (${playersByPosition.length})`
      : ''
  }
  return (
    <div className='flex w-full'>
      <div className='w-12'>
        <table className='w-full table-fixed border-r-4 border-gray-400'>
          <tbody>
            {positions.map(position =>
              getPlayersByPosition(position) ? (
                <tr key={position} className='odd:bg-skin-foreground-alt'>
                  <td className='py-1 text-center'>{position}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <div className='flex flex-grow overflow-x-auto'>
        <table className='w-full'>
          <tbody>
            {positions.map(position =>
              getPlayersByPosition(position) ? (
                <tr key={position} className='px-1 odd:bg-skin-foreground-alt'>
                  {team
                    .filter(player =>
                      player.position?.some(pos => pos === position)
                    )
                    .map(player => (
                      <td
                        key={player.id}
                        className='max-w-sm truncate px-1 py-1 text-center'
                      >
                        <Link href={`/nba/players/${player.id}`}>
                          <a className='hover:text-skin-link-accent-hover'>
                            {player.last_name || player.first_name}
                          </a>
                        </Link>
                      </td>
                    ))}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const SelectTeam = ({ teams, team }) => {
  const router = useRouter()
  const handleChange = e => {
    router.push(
      `/nba/teams/${e.target.value}${
        router.query.season ? `?season=${router.query.season}` : ''
      }`
    )
  }
  return (
    <select
      className='form-select w-full text-center'
      onChange={handleChange}
      value={team}
    >
      <option>select team</option>
      {teams.map(({ id, full_name: name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  )
}

const Team = () => {
  const [gameType, setGameType] = useState('regular')
  const { query, replace } = useRouter()
  const { id, season } = query
  const { data: teams } = fetchNBATeams()
  const players = fetchNBATeam(id, season)
  const { data: regularSeasonGames } = fetchNBASchedule({ team: id, season })
  const { data: postSeasonGames } = fetchNBASchedule({
    team: id,
    season,
    postseason: true,
  })
  const record = fetchNBARecord({ team: id })
  if (!teams || !players || !regularSeasonGames || !postSeasonGames || !record)
    return (
      <Page>
        <Loading />
      </Page>
    )
  const team = teams.find(t => t.id === parseInt(id, 10))
  const games = gameType === 'regular' ? regularSeasonGames : postSeasonGames
  return (
    <Page title={team.full_name}>
      <Layout>
        <Main>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <div className='flex items-center justify-center space-x-3'>
              <h1 className='text-center text-2xl'>
                <span className='hidden md:block'>{team.full_name}</span>
                <span className='md:hidden'>{team.abbreviation}</span>
              </h1>
              <h2 className='text-center'>{record}</h2>
            </div>
            <Depth
              team={players
                .sort((b, a) => {
                  const bMin = getMin(b.min)
                  const aMin = getMin(a.min)
                  if (bMin < aMin) {
                    return 1
                  }
                  if (bMin > aMin) {
                    return -1
                  }
                  return 0
                })
                .map(p => {
                  return {
                    id: p.id,
                    last_name: p.last_name,
                    position: getPosition(`${p.first_name} ${p.last_name}`),
                  }
                })}
            />
            {(!season || season === CURRENT_SEASON) && (
              <BoxScore
                stats={players.map(p => ({
                  min: '0:00',
                  pts: 0,
                  fgm: 0,
                  fga: 0,
                  fg_pct: 0,
                  ftm: 0,
                  fta: 0,
                  ft_pct: 0,
                  fg3m: 0,
                  reb: 0,
                  ast: 0,
                  turnover: 0,
                  stl: 0,
                  blk: 0,
                  ...p,
                  player: {
                    id: p.id,
                    last_name: p.last_name,
                    position: p.position,
                  },
                }))}
              />
            )}
            {games.length > 0 && (
              <>
                {postSeasonGames.length > 0 && (
                  <label
                    htmlFor='checked'
                    className='inline-flex w-full cursor-pointer items-center justify-center space-x-3'
                  >
                    <span
                      className={gameType === 'post' ? 'text-gray-500' : ''}
                    >
                      regular season
                    </span>
                    <span className='relative'>
                      <span className='block h-6 w-10 rounded-full bg-gray-400 shadow-inner' />
                      <span
                        className={`focus-within:shadow-outline absolute inset-y-0 left-0 mt-1 ml-1 block h-4 w-4 rounded-full bg-skin-button-accent shadow transition-transform duration-300 ease-in-out ${
                          gameType === 'post'
                            ? 'translate-x-full transform'
                            : ''
                        }`}
                      >
                        <input
                          id='checked'
                          type='checkbox'
                          checked
                          onChange={() =>
                            setGameType(
                              gameType === 'regular' ? 'post' : 'regular'
                            )
                          }
                          className='absolute h-0 w-0 opacity-0'
                        />
                      </span>
                    </span>
                    <span
                      className={gameType === 'regular' ? 'text-gray-500' : ''}
                    >
                      post season
                    </span>
                  </label>
                )}
                <ul>
                  {games.map(game => (
                    <li
                      key={game.id}
                      className='rounded bg-skin-foreground odd:bg-skin-foreground-alt'
                    >
                      <Link href={`/nba/games/${game.id}`}>
                        <a className='block space-x-1 p-2 text-xl text-skin-base hover:text-skin-link-accent-hover'>
                          {game.home_team.id === team.id
                            ? `vs ${game.visitor_team.abbreviation}`
                            : `@ ${game.home_team.abbreviation}`}{' '}
                          {game.status === 'Final' &&
                            `${game.visitor_team_score}-${game.home_team_score}`}{' '}
                          {game.status === 'Final' &&
                            ((game.visitor_team_score > game.home_team_score &&
                              game.visitor_team.id === team.id) ||
                            (game.home_team_score > game.visitor_team_score &&
                              game.home_team.id === team.id)
                              ? 'W'
                              : 'L')}{' '}
                          {format(
                            new Date(game.date.replace('Z', '')),
                            'MMM d, yyyy'
                          )}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Main>
      </Layout>
      <Footer className='flex bg-skin-background'>
        <div className='w-2/3'>
          <SelectTeam teams={teams} team={id} />
        </div>
        <div className='w-1/3'>
          <SelectSeason
            season={season}
            handleChange={e => {
              replace({
                pathname: `/nba/teams/${query.id}`,
                query: { season: e.target.value },
              })
            }}
          />
        </div>
      </Footer>
    </Page>
  )
}

export default Team
