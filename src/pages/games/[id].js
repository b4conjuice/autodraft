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
          <div className="mx-auto space-y-2 md:max-w-screen-md">
            <div className="text-center">
              <h1 className="space-x-2 text-2xl">
                <span className="space-x-1">
                  <Link
                    href="/teams/[id]"
                    as={`/teams/${game.visitor_team.id}`}
                  >
                    <a className="text-blue-700 hover:text-blue-600">
                      {game.visitor_team.abbreviation}
                    </a>
                  </Link>
                  <span>@</span>
                  <Link href="/teams/[id]" as={`/teams/${game.home_team.id}`}>
                    <a className="text-blue-700 hover:text-blue-600">
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
                  <h3 className="text-center">Leaders</h3>
                  <div className="flex divide-x-4 divide-gray-400 divide">
                    <Leaders
                      stats={game.stats.filter(
                        s => s.team.id === game.visitor_team.id
                      )}
                      className="w-1/2"
                    />
                    <Leaders
                      stats={game.stats.filter(
                        s => s.team.id === game.home_team.id
                      )}
                      className="w-1/2"
                    />
                  </div>
                </div>
                <BoxScore
                  stats={game.stats.filter(
                    s => s.team.id === game.visitor_team.id
                  )}
                />
                <BoxScore
                  stats={game.stats.filter(
                    s => s.team.id === game.home_team.id
                  )}
                />
              </>
            ) : null}
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default Game
