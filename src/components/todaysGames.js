import format from 'date-fns/format'

import Games from '@/components/games'
import Loading from '@/components/loading'
import { fetchNBASchedule } from '@/lib/api'

const TodaysGames = () => {
  const today = format(new Date(), 'yyyy-MM-dd')
  const { data: gamesToday } = fetchNBASchedule({
    start: today,
    end: today,
  })
  if (!gamesToday) return <Loading />
  return <Games games={gamesToday} />
}

export default TodaysGames
