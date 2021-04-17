import Link from 'next/link'
import { useRouter } from 'next/router'
import { PlusIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Footer from '@/components/footer'
import { fetchTeams } from '@/lib/api'
import nav from '@/lib/nav'

const Teams = () => {
  const { pathname } = useRouter()
  const { data: teams } = fetchTeams()
  return (
    <Page title="teams">
      <Main className="px-2 md:px-0">
        <div className="mx-auto space-y-2 md:max-w-screen-md">
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
                      <a className="text-blue-700 hover:text-blue-600">
                        {text}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {teams ? (
            <ul className="space-y-2">
              {teams.map(team => (
                <li
                  key={team.id}
                  className="rounded bg-skin-foreground odd:bg-skin-foreground-alt"
                >
                  <div className="space-x-1">
                    <Link
                      href="/fantasy/teams/[id]"
                      as={`/fantasy/teams/${team.id}`}
                    >
                      <a className="block p-2">{team.name}</a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : teams?.length === 0 ? (
            <p>no teams</p>
          ) : (
            <div className="flex justify-center flex-grow">
              <Loading />
            </div>
          )}
        </div>
      </Main>
      <Footer className="flex justify-center">
        <ul className="inline-flex bg-blue-700 divide-x divide-gray-100 rounded-lg">
          <li className="flex justify-center">
            <Link href="/fantasy/teams/new">
              <a className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none">
                <PlusIcon className="w-6 h-6" />
              </a>
            </Link>
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Teams
