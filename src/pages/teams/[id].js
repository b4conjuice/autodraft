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
import { fetchNBATeams, fetchNBATeam, fetchNBASchedule } from '@/lib/api'
import CURRENT_SEASON from '@/config/season'

const Depth = ({ team }) => {
  const positions = ['G', 'G-F', 'F-G', 'F', 'F-C', 'C-F', 'C']
  const getPlayersByPosition = position => {
    const playersByPosition = team
      .filter(player => player.position === position)
      .map(player => player.last_name)
    return playersByPosition.length > 0
      ? `${playersByPosition.join(' ')} (${playersByPosition.length})`
      : ''
  }
  return (
    <div className='flex w-full'>
      <div className='w-24'>
        <table className='w-full border-r-4 border-gray-400 table-fixed'>
          <tbody>
            {positions.map(position =>
              getPlayersByPosition(position) ? (
                <tr key={position} className='odd:bg-skin-foreground-alt'>
                  <td className='py-1 text-center'>{position}</td>
                </tr>
              ) : null
            )}
            {team.some(player => player.position === '') && (
              <tr className='odd:bg-skin-foreground-alt'>
                <td className='py-1 text-center'>N/A</td>
              </tr>
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
                    .filter(player => player.position === position)
                    .map(player => (
                      <td
                        key={player.id}
                        className='max-w-sm px-1 py-1 text-center truncate'
                      >
                        <Link href='/players/[id]' as={`/players/${player.id}`}>
                          <a className='hover:text-skin-link-accent-hover'>
                            {player.last_name || player.first_name}
                          </a>
                        </Link>
                      </td>
                    ))}
                </tr>
              ) : null
            )}
            {team.some(player => player.position === '') && (
              <tr className='px-4 odd:bg-skin-foreground-alt'>
                {team
                  .filter(player => player.position === '')
                  .map(player => (
                    <td
                      key={player.id}
                      className='max-w-sm px-1 py-1 text-center truncate'
                    >
                      <Link href='/players/[id]' as={`/players/${player.id}`}>
                        <a className='hover:text-skin-link-accent-hover'>
                          {player.last_name || player.first_name}
                        </a>
                      </Link>
                    </td>
                  ))}
              </tr>
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
      `/teams/${e.target.value}${
        router.query.season ? `?season=${router.query.season}` : ''
      }`
    )
  }
  return (
    <select
      className='w-full text-center form-select'
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
  if (!teams || !players || !regularSeasonGames || !postSeasonGames)
    return (
      <Page>
        <Loading />
      </Page>
    )
  const team = teams.find(t => t.id === parseInt(id, 10))
  const wins = regularSeasonGames
    .filter(g => g.status === 'Final')
    .reduce((array, game) => {
      if (
        (game.visitor_team_score > game.home_team_score &&
          game.visitor_team.id === team.id) ||
        (game.home_team_score > game.visitor_team_score &&
          game.home_team.id === team.id)
      )
        array.push('W')
      return array
    }, [])
  const games = gameType === 'regular' ? regularSeasonGames : postSeasonGames
  return (
    <Page title={team.full_name}>
      <Layout>
        <Main>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <div className='flex items-center justify-center space-x-3'>
              <h1 className='text-2xl text-center'>
                <span className='hidden md:block'>{team.full_name}</span>
                <span className='md:hidden'>{team.abbreviation}</span>
              </h1>
              <h2 className='text-center'>
                {wins.length}-
                {regularSeasonGames.filter(g => g.status === 'Final').length -
                  wins.length}
              </h2>
            </div>
            <Depth team={players} />
            {(!season || season === CURRENT_SEASON) && (
              <BoxScore
                stats={players.map(p => ({
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
                    className='inline-flex items-center justify-center w-full space-x-3 cursor-pointer'
                  >
                    <span
                      className={gameType === 'post' ? 'text-gray-500' : ''}
                    >
                      regular season
                    </span>
                    <span className='relative'>
                      <span className='block w-10 h-6 bg-gray-400 rounded-full shadow-inner' />
                      <span
                        className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-skin-button-accent ${
                          gameType === 'post'
                            ? 'transform translate-x-full'
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
                          className='absolute w-0 h-0 opacity-0'
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
                      <Link href='/games/[id]' as={`/games/${game.id}`}>
                        <a className='block p-2 space-x-1 text-xl text-skin-base hover:text-skin-link-accent-hover'>
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
                pathname: `/teams/${query.id}`,
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
