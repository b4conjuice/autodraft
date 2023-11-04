import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Leaders from '@/components/leaders'
import BoxScore from '@/components/boxScore'
import { fetchNBAGame } from '@/lib/api'
import Layout from '@/components/layout'

const Game = () => {
  const { query } = useRouter()
  const [showAwayTeam, setShowAwayTeam] = useState(true)
  const { id } = query
  const { data: game, error } = fetchNBAGame(id)
  if (error || !game || !game.stats)
    return (
      <Page>
        <Loading />
      </Page>
    )
  return (
    <Page
      title={`${game.visitor_team.abbreviation} @ ${game.home_team.abbreviation}`}
    >
      <Layout>
        <Main>
          <div className='mx-auto space-y-2 md:max-w-screen-lg'>
            <div className='text-center'>
              <h1 className='space-x-2 text-2xl'>
                <span className='space-x-1'>
                  <Link href={`/nba/teams/${game.visitor_team.id}`}>
                    <a className='text-skin-link-accent hover:text-skin-link-accent-hover'>
                      {game.visitor_team.abbreviation}
                    </a>
                  </Link>
                  <span>@</span>
                  <Link href={`/nba/teams/${game.home_team.id}`}>
                    <a className='text-skin-link-accent hover:text-skin-link-accent-hover'>
                      {game.home_team.abbreviation}
                    </a>
                  </Link>
                </span>
                <span>
                  {game.visitor_team_score}-{game.home_team_score}
                </span>
              </h1>
              <h2>
                <span>{game.status}</span>
                {game.time ? <span> {game.time}</span> : null}
              </h2>
            </div>
            {!game.stats ? (
              <Loading />
            ) : game.stats.length > 0 ? (
              <>
                <div>
                  <h3 className='text-center'>Leaders</h3>
                  <div className='divide flex divide-x-4 divide-gray-400'>
                    <Leaders
                      stats={game.stats.filter(
                        s => s.team.id === game.visitor_team.id
                      )}
                      className='w-1/2'
                    />
                    <Leaders
                      stats={game.stats.filter(
                        s => s.team.id === game.home_team.id
                      )}
                      className='w-1/2'
                    />
                  </div>
                </div>
                <div className='hidden space-y-2 md:block'>
                  <BoxScore
                    stats={game.stats.filter(
                      s => s.team.id === game.visitor_team.id
                    )}
                    includeTotals
                  />
                  <BoxScore
                    stats={game.stats.filter(
                      s => s.team.id === game.home_team.id
                    )}
                    includeTotals
                  />
                </div>
                <div className='block space-y-2 md:hidden'>
                  <label
                    htmlFor='checked'
                    className='inline-flex cursor-pointer items-center justify-center space-x-3 divide-skin-foreground'
                  >
                    <span className={!showAwayTeam ? 'text-gray-500' : ''}>
                      {game.visitor_team.abbreviation}
                    </span>
                    <span className='relative'>
                      <span className='block h-6 w-10 rounded-full bg-gray-400 shadow-inner' />
                      <span
                        className={`focus-within:shadow-outline absolute inset-y-0 left-0 mt-1 ml-1 block h-4 w-4 rounded-full bg-skin-button-accent shadow transition-transform duration-300 ease-in-out ${
                          !showAwayTeam ? 'translate-x-full transform' : ''
                        }`}
                      >
                        <input
                          id='checked'
                          type='checkbox'
                          checked
                          onChange={() => setShowAwayTeam(!showAwayTeam)}
                          className='absolute h-0 w-0 opacity-0'
                        />
                      </span>
                    </span>
                    <span className={showAwayTeam ? 'text-gray-500' : ''}>
                      {game.home_team.abbreviation}
                    </span>
                  </label>
                  {showAwayTeam ? (
                    <BoxScore
                      stats={game.stats.filter(
                        s => s.team.id === game.visitor_team.id
                      )}
                      includeTotals
                    />
                  ) : (
                    <BoxScore
                      stats={game.stats.filter(
                        s => s.team.id === game.home_team.id
                      )}
                      includeTotals
                    />
                  )}
                </div>
              </>
            ) : null}
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default Game
