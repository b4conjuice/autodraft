import { useState } from 'react'
import format from 'date-fns/format'

import Page from '@/components/page'
import Main from '@/components/main'
import Layout from '@/components/layout'
import Loading from '@/components/loading'
import Games from '@/components/games'
import DatePicker from '@/components/datePicker'
import Footer from '@/components/footer'
import { fetchNBASchedule } from '@/lib/api'

const TodaysGames = () => {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const { data: games } = fetchNBASchedule({
    start: date,
    end: date,
  })
  return (
    <Page>
      <Layout>
        <Main className="px-2 md:px-0">
          <div className="mx-auto space-y-2 md:max-w-screen-md">
            <div className="flex space-x-0 md:space-x-2">
              <input
                type="date"
                className="w-full form-input"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <div className="hidden md:block">
                <DatePicker date={date} setDate={setDate} />
              </div>
            </div>
            {games ? (
              <Games games={games} />
            ) : (
              <div className="flex justify-center flex-grow">
                <Loading />
              </div>
            )}
          </div>
        </Main>
      </Layout>
      <Footer className="flex justify-center md:hidden">
        <DatePicker date={date} setDate={setDate} />
      </Footer>
    </Page>
  )
}

export default TodaysGames
