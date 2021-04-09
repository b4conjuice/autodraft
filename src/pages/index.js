import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'

import Page from '@/components/page'
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
  return (
    <Page>
      <Main className="px-2">
        <div className="space-y-2 md:space-y-0 md:flex md:space-x-4 md:justify-center">
          <div>
            {todayStarted ? null : <h2 className="text-xl">last night</h2>}
            <Games games={todayStarted ? gamesToday : gamesYesterday} />
          </div>
          <div>
            <h2>
              {todayStarted ? (
                <>
                  <span className="text-xl">last night</span>{' '}
                  {format(subDays(new Date(), 1), 'MMM d, yyyy')}
                </>
              ) : (
                <span className="text-xl">later today</span>
              )}
            </h2>
            <Games games={todayStarted ? gamesYesterday : gamesToday} />
          </div>
          <div>
            <h2>
              <span className="text-xl">tomorrow</span>{' '}
              {format(addDays(new Date(), 1), 'MMM d, yyyy')}
            </h2>
            <Games games={gamesTomorrow} />
          </div>
        </div>
      </Main>
    </Page>
  )
}

export default TodaysGames
