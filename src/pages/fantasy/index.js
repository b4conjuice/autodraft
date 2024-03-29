import { useState } from 'react'
import Link from 'next/link'
import format from 'date-fns/format'
import { XCircleIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Leaders from '@/components/leaders'
import BoxScore from '@/components/boxScore'
import DatePicker from '@/components/datePicker'
import Footer from '@/components/footer'
import { searchNBAPlayers, fetchNBASchedule, fetchNBAGames } from '@/lib/api'

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
  const [search, setSearch] = useState('')
  const results = searchNBAPlayers(search)
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const { data: schedule } = fetchNBASchedule({
    start: date,
    end: date,
  })
  const { data: games } = fetchNBAGames(schedule?.map(({ id }) => id))

  const topPlayers = games ? getTopPlayers(games) : []
  const filteredGames = games
    ? games.filter(game => results.some(result => result.id === game.player.id))
    : []
  return (
    <Page title='fantasy'>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <div className='flex space-x-0 md:space-x-2'>
              <input
                type='date'
                className='form-input w-full'
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <div className='hidden md:block'>
                <DatePicker date={date} setDate={setDate} />
              </div>
            </div>
            {games?.length > 0 ? (
              <>
                <h2 className='font-semibold'>top players</h2>
                <ul className=''>
                  {topPlayers?.slice(0, 5).map(player => (
                    <li
                      key={player.id}
                      className='px-2 odd:bg-skin-foreground-alt'
                    >
                      <div className='flex space-x-2'>
                        <Link href={`/nba/players/${player.id}`}>
                          <a className='hover:text-skin-link-accent-hover'>
                            {player.name}
                          </a>
                        </Link>
                        <Link href={`/nba/teams/${player.teamId}`}>
                          <a className='hover:text-skin-link-accent-hover'>
                            {player.abbreviation}
                          </a>
                        </Link>
                      </div>
                      <div className='flex space-x-2'>
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
                <h2 className='font-semibold'>leaders</h2>
                <Leaders stats={games} />
                <div className='form-input flex focus-within:border-blue-700'>
                  <input
                    placeholder='search players'
                    className='w-full focus:outline-none'
                    type='text'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  {search !== '' && (
                    <button type='button' onClick={() => setSearch('')}>
                      <XCircleIcon className='h-6 w-6' />
                    </button>
                  )}
                </div>
                <BoxScore
                  stats={filteredGames.length > 0 ? filteredGames : games}
                />{' '}
              </>
            ) : schedule?.length === 0 ? (
              <div>no games today</div>
            ) : games?.length === 0 ? (
              <div>no games started</div>
            ) : (
              <div className='flex flex-grow justify-center'>
                <Loading />
              </div>
            )}
          </div>
        </Main>
      </Layout>
      <Footer className='flex justify-center md:hidden'>
        <DatePicker date={date} setDate={setDate} />
      </Footer>
    </Page>
  )
}

export default Fantasy
