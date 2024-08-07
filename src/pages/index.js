import Link from 'next/link'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Games from '@/components/games'
import { fetchNBASchedule } from '@/lib/api'

const TodaysGames = () => {
  const today = format(new Date(), 'yyyy-MM-dd')
  const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd')
  const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd')
  const { data: gamesToday } = fetchNBASchedule({
    start: today,
    end: today,
  })
  const { data: gamesYesterday } = fetchNBASchedule({
    start: yesterday,
    end: yesterday,
  })
  const { data: gamesTomorrow } = fetchNBASchedule({
    start: tomorrow,
    end: tomorrow,
  })
  if (!gamesToday || !gamesYesterday || !gamesTomorrow)
    return (
      <Page>
        <Loading />
      </Page>
    )
  const todayStarted = gamesToday.some(game => !game.status.includes(':'))

  const noGames =
    gamesToday.length === 0 &&
    gamesYesterday.length === 0 &&
    gamesTomorrow.length === 0

  const offseason = true
  return (
    <Page>
      <Layout>
        <Main className='space-y-2 px-2 md:flex md:justify-center md:space-y-0 md:space-x-4 md:px-0 md:pt-4'>
          {noGames ? (
            <div>
              <p>no games today {format(new Date(), 'MMM d, yyyy')}</p>
              {offseason && (
                <p>
                  it's the offseason! to see the last day there were games,{' '}
                  <Link href='/nba/games?date=2024-06-17'>
                    <span className='text-skin-link-accent hover:cursor-pointer hover:text-skin-link-accent-hover'>
                      click here
                    </span>
                  </Link>
                </p>
              )}
            </div>
          ) : (
            <>
              <div>
                {todayStarted ? null : <h2 className='text-xl'>last night</h2>}
                <Games games={todayStarted ? gamesToday : gamesYesterday} />
              </div>
              <div>
                <h2>
                  {todayStarted ? (
                    <>
                      <span className='text-xl'>last night</span>{' '}
                      {format(subDays(new Date(), 1), 'MMM d, yyyy')}
                    </>
                  ) : (
                    <span className='text-xl'>later today</span>
                  )}
                </h2>
                <Games games={todayStarted ? gamesYesterday : gamesToday} />
              </div>
              <div>
                <h2>
                  <span className='text-xl'>tomorrow</span>{' '}
                  {format(addDays(new Date(), 1), 'MMM d, yyyy')}
                </h2>
                <Games games={gamesTomorrow} />
              </div>
            </>
          )}
        </Main>
      </Layout>
    </Page>
  )
}

export default TodaysGames
