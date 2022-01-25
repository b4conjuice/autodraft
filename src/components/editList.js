import { useState } from 'react'
import Link from 'next/link'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'

import Loading from '@/components/loading'
import { searchNBAPlayers } from '@/lib/api'

const EditList = ({ values, handleChange }) => {
  const [search, setSearch] = useState('')
  const [bulkItems, setBulkItems] = useState(false)
  const results = searchNBAPlayers(search)
  const { title, items } = values
  return (
    <>
      <input
        placeholder='title'
        className='form-input w-full text-center'
        type='text'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <label
        htmlFor='checked'
        className='divide-skin-foregroundspace-x-3 inline-flex cursor-pointer items-center justify-center'
      >
        <span className={!bulkItems ? 'text-gray-500' : ''}>bulk items</span>
        <span className='relative'>
          <span className='block h-6 w-10 rounded-full bg-gray-400 shadow-inner' />
          <span
            className={`focus-within:shadow-outline absolute inset-y-0 left-0 mt-1 ml-1 block h-4 w-4 rounded-full bg-skin-button-accent shadow transition-transform duration-300 ease-in-out ${
              !bulkItems ? 'translate-x-full transform' : ''
            }`}
          >
            <input
              id='checked'
              type='checkbox'
              checked
              onChange={() => setBulkItems(!bulkItems)}
              className='absolute h-0 w-0 opacity-0'
              placeholder='add multiple players'
            />
          </span>
        </span>
      </label>
      {bulkItems ? (
        <div className=''>
          <textarea
            className='form-textarea w-full'
            value={items.join('\n')}
            onChange={e => {
              const { value } = e.target
              const newItems = value.split('\n')
              handleChange({
                target: { name: 'items', value: newItems },
              })
            }}
          />
        </div>
      ) : (
        items.map((item, index) => (
          <div key={index} className='flex w-full'>
            <input
              placeholder='player'
              className='form-input flex-grow'
              type='text'
              name={`items-${index}`}
              value={item}
              onChange={handleChange}
              list='datalist-players'
            />
            <button
              className='flex items-center justify-center text-red-700 disabled:pointer-events-none disabled:opacity-25'
              type='button'
              onClick={() => {
                const newItems = [...items]
                newItems.splice(index, 1)
                handleChange({
                  target: { name: 'items', value: newItems },
                })
              }}
              disabled={item === '' || items.length === 1}
            >
              <MinusIcon className='h-6 w-6' />
            </button>
          </div>
        ))
      )}
      <button
        className='flex w-full justify-center rounded-lg bg-skin-button-accent p-3 text-gray-100 hover:bg-skin-button-accent-hover'
        type='button'
        onClick={() => {
          const newItems = [...items, '']
          handleChange({ target: { name: 'items', value: newItems } })
        }}
      >
        <PlusIcon className='h-6 w-6' />
      </button>
      <input
        placeholder='search players'
        className='form-input w-full'
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {!search ? null : !results ? (
        <div className='flex flex-grow justify-center'>
          <Loading />
        </div>
      ) : (
        <ul className='space-y-2'>
          {results
            .filter(player => player.position)
            .map(player => (
              <li
                key={player.id}
                className='flex rounded bg-skin-foreground p-2 odd:bg-skin-foreground-alt'
              >
                <div className='flex-grow space-x-1'>
                  <Link href={`/nba/players/${player.id}`}>
                    <a>
                      {player.first_name} {player.last_name}
                    </a>
                  </Link>
                  <Link href={`/nba/teams/${player.team.id}`}>
                    <a>{player.team.abbreviation}</a>
                  </Link>
                  <span>{player.position}</span>
                </div>
                <button
                  className='flex justify-center rounded-lg bg-skin-button-accent text-gray-100 hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
                  type='button'
                  onClick={() => {
                    const newItems = [
                      ...items,
                      `${player.first_name} ${player.last_name}`,
                    ]
                    handleChange({
                      target: { name: 'items', value: newItems },
                    })
                  }}
                  disabled={items.some(
                    item => item === `${player.first_name} ${player.last_name}`
                  )}
                >
                  <PlusIcon className='h-6 w-6' />
                </button>
              </li>
            ))}
        </ul>
      )}
      <datalist id='datalist-players'>
        {results
          ?.filter(player => player.position)
          .map(player => (
            <option
              key={player.id}
              value={`${player.first_name} ${player.last_name}`}
            />
          ))}
      </datalist>
    </>
  )
}

export default EditList
