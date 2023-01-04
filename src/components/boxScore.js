import { useState } from 'react'
import Link from 'next/link'

import getMin from '@/lib/getMin'

const getTotal = (stats, stat) =>
  stats.reduce(
    (total, line) => total + (stat === 'min' ? getMin(line[stat]) : line[stat]),
    0
  )

const getMinString = min => {
  // * looks like min stat on balldontlie's api was changed to be without `:seconds`
  // const m = Math.floor(min / 60)
  // const s = min % 60
  // return `${m}:${s < 10 ? '0' : ''}${s}`
  return `${min}:00`
}

const BoxScore = ({ stats, includeTotals = false }) => {
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
              <tr key={id} className='odd:bg-skin-foreground-alt'>
                <td
                  className={`truncate py-1 text-center ${
                    sort === 'player' ? 'font-semibold' : ''
                  }`}
                >
                  <Link href={`/nba/players/${player.id}`}>
                    <a className='hover:text-skin-link-accent-hover'>
                      {player.last_name}
                      <span className='hidden md:inline'>
                        , {player.position}
                      </span>
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
            {includeTotals && (
              <tr className='border-t-4 border-gray-400'>
                <td className='py-1 text-center'>TOTAL</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='flex flex-grow overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b-4 border-gray-400'>
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
                <span className='hidden md:block'>
                  <button
                    className='rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('fgm')}
                    disabled={sort === 'fgm'}
                  >
                    fgm
                  </button>
                  /
                  <button
                    className='rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
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
                  className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
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
                    className='rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                    type='button'
                    onClick={() => setSort('ftm')}
                    disabled={sort === 'ftm'}
                  >
                    ftm
                  </button>
                  /
                  <button
                    className='rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
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
                  className='w-full rounded bg-skin-button-accent px-2 py-1 text-skin-inverted hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                  type='button'
                  onClick={() => setSort('ftp')}
                  disabled={sort === 'ftp'}
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
                    className={`py-1 text-center ${
                      sort === 'min' ? 'font-semibold' : ''
                    }`}
                  >
                    {min}
                  </td>
                  <td
                    className={`py-1 text-center ${
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
                    className={`py-1 text-center ${
                      sort === 'fg3m' ? 'font-semibold' : ''
                    }`}
                  >
                    {fg3m}
                  </td>
                  <td
                    className={`py-1 text-center ${
                      sort === 'reb' ? 'font-semibold' : ''
                    }`}
                  >
                    {reb}
                  </td>
                  <td
                    className={`py-1 text-center ${
                      sort === 'ast' ? 'font-semibold' : ''
                    }`}
                  >
                    {ast}
                  </td>
                  <td
                    className={`py-1 text-center ${
                      sort === 'turnover' ? 'font-semibold' : ''
                    }`}
                  >
                    {turnover}
                  </td>
                  <td
                    className={`py-1 text-center ${
                      sort === 'stl' ? 'font-semibold' : ''
                    }`}
                  >
                    {stl}
                  </td>
                  <td
                    className={`py-1 text-center ${
                      sort === 'blk' ? 'font-semibold' : ''
                    }`}
                  >
                    {blk}
                  </td>
                </tr>
              )
            )}
            {includeTotals && (
              <tr className='border-t-4 border-gray-400'>
                <td className='py-1 text-center'>
                  {getMinString(getTotal(stats, 'min'))}
                </td>
                <td className='py-1 text-center'>{getTotal(stats, 'pts')}</td>
                <td className='py-1 text-center'>
                  {getTotal(stats, 'fgm')}/{getTotal(stats, 'fga')}
                </td>
                <td className='hidden text-center md:block'>
                  {(getTotal(stats, 'fgm') / getTotal(stats, 'fga')).toFixed(3)}
                </td>
                <td className='py-1 text-center'>
                  {getTotal(stats, 'ftm')}/{getTotal(stats, 'fta')}
                </td>
                <td className='hidden text-center md:block'>
                  {(getTotal(stats, 'ftm') / getTotal(stats, 'fta')).toFixed(3)}
                </td>
                <td className='py-1 text-center'>{getTotal(stats, 'fg3m')}</td>
                <td className='py-1 text-center'>{getTotal(stats, 'reb')}</td>
                <td className='py-1 text-center'>{getTotal(stats, 'ast')}</td>
                <td className='py-1 text-center'>
                  {getTotal(stats, 'turnover')}
                </td>
                <td className='py-1 text-center'>{getTotal(stats, 'stl')}</td>
                <td className='py-1 text-center'>{getTotal(stats, 'blk')}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BoxScore
