import Link from 'next/link'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import { fetchNBATeams } from '@/lib/api'

const Teams = () => {
  const { data: teams } = fetchNBATeams()
  if (!teams)
    return (
      <Page>
        <Loading />
      </Page>
    )
  return (
    <Page title="teams">
      <Main className="space-y-2">
        <div className="flex px-2 space-x-2">
          <ul className="w-1/2 space-y-2">
            {teams
              .filter(team => team.conference === 'West')
              .map(team => (
                <li
                  key={team.id}
                  className="bg-gray-300 rounded odd:bg-gray-400"
                >
                  <Link href="/teams/[id]" as={`/teams/${team.id}`}>
                    <a className="block p-2 space-x-1 text-xl text-center text-gray-900 hover:text-blue-600">
                      <span className="hidden md:inline">{team.full_name}</span>
                      <span className="inline md:hidden">
                        <span className="text-sm">{team.abbreviation}</span>{' '}
                        {team.name}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
          <ul className="w-1/2 space-y-2">
            {teams
              .filter(team => team.conference === 'East')
              .map(team => (
                <li
                  key={team.id}
                  className="bg-gray-300 rounded odd:bg-gray-400"
                >
                  <Link href="/teams/[id]" as={`/teams/${team.id}`}>
                    <a className="block p-2 space-x-1 text-xl text-center text-gray-900 hover:text-blue-600">
                      <span className="hidden md:inline">{team.full_name}</span>
                      <span className="inline md:hidden">
                        <span className="text-sm">{team.abbreviation}</span>{' '}
                        {team.name}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Main>
    </Page>
  )
}

export default Teams
