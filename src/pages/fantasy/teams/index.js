import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Footer from '@/components/footer'
import { fetchTeams } from '@/lib/api'

const Teams = () => {
  const { data: teams } = fetchTeams()
  return (
    <Page title='teams'>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            {teams ? (
              <ul className='space-y-2'>
                {teams.map(team => (
                  <li
                    key={team.id}
                    className='rounded bg-skin-foreground odd:bg-skin-foreground-alt'
                  >
                    <div className='space-x-1'>
                      <Link href={`/fantasy/teams/${team.id}`}>
                        <a className='block p-2'>{team.name}</a>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : teams?.length === 0 ? (
              <p>no teams</p>
            ) : (
              <div className='flex justify-center flex-grow'>
                <Loading />
              </div>
            )}
          </div>
        </Main>
      </Layout>
      <Footer className='flex justify-center'>
        <ul className='inline-flex divide-x divide-gray-100 rounded-lg bg-skin-button-accent'>
          <li className='flex justify-center'>
            <Link href='/fantasy/teams/new'>
              <a className='p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none'>
                <PlusIcon className='w-6 h-6' />
              </a>
            </Link>
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Teams
