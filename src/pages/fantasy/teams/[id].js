import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Confirm from '@/components/confirm'
import Footer from '@/components/footer'
import { fetchTeams, updateTeam, deleteTeam, searchNBAPlayers } from '@/lib/api'
import nav from '@/lib/nav'

const positionToSlot = {
  G: ['PG', 'SG', 'G', 'U', 'B'],
  'G-F': ['SG', 'SF', 'G', 'F', 'U', 'B'],
  'F-G': ['SG', 'SF', 'G', 'F', 'U', 'B'],
  F: ['SF', 'PF', 'F', 'U', 'B'],
  'F-C': ['PF', 'C', 'F', 'U', 'B'],
  'C-F': ['PF', 'C', 'F', 'U', 'B'],
  C: ['C', 'U', 'B'],
}

const getPicks = ({ order, teams, rounds }) => {
  const picks = []
  for (let i = 0; i < rounds; i++) {
    const round = i + 1

    const pick =
      round % 2 === 1 ? teams * i + order : teams * i + (teams - order + 1)
    picks.push(pick)
  }
  return picks
}

const EditTeam = () => <p>edit team</p>

const Team = () => {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('')
  const { pathname, query, push } = useRouter()
  const { id } = query
  const [edit, setEdit] = useState(false)
  const { data: initialTeam, revalidate } = fetchTeams(id)
  const results = searchNBAPlayers(search)
  const selectedPlayers = searchNBAPlayers(selected)
  const [selectedPlayer] = selectedPlayers || []
  // const { values, handleChange, handleSubmit, isSubmitting, dirty } = useForm({
  //   initialValues: team,
  //   onSubmit: async (
  //     { title: newTitle, items: newItems },
  //     { setSubmitting }
  //   ) => {
  //     await updateList({ id, title: newTitle, items: newItems })
  //     await revalidate()
  //     setSubmitting(false)
  //     setEdit(!edit)
  //   },
  // })
  const [team, setTeam] = useState(initialTeam)
  useEffect(() => {
    const update = async () => {
      setTeam(initialTeam)
    }
    update()
  }, [initialTeam])
  if (team?.error)
    return (
      <Page title="teams">
        <Main className="flex flex-col px-2 space-y-2">
          <nav className="px-2 text-md">
            <ul className="flex justify-center space-x-3">
              {nav.map(({ url, text }) => (
                <li
                  key={url}
                  className={
                    pathname.includes(url) ? 'border-b-2 border-blue-700' : ''
                  }
                >
                  {pathname === url ? (
                    <span>{text}</span>
                  ) : (
                    <Link href={url}>
                      <a className="text-blue-700 hover:text-blue-600">
                        {text}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <h1 className="text-2xl text-center">{team.error}</h1>
          <Link href="/fantasy/teams">
            <a className="text-center text-blue-700 hover:text-blue-600">
              back to teams
            </a>
          </Link>
        </Main>
      </Page>
    )
  const addPlayer = (player, index) => {
    const newPlayers = [...team.players]
    newPlayers[index] = `${player.first_name} ${player.last_name}`
    setTeam({
      ...team,
      players: newPlayers,
    })
    setSelected('')
  }
  const movePlayer = (player, index) => {
    const name = `${player.first_name} ${player.last_name}`
    const newPlayers = [...team.players]
    const temp = newPlayers[index]
    const idx = newPlayers.findIndex(p => p === name)
    newPlayers[index] = name
    newPlayers[idx] = temp
    setTeam({
      ...team,
      players: newPlayers,
    })
    setSelected('')
  }
  const dropPlayer = index => {
    const newPlayers = [...team.players]
    newPlayers[index] = ''
    setTeam({
      ...team,
      players: newPlayers,
    })
    setSelected('')
  }
  const picks = team
    ? getPicks({ teams: team.teams, rounds: team.rounds, order: team.order })
    : []
  console.log({ team })
  console.log({ selectedPlayer })
  console.log({ picks })
  return (
    <Page title="teams">
      <Main className="flex flex-col px-2 space-y-2">
        <nav className="px-2 text-md">
          <ul className="flex justify-center space-x-3">
            {nav.map(({ url, text }) => (
              <li
                key={url}
                className={
                  pathname.includes(url) ? 'border-b-2 border-blue-700' : ''
                }
              >
                {pathname === url ? (
                  <span>{text}</span>
                ) : (
                  <Link href={url}>
                    <a className="text-blue-700 hover:text-blue-600">{text}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {edit ? (
          <EditTeam />
        ) : team ? (
          <>
            <h1 className="text-2xl text-center">{team.name}</h1>
            <div className="relative">
              <div className="flex form-input focus-within:border-blue-700">
                <input
                  placeholder="add player"
                  className="w-full focus:outline-none"
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                {search !== '' && (
                  <button type="button" onClick={() => setSearch('')}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {!search ? null : !results ? (
                <div className="flex justify-center flex-grow">
                  <Loading />
                </div>
              ) : (
                <ul className="absolute w-full space-y-2 bg-blue-200">
                  {results
                    .filter(player => player.position)
                    .filter(
                      player =>
                        selected === '' ||
                        selected === `${player.first_name} ${player.last_name}`
                    )
                    .map(player => (
                      <li key={player.id} className="flex p-2">
                        <div className="flex-grow space-x-1">
                          <Link
                            href="/players/[id]"
                            as={`/players/${player.id}`}
                          >
                            <a>
                              {player.first_name} {player.last_name}
                            </a>
                          </Link>
                          <Link
                            href="/teams/[id]"
                            as={`/teams/${player.team.id}`}
                          >
                            <a>{player.team.abbreviation}</a>
                          </Link>
                          <span>{player.position}</span>
                        </div>
                        {team?.players.some(
                          p => p === `${player.first_name} ${player.last_name}`
                        ) ? (
                          <div>added</div>
                        ) : (
                          <button
                            className={`text-xs px-2 border-2 border-blue-700 rounded ${
                              selected === ''
                                ? 'text-gray-100 bg-blue-700'
                                : 'text-blue-700 bg-gray-100'
                            }`}
                            type="button"
                            onClick={() => {
                              setSelected(
                                selected === ''
                                  ? `${player.first_name} ${player.last_name}`
                                  : ''
                              )
                            }}
                          >
                            add
                          </button>
                        )}
                        {/* {team?.players.every(
                          p => p !== `${player.first_name} ${player.last_name}`
                        ) ? (
                          <div className="flex space-x-1">
                            {team?.slots.map((slot, index) =>
                              team?.players[index] !== '' ? null : positionToSlot[
                                  player.position
                                ].some(s => s === slot) ? (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => {
                                    addPlayer(player, index)
                                    setSearch('')
                                  }}
                                >
                                  {slot}
                                </button>
                              ) : null
                            )}
                          </div>
                        ) : (
                          <div>added</div>
                        )} */}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <h2>roster</h2>
            {team?.slots.map((slot, index) => (
              <li
                key={index + slot}
                className="flex items-center p-2 space-x-2 rounded bg-skin-foreground odd:bg-skin-foreground-alt"
              >
                <span className="font-semibold">{slot}</span>
                {team?.players && team?.players[index] ? (
                  <>
                    <span className="flex-grow">{team?.players[index]}</span>
                    {(selected === '' ||
                      team?.players[index] ===
                        `${selectedPlayer?.first_name} ${selectedPlayer?.last_name}`) && (
                      <button
                        className={`text-xs px-2 border-2 border-blue-700 rounded ${
                          selected === ''
                            ? 'text-gray-100 bg-blue-700'
                            : 'text-blue-700 bg-gray-100'
                        }`}
                        type="button"
                        onClick={() => {
                          setSelected(
                            selected === '' ? team?.players[index] : ''
                          )
                        }}
                      >
                        move
                      </button>
                    )}
                    {selectedPlayer &&
                      team?.players[index] !==
                        `${selectedPlayer?.first_name} ${selectedPlayer?.last_name}` &&
                      positionToSlot[selectedPlayer.position].some(
                        s => s === slot
                      ) && (
                        <button
                          className="px-2 text-xs text-gray-100 bg-blue-700 border-2 border-blue-700 rounded"
                          type="button"
                          onClick={() => {
                            movePlayer(selectedPlayer, index)
                            setSearch('')
                          }}
                        >
                          {team?.players.some(
                            p =>
                              p ===
                              `${selectedPlayer.first_name} ${selectedPlayer.last_name}`
                          )
                            ? 'here'
                            : 'drop'}
                        </button>
                      )}

                    {selected === '' && (
                      <Confirm
                        type="button"
                        action={() => {
                          dropPlayer(index)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-6 h-6 text-red-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Confirm>
                    )}
                  </>
                ) : (
                  <>
                    <span className="flex-grow">empty</span>
                    {selectedPlayer &&
                      team?.players[index] !==
                        `${selectedPlayer?.first_name} ${selectedPlayer?.last_name}` &&
                      positionToSlot[selectedPlayer.position].some(
                        s => s === slot
                      ) && (
                        <button
                          className="px-2 text-xs text-gray-100 bg-blue-700 border-2 border-blue-700 rounded"
                          type="button"
                          onClick={() => {
                            movePlayer(selectedPlayer, index)
                            setSearch('')
                          }}
                        >
                          here
                        </button>
                      )}
                  </>
                )}
              </li>
            ))}
            <Confirm
              className="flex justify-center p-3 text-gray-100 bg-red-700 rounded-lg disabled:opacity-25 disabled:pointer-events-none"
              type="button"
              action={async () => {
                await deleteTeam(id)
                push('/fantasy/teams')
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
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </Confirm>
          </>
        ) : team?.players?.length === 0 ? (
          <p>team has no players</p>
        ) : (
          <div className="flex justify-center flex-grow">
            <Loading />
          </div>
        )}
      </Main>
      <Footer className="flex justify-center">
        <ul className="inline-flex bg-blue-700 divide-x divide-gray-100 rounded-lg">
          <li className="flex justify-center">
            <button
              className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
              type="submit"
              onClick={async () => {
                await updateTeam(team)
                await revalidate()
              }}
              disabled={initialTeam?.players.every(
                (p, index) => p === team?.players[index]
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
              </svg>
            </button>
          </li>
          {/* <li className="flex justify-center">
            <button
              className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
              type="button"
              onClick={() => setEdit(!edit)}
            >
              {edit ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </li>
          {edit && (
            <li className="flex justify-center">
              <button
                className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
                type="submit"
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                </svg>
              </button>
            </li>
          )} */}
        </ul>
      </Footer>
    </Page>
  )
}

export default Team
