import { useState } from 'react'
import Link from 'next/link'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import { searchNBAPlayers } from '@/lib/api'

const Players = () => {
  const [search, setSearch] = useState('')
  const results = searchNBAPlayers(search)
  return (
    <Page title='players'>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <input
              placeholder='enter player name'
              className='form-input w-full'
              type='text'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {!search ? null : !results ? (
              <div className='flex flex-grow justify-center'>
                <Loading />
              </div>
            ) : (
              <ul className='space-y-2'>
                {results
                  .filter(player => player.position)
                  .map(player => (
                    <li
                      key={player.id}
                      className='rounded bg-skin-foreground p-2 odd:bg-skin-foreground-alt'
                    >
                      <div className='space-x-1'>
                        <Link href={`/nba/players/${player.id}`}>
                          <a>
                            {player.first_name} {player.last_name}
                          </a>
                        </Link>
                        <Link href={`/nba/teams/${player.team.id}`}>
                          <a>{player.team.abbreviation}</a>
                        </Link>
                        <span>{player.position}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default Players
