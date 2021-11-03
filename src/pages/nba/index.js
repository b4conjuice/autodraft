import { useState } from 'react'
import Link from 'next/link'
import format from 'date-fns/format'

import Page from '@/components/page'
import Main from '@/components/main'
import Layout from '@/components/layout'
import Loading from '@/components/loading'
import Games from '@/components/games'
import DatePicker from '@/components/datePicker'
import Footer from '@/components/footer'
import { fetchNBASchedule, fetchNBAStandings } from '@/lib/api'

const Standings = ({ teams }) => (
  <table className='w-full'>
    <thead className='border-b-4 border-gray-400'>
      <tr>
        <td className='py-1 pl-2'>#</td>
        <td className='py-1 pl-2'>team</td>
        <td className='py-1 text-center'>win</td>
        <td className='py-1 text-center'>loss</td>
        <td className='py-1 text-center'>%</td>
      </tr>
    </thead>
    <tbody>
      {teams.map(
        ({ id, full_name: name, wins, losses, winPercentage }, index) => (
          <tr key={id} className='odd:bg-skin-foreground-alt'>
            <td className='py-1 pl-2'>{index + 1}</td>
            <td className='py-1 pl-2'>
              <Link href={`/nba/teams/${id}`}>
                <a className='hover:text-skin-link-accent-hover'>{name}</a>
              </Link>
            </td>
            <td className='py-1 text-center'>{wins}</td>
            <td className='py-1 text-center'>{losses}</td>
            <td className='py-1 text-center'>
              {`${winPercentage}`.replace('0.', '.')}
            </td>
          </tr>
        )
      )}
    </tbody>
  </table>
)

const TodaysGames = () => {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const { data: games } = fetchNBASchedule({
    start: date,
    end: date,
  })
  const standings = fetchNBAStandings()
  if (!games || !standings)
    return (
      <Page>
        <Layout>
          <Main className='px-2 md:px-0'>
            <div className='mx-auto space-y-2 md:max-w-screen-md'>
              <div className='flex space-x-0 md:space-x-2'>
                <Loading />
              </div>
            </div>
          </Main>
        </Layout>
      </Page>
    )
  return (
    <Page>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <div className='flex space-x-0 md:space-x-2'>
              <input
                type='date'
                className='w-full form-input'
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <div className='hidden md:block'>
                <DatePicker date={date} setDate={setDate} />
              </div>
            </div>

            <Games games={games} />
            <h2>eastern conference</h2>
            <Standings teams={standings.conferences.East} />
            <h2>western conference</h2>
            <Standings teams={standings.conferences.West} />
          </div>
        </Main>
      </Layout>
      <Footer className='flex justify-center md:hidden'>
        <DatePicker date={date} setDate={setDate} />
      </Footer>
    </Page>
  )
}

export default TodaysGames
