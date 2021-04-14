import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Leaders from '@/components/leaders'
import BoxScore from '@/components/boxScore'
import Footer from '@/components/footer'
import { searchNBAPlayers, fetchNBASchedule, fetchNBAGames } from '@/lib/api'
import nav from '@/lib/nav'

const getTopPlayers = games => {
  const players = games.map(game => {
    const {
      pts,
      reb,
      ast,
      stl,
      blk,
      turnover,
      fgm,
      fga,
      ftm,
      fta,
      fg3m,
      player: { id, first_name: firstName, last_name: lastName, position },
      team: { id: teamId, abbreviation },
    } = game
    const score =
      pts * 1 +
      reb * 1 +
      ast * 1.5 +
      stl * 1.5 +
      blk * 2 +
      turnover * -1 +
      (fgm - fga) +
      (ftm - ftm) +
      fg3m
    return {
      id,
      name: `${firstName} ${lastName}`,
      position,
      teamId,
      abbreviation,
      score,
      stats: {
        pts,
        reb,
        ast,
        stl,
        blk,
        turnover,
        fgm,
        fga,
        ftm,
        fta,
        fg3m,
      },
    }
  })
  players.sort((b, a) => a.score - b.score)
  return players
}

const Fantasy = () => {
  const { pathname } = useRouter()
  const [search, setSearch] = useState('')
  const results = searchNBAPlayers(search)
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const { data: schedule } = fetchNBASchedule({
    start: date,
    end: date,
  })
  // const today = format(new Date(), 'yyyy-MM-dd')
  // const { data: gamesToday } = fetchNBASchedule({
  //   start: today,
  //   end: today,
  // })
  const { data: games } = fetchNBAGames(schedule?.map(({ id }) => id))
  const topPlayers = games ? getTopPlayers(games) : []
  const filteredGames = games
    ? games.filter(game => results.some(result => result.id === game.player.id))
    : []
  console.log({ games, results, topPlayers })
  if (!games)
    return (
      <Page title="fantasy">
        <Loading />
      </Page>
    )
  return (
    <Page title="fantasy">
      <Main className="flex flex-col px-2 space-y-2">
        <nav className="px-2 text-md">
          <ul className="flex justify-center space-x-3">
            {nav.map(({ url, text }) => (
              <li
                key={url}
                className={
                  pathname.includes(url) ? 'border-b-2 border-blue-700' : ''
                }
              >
                {pathname === url ? (
                  <span>{text}</span>
                ) : (
                  <Link href={url}>
                    <a className="text-blue-700 hover:text-blue-600">{text}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <input
          type="date"
          className="w-full form-input"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <h2 className="font-semibold">top players</h2>
        {games?.length > 0 && (
          <ul className="">
            {topPlayers?.slice(0, 5).map(player => (
              <li key={player.id} className="px-2 odd:bg-skin-foreground-alt">
                <div className="flex space-x-2">
                  <Link href="/players/[id]" as={`/players/${player.id}`}>
                    <a>{player.name}</a>
                  </Link>
                  <Link href="/teams/[id]" as={`/teams/${player.teamId}`}>
                    <a>{player.abbreviation}</a>
                  </Link>
                </div>
                <div className="flex space-x-2">
                  <span>{player.stats.pts} pts</span>
                  <span>{player.stats.reb} reb</span>
                  <span>{player.stats.ast} ast</span>
                  <span>{player.stats.stl} stl</span>
                  <span>{player.stats.blk} blk</span>
                  <span>{player.stats.fg3m} 3pm</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h2 className="font-semibold">leaders</h2>
        {games?.length > 0 && <Leaders stats={games} />}
        <div className="flex form-input focus-within:border-blue-700">
          <input
            placeholder="search players"
            className="w-full focus:outline-none"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search !== '' && (
            <button type="button" onClick={() => setSearch('')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        {games?.length > 0 && (
          <BoxScore stats={filteredGames.length > 0 ? filteredGames : games} />
        )}
      </Main>
      <Footer className="flex justify-center">
        <ul className="inline-flex bg-blue-700 divide-x divide-gray-100 rounded-lg">
          <li className="flex justify-center">
            <button
              className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
              type="button"
              onClick={() => {
                const [year, month, day] = date
                  .split('-')
                  .map(d => parseInt(d, 10))
                setDate(
                  format(
                    subDays(new Date(year, month - 1, day), 1),
                    'yyyy-MM-dd'
                  )
                )
              }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 chevron-left"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li className="flex justify-center">
            <button
              className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
              type="button"
              onClick={() => {
                setDate(format(new Date(), 'yyyy-MM-dd'))
              }}
              disabled={date === format(new Date(), 'yyyy-MM-dd')}
            >
              <svg
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current calendar"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li className="flex justify-center">
            <button
              className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
              type="button"
              onClick={() => {
                const [year, month, day] = date
                  .split('-')
                  .map(d => parseInt(d, 10))
                setDate(
                  format(
                    addDays(new Date(year, month - 1, day), 1),
                    'yyyy-MM-dd'
                  )
                )
              }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 chevron-right"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Fantasy
