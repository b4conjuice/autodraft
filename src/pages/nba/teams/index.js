import Link from 'next/link'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import { fetchNBATeams, fetchNBARecord } from '@/lib/api'

const TeamListItem = ({ team }) => {
  const record = fetchNBARecord({ team: team.id })
  return (
    <li className='rounded bg-skin-foreground odd:bg-skin-foreground-alt'>
      <Link href={`/nba/teams/${team.id}`}>
        <a className='block p-2 space-x-1 text-xl text-center text-skin-base hover:text-skin-link-accent-hover'>
          <span className='hidden md:inline'>{team.full_name}</span>
          <span className='inline md:hidden'>
            <span className='text-sm'>{team.abbreviation}</span> {team.name}
          </span>
          {record && <span>{record}</span>}
        </a>
      </Link>
    </li>
  )
}

const Teams = () => {
  const { data: teams } = fetchNBATeams()
  if (!teams)
    return (
      <Page>
        <Loading />
      </Page>
    )
  return (
    <Page title='teams'>
      <Layout>
        <Main className='px-2 md:px-0 md:pt-4'>
          <div className='flex mx-auto space-x-2 md:max-w-screen-md'>
            <ul className='w-1/2 space-y-2'>
              {teams
                .filter(team => team.conference === 'West')
                .map(team => (
                  <TeamListItem key={team.id} team={team} />
                ))}
            </ul>
            <ul className='w-1/2 space-y-2'>
              {teams
                .filter(team => team.conference === 'East')
                .map(team => (
                  <TeamListItem key={team.id} team={team} />
                ))}
            </ul>
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default Teams
