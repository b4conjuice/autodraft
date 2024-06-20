import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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
  const { query, push, pathname } = useRouter()
  const today = format(new Date(), 'yyyy-MM-dd')
  const [date, setDate] = useState(query.date ? String(query.date) : today)
  const { data: games } = fetchNBASchedule({
    start: date,
    end: date,
  })
  useEffect(() => {
    if (query.date) {
      setDate(String(query.date))
    }
  }, [query, setDate])
  const updateDate = date => {
    setDate(date)
    const url = {
      pathname: pathname,
      query:
        date && date !== today
          ? {
              date,
            }
          : undefined,
    }
    push(url).catch(err => console.log(err))
  }
  return (
    <Page>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <div className='flex space-x-0 md:space-x-2'>
              <input
                type='date'
                className='form-input w-full'
                value={date}
                onChange={e => {
                  const { value } = e.target
                  updateDate(value)
                }}
              />
              <div className='hidden md:block'>
                <DatePicker date={date} setDate={updateDate} />
              </div>
            </div>
            {!games ? (
              <div className='flex flex-grow justify-center'>
                <Loading />
              </div>
            ) : games.length > 0 ? (
              <Games games={games} />
            ) : (
              <p>no games</p>
            )}
          </div>
        </Main>
      </Layout>
      <Footer className='flex justify-center md:hidden'>
        <DatePicker date={date} setDate={updateDate} />
      </Footer>
    </Page>
  )
}

export default TodaysGames
