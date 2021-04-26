import { useState } from 'react'
import Link from 'next/link'

import getMin from '@/lib/getMin'

const BoxScore = ({ stats }) => {
  const [sort, setSort] = useState('min')
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
  return (
    <div className='flex w-full'>
      <div className='w-40'>
        <table className='w-full border-r-4 border-gray-400 table-fixed'>
          <thead>
            <tr>
              <th>
                <button
                  className='w-full py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
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
              <tr key={id} className='odd:bg-skin-foreground-alt'>
                <td
                  className={`truncate py-1 text-center ${
                    sort === 'player' ? 'font-semibold' : ''
                  }`}
                >
                  <Link href='/players/[id]' as={`/players/${player.id}`}>
                    <a className=''>
                      {player.last_name}
                      <span className='hidden md:inline'>
                        , {player.position}
                      </span>
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-grow overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('min')}
                  disabled={sort === 'min'}
                >
                  min
                </button>
              </th>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('pts')}
                  disabled={sort === 'pts'}
                >
                  pts
                </button>
              </th>
              <th>
                <span className='hidden md:block'>
                  <button
                    className='px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                    type='button'
                    onClick={() => setSort('fgm')}
                    disabled={sort === 'fgm'}
                  >
                    fgm
                  </button>
                  /
                  <button
                    className='px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                    type='button'
                    onClick={() => setSort('fga')}
                    disabled={sort === 'fga'}
                  >
                    fga
                  </button>
                </span>
                <span className='md:hidden'>fg</span>
              </th>
              <th className='hidden md:block'>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('fgp')}
                  disabled={sort === 'fgp'}
                >
                  fg%
                </button>
              </th>
              <th>
                <span className='hidden md:block'>
                  <button
                    className='px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                    type='button'
                    onClick={() => setSort('ftm')}
                    disabled={sort === 'ftm'}
                  >
                    ftm
                  </button>
                  /
                  <button
                    className='px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                    type='button'
                    onClick={() => setSort('fta')}
                    disabled={sort === 'fta'}
                  >
                    fta
                  </button>
                </span>
                <span className='md:hidden'>ft</span>
              </th>
              <th className='hidden md:block'>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('ftp')}
                  disabled={sort === 'ftp'}
                >
                  ft%
                </button>
              </th>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('fg3m')}
                  disabled={sort === 'fg3m'}
                >
                  3pm
                </button>
              </th>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('reb')}
                  disabled={sort === 'reb'}
                >
                  reb
                </button>
              </th>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('ast')}
                  disabled={sort === 'ast'}
                >
                  ast
                </button>
              </th>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('turnover')}
                  disabled={sort === 'turnover'}
                >
                  to
                </button>
              </th>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('stl')}
                  disabled={sort === 'stl'}
                >
                  stl
                </button>
              </th>
              <th>
                <button
                  className='w-full px-2 py-1 text-gray-100 bg-blue-700 rounded disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  onClick={() => setSort('blk')}
                  disabled={sort === 'blk'}
                >
                  blk
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {stats.map(
              ({
                id,
                min,
                pts,
                fgm,
                fga,
                fg_pct: fgp,
                ftm,
                fta,
                ft_pct: ftp,
                fg3m,
                reb,
                ast,
                turnover,
                stl,
                blk,
              }) => (
                <tr key={id} className='odd:bg-skin-foreground-alt'>
                  <td
                    className={`text-center py-1 ${
                      sort === 'min' ? 'font-semibold' : ''
                    }`}
                  >
                    {min}
                  </td>
                  <td
                    className={`text-center py-1 ${
                      sort === 'pts' ? 'font-semibold' : ''
                    }`}
                  >
                    {pts}
                  </td>
                  <td className='py-1 text-center'>
                    {fgm}/{fga}
                  </td>
                  <td className='hidden text-center md:block'>
                    {(fgp / 100).toFixed(3)}
                  </td>
                  <td className='py-1 text-center'>
                    {ftm}/{fta}
                  </td>
                  <td className='hidden text-center md:block'>
                    {(ftp / 100).toFixed(3)}
                  </td>
                  <td
                    className={`text-center py-1 ${
                      sort === 'fg3m' ? 'font-semibold' : ''
                    }`}
                  >
                    {fg3m}
                  </td>
                  <td
                    className={`text-center py-1 ${
                      sort === 'reb' ? 'font-semibold' : ''
                    }`}
                  >
                    {reb}
                  </td>
                  <td
                    className={`text-center py-1 ${
                      sort === 'ast' ? 'font-semibold' : ''
                    }`}
                  >
                    {ast}
                  </td>
                  <td
                    className={`text-center py-1 ${
                      sort === 'turnover' ? 'font-semibold' : ''
                    }`}
                  >
                    {turnover}
                  </td>
                  <td
                    className={`text-center py-1 ${
                      sort === 'stl' ? 'font-semibold' : ''
                    }`}
                  >
                    {stl}
                  </td>
                  <td
                    className={`text-center py-1 ${
                      sort === 'blk' ? 'font-semibold' : ''
                    }`}
                  >
                    {blk}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BoxScore
