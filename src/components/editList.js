import { useState } from 'react'
import Link from 'next/link'

import Loading from '@/components/loading'
import { searchNBAPlayers } from '@/lib/api'

const EditList = ({ values, handleChange }) => {
  const [search, setSearch] = useState('')
  const results = searchNBAPlayers(search)
  const { title, items } = values
  return (
    <>
      <input
        placeholder="title"
        className="w-full text-center form-input"
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
      {items.map((item, index) => (
        <div key={index} className="flex w-full">
          <input
            placeholder="player"
            className="flex-grow form-input"
            type="text"
            name={`items-${index}`}
            value={item}
            onChange={handleChange}
            list="datalist-players"
          />
          <button
            className="flex items-center justify-center text-red-700 disabled:opacity-25 disabled:pointer-events-none"
            type="button"
            onClick={() => {
              const newItems = [...items]
              newItems.splice(index, 1)
              handleChange({
                target: { name: 'items', value: newItems },
              })
            }}
            disabled={item === '' || items.length === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
      <button
        className="flex justify-center p-3 text-gray-100 bg-blue-700 rounded-lg"
        type="button"
        onClick={() => {
          const newItems = [...items, '']
          handleChange({ target: { name: 'items', value: newItems } })
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <input
        placeholder="search players"
        className="w-full form-input"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {!search ? null : !results ? (
        <div className="flex justify-center flex-grow">
          <Loading />
        </div>
      ) : (
        <ul className="space-y-2">
          {results
            .filter(player => player.position)
            .map(player => (
              <li
                key={player.id}
                className="flex p-2 bg-gray-300 rounded odd:bg-gray-400"
              >
                <div className="flex-grow space-x-1">
                  <Link href="/players/[id]" as={`/players/${player.id}`}>
                    <a>
                      {player.first_name} {player.last_name}
                    </a>
                  </Link>
                  <Link href="/teams/[id]" as={`/teams/${player.team.id}`}>
                    <a>{player.team.abbreviation}</a>
                  </Link>
                  <span>{player.position}</span>
                </div>
                <button
                  className="flex justify-center text-gray-100 bg-blue-600 rounded-lg disabled:opacity-25 disabled:pointer-events-none"
                  type="button"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ))}
        </ul>
      )}
      <datalist id="datalist-players">
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
