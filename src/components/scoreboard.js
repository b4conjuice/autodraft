import { useState } from 'react'

import getMin from '@/lib/getMin'

const categories = [
  'ast',
  'blk',
  'fg3m',
  'fg_pct',
  'ft_pct',
  'pts',
  'reb',
  'stl',
  'turnover',
]

const Scoreboard = ({ stats: initialStats, compare, setCompare, matchup }) => {
  const [sort, setSort] = useState('min')
  const scoresByCategory = categories.reduce((prev, stat) => {
    prev[stat] = initialStats
      .map(s => ({ name: s.player.last_name, [stat]: s[stat] }))
      .sort((b, a) =>
        stat === 'turnover' ? b[stat] - a[stat] : a[stat] - b[stat]
      )
    return prev
  }, {})
  const stats = initialStats.map(team => {
    const scores = categories.reduce((scoresObj, category) => {
      return {
        ...scoresObj,
        [category]:
          (initialStats.length === 2 ? 1 : initialStats.length) -
          scoresByCategory[category].findIndex(
            t => t.name === team.player.last_name
          ),
      }
    }, {})
    return {
      ...team,
      scores,
      totalScore: Object.values(scores).reduce((sum, curr) => sum + curr, 0),
    }
  })
  stats.sort((b, a) => {
    if (sort === 'player') {
      if (b[sort].last_name < a[sort].last_name) {
        return -1
      }
      if (b[sort].last_name > a[sort].last_name) {
        return 1
      }
      return 0
    }
    if (sort === 'min') {
      const bMin = getMin(b[sort])
      const aMin = getMin(a[sort])
      if (bMin < aMin) {
        return 1
      }
      if (bMin > aMin) {
        return -1
      }
      return 0
    }
    return a[sort] - b[sort]
  })
  const [display, setDisplay] = useState('stats')
  return (
    <div>
      <label
        htmlFor={`checked${matchup ? '-matchup' : ''}`}
        className='flex cursor-pointer items-center space-x-3'
      >
        <span className={display === 'scores' ? 'text-gray-500' : ''}>
          stats
        </span>
        <span className='relative'>
          <span className='block h-6 w-10 rounded-full bg-gray-400 shadow-inner' />
          <span
            className={`focus-within:shadow-outline absolute inset-y-0 left-0 mt-1 ml-1 block h-4 w-4 rounded-full bg-skin-button-accent shadow transition-transform duration-300 ease-in-out ${
              display === 'scores' ? 'translate-x-full transform' : ''
            }`}
          >
            <input
              id={`checked${matchup ? '-matchup' : ''}`}
              type='checkbox'
              checked={display === 'stats'}
              onChange={() =>
                setDisplay(display === 'stats' ? 'scores' : 'stats')
              }
              className='absolute h-0 w-0 opacity-0'
            />
          </span>
        </span>
        <span className={display === 'stats' ? 'text-gray-500' : ''}>
          scores
        </span>
      </label>
      <div className='flex w-full'>
        <div className='w-40'>
          <table className='w-full table-fixed border-r-4 border-gray-400'>
            <thead>
              <tr className='border-b-4 border-gray-400'>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('player')}
                    disabled={sort === 'player'}
                  >
                    player
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map(({ id, player }) => (
                <tr
                  key={id || player.last_name}
                  className='odd:bg-skin-foreground-alt'
                >
                  <td
                    className={`truncate py-1 text-center ${
                      sort === 'player' ? 'font-semibold' : ''
                    }`}
                  >
                    {setCompare && compare ? (
                      <button
                        className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                        type='button'
                        onClick={() => {
                          if (compare.includes(player.last_name)) {
                            setCompare(
                              compare.filter(team => team !== player.last_name)
                            )
                          } else setCompare([...compare, player.last_name])
                        }}
                      >
                        {player.last_name}
                      </button>
                    ) : (
                      player.last_name
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex flex-grow overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b-4 border-gray-400'>
                {stats.some(team => team.min) && (
                  <th>
                    <button
                      className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                      type='button'
                      onClick={() => setSort('min')}
                      disabled={sort === 'min'}
                    >
                      min
                    </button>
                  </th>
                )}
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('pts')}
                    disabled={sort === 'pts'}
                  >
                    pts
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('fg_pct')}
                    disabled={sort === 'fg_pct'}
                  >
                    fg%
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('ft_pct')}
                    disabled={sort === 'ft_pct'}
                  >
                    ft%
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('fg3m')}
                    disabled={sort === 'fg3m'}
                  >
                    3pm
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('reb')}
                    disabled={sort === 'reb'}
                  >
                    reb
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('ast')}
                    disabled={sort === 'ast'}
                  >
                    ast
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('turnover')}
                    disabled={sort === 'turnover'}
                  >
                    to
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('stl')}
                    disabled={sort === 'stl'}
                  >
                    stl
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('blk')}
                    disabled={sort === 'blk'}
                  >
                    blk
                  </button>
                </th>
                <th>
                  <button
                    className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('totalScore')}
                    disabled={sort === 'totalScore'}
                  >
                    score
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map(
                ({
                  id,
                  pts,
                  fg_pct: fgp,
                  ft_pct: ftp,
                  fg3m,
                  reb,
                  ast,
                  turnover,
                  stl,
                  blk,
                  player,
                  totalScore,
                  scores,
                }) => (
                  <tr
                    key={id || player.last_name}
                    className='odd:bg-skin-foreground-alt'
                  >
                    <td
                      className={`py-1 text-center ${
                        sort === 'pts' ? 'font-semibold' : ''
                      }`}
                    >
                      {display === 'stats' ? pts : scores.pts}
                    </td>
                    <td className='text-center'>
                      {display === 'stats'
                        ? (fgp / 100).toFixed(3)
                        : scores.fg_pct}
                    </td>
                    <td className='text-center'>
                      {display === 'stats'
                        ? (ftp / 100).toFixed(3)
                        : scores.ft_pct}
                    </td>
                    <td
                      className={`py-1 text-center ${
                        sort === 'fg3m' ? 'font-semibold' : ''
                      }`}
                    >
                      {display === 'stats' ? fg3m : scores.fg3m}
                    </td>
                    <td
                      className={`py-1 text-center ${
                        sort === 'reb' ? 'font-semibold' : ''
                      }`}
                    >
                      {display === 'stats' ? reb : scores.reb}
                    </td>
                    <td
                      className={`py-1 text-center ${
                        sort === 'ast' ? 'font-semibold' : ''
                      }`}
                    >
                      {display === 'stats' ? ast : scores.ast}
                    </td>
                    <td
                      className={`py-1 text-center ${
                        sort === 'turnover' ? 'font-semibold' : ''
                      }`}
                    >
                      {display === 'stats' ? turnover : scores.turnover}
                    </td>
                    <td
                      className={`py-1 text-center ${
                        sort === 'stl' ? 'font-semibold' : ''
                      }`}
                    >
                      {display === 'stats' ? stl : scores.stl}
                    </td>
                    <td
                      className={`py-1 text-center ${
                        sort === 'blk' ? 'font-semibold' : ''
                      }`}
                    >
                      {display === 'stats' ? blk : scores.blk}
                    </td>
                    <td
                      className={`py-1 text-center ${
                        sort === 'totalScore' ? 'font-semibold' : ''
                      }`}
                    >
                      {totalScore}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
