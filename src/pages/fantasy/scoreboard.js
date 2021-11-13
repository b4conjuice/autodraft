import { useState } from 'react'
import Page from '@/components/page'
import Main from '@/components/main'
import Layout from '@/components/layout'
import Scoreboard from '@/components/scoreboard'
import useLocalStorage from '@/lib/useLocalStorage'

const catStatMap = {
  AST: 'ast',
  BLK: 'blk',
  '3PM': 'fg3m',
  'FG%': 'fg_pct',
  'FT%': 'ft_pct',
  PTS: 'pts',
  REB: 'reb',
  STL: 'stl',
  TO: 'turnover',
}

const ScoreboardPage = () => {
  const [scoreboard] = useLocalStorage('scoreboard', {
    categories: [],
    matchups: [],
  })
  const { categories, matchups } = scoreboard
  const [compare, setCompare] = useState([])
  const stats = matchups?.flat().map(team => ({
    player: { last_name: team.name },
    ...team.stats.reduce((curr, stat, idx) => {
      const cat = categories ? categories[idx] : ''
      curr[catStatMap[cat]] = cat.includes('%') ? stat * 100 : stat
      return curr
    }, {}),
  }))
  return (
    <Page title='scoreboard'>
      <Layout>
        <Main>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <div className='text-center'>
              <h1 className='space-x-2 text-2xl'>scoreboard</h1>
            </div>
            {!categories && (
              <div className='text-red-700'>
                missing <code>categories</code> field
              </div>
            )}
            {!matchups && (
              <div className='text-red-700'>
                missing <code>matchups</code> field
              </div>
            )}
            {categories && matchups && (
              <>
                {compare.length > 0 && (
                  <Scoreboard
                    matchup
                    stats={stats.filter(team =>
                      compare.includes(team.player.last_name)
                    )}
                  />
                )}
                <Scoreboard
                  stats={stats}
                  compare={compare}
                  setCompare={setCompare}
                />
              </>
            )}
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default ScoreboardPage
