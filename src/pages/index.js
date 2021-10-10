import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'
import getWeek from 'date-fns/getWeek'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Games from '@/components/games'
import TodaysGames from '@/components/todaysGames'
import { fetchNBASchedule } from '@/lib/api'

const Home = () => {
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
  return (
    <Page>
      <Layout todaysGames={false}>
        {/* <Main className='px-2 space-y-2 md:space-y-0 md:flex md:space-x-4 md:justify-center md:px-0 md:pt-4'> */}
        <Main className='px-2 space-y-2 md:mx-auto'>
          {getWeek(new Date())}
          <div>
            {todayStarted ? (
              <TodaysGames />
            ) : (
              <>
                <h2 className='text-xl'>last night</h2>
                <Games games={gamesYesterday} />
              </>
            )}
          </div>
          <div>
            {todayStarted ? (
              gamesYesterday.length > 0 ? (
                <>
                  <h2>
                    <span className='text-xl'>last night</span>{' '}
                    {format(subDays(new Date(), 1), 'MMM d, yyyy')}
                  </h2>
                  <Games games={gamesYesterday} />
                </>
              ) : null
            ) : gamesToday.length > 0 ? (
              <Disclosure>
                <Disclosure.Button>
                  <h2 className='flex items-center space-x-2'>
                    <span className='text-xl'>later today</span>
                    <ChevronDownIcon className='w-6 h-6' />
                  </h2>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <TodaysGames />
                </Disclosure.Panel>
              </Disclosure>
            ) : null}
          </div>
          {gamesTomorrow.length > 0 && (
            <div>
              <Disclosure>
                <Disclosure.Button>
                  <h2 className='flex items-center space-x-2'>
                    <span className='text-xl'>tomorrow</span>{' '}
                    <span>{format(addDays(new Date(), 1), 'MMM d, yyyy')}</span>
                    <ChevronDownIcon className='w-6 h-6' />
                  </h2>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Games games={gamesTomorrow} />
                </Disclosure.Panel>
              </Disclosure>
            </div>
          )}
        </Main>
      </Layout>
    </Page>
  )
}

export default Home
