import { useState } from 'react'
import Link from 'next/link'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import { searchNBAPlayers } from '@/lib/api'

const Players = () => {
  const [search, setSearch] = useState('')
  const results = searchNBAPlayers(search)
  return (
    <Page title="players">
      <Main className="px-2 md:px-0">
        <div className="mx-auto space-y-2 md:max-w-screen-md">
          <input
            placeholder="enter player name"
            className="w-full form-input"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {!search ? null : !results ? (
            <div className="flex justify-center flex-grow">
              <Loading />
            </div>
          ) : (
            <ul className="space-y-2">
              {results
                .filter(player => player.position)
                .map(player => (
                  <li
                    key={player.id}
                    className="p-2 rounded bg-skin-foreground odd:bg-skin-foreground-alt"
                  >
                    <div className="space-x-1">
                      <Link href="/players/[id]" as={`/players/${player.id}`}>
                        <a>
                          {player.first_name} {player.last_name}
                        </a>
                      </Link>
                      <Link href="/teams/[id]" as={`/teams/${player.team.id}`}>
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
    </Page>
  )
}

export default Players
