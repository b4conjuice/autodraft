import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import players from '@/lib/espnRank'

const Players = () => (
  <Page title='teams'>
    <Layout>
      <Main className='px-2 md:px-0'>
        <div className='mx-auto space-y-2 md:max-w-screen-md'>
          <ul>
            {players.map(({ name, team, position }, index) => (
              <li key={name}>
                {index + 1} {name} {team} {position.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </Layout>
  </Page>
)

export default Players
