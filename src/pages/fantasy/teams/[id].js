import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  XCircleIcon,
  DownloadIcon,
  TrashIcon,
  SaveIcon,
} from '@heroicons/react/solid'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Confirm from '@/components/confirm'
import Footer from '@/components/footer'
import { fetchTeams, updateTeam, deleteTeam, searchNBAPlayers } from '@/lib/api'
import nav from '@/lib/nav'
import { getPosition } from '@/lib/espnPlayers'

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

const Depth = ({ team }) => {
  console.log({ team })
  const positions = ['PG', 'SG', 'SF', 'PF', 'C']
  const getPlayersByPosition = position => {
    const playersByPosition = team
      .filter(player => player.position.some(pos => pos === position))
      .map(player => player.last_name)
    return playersByPosition.length > 0
      ? `${playersByPosition.join(' ')} (${playersByPosition.length})`
      : ''
  }
  return (
    <div className="flex w-full">
      <div className="w-12">
        <table className="w-full border-r-4 border-gray-400 table-fixed">
          <tbody>
            {positions.map(position =>
              getPlayersByPosition(position) ? (
                <tr key={position} className="odd:bg-skin-foreground-alt">
                  <td className="py-1 text-center">{position}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-grow overflow-x-auto">
        <table className="w-full">
          <tbody>
            {positions.map(position =>
              getPlayersByPosition(position) ? (
                <tr key={position} className="px-1 odd:bg-skin-foreground-alt">
                  {team
                    .filter(player =>
                      player.position.some(pos => pos === position)
                    )
                    .map(player => (
                      <td
                        key={player.id}
                        className="max-w-sm px-1 py-1 text-center truncate"
                      >
                        <Link href="/players/[id]" as={`/players/${player.id}`}>
                          <a>{player.last_name || player.first_name}</a>
                        </Link>
                      </td>
                    ))}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

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
      <Main className="px-2 md:px-0">
        <div className="mx-auto space-y-2 md:max-w-screen-md">
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
          {edit ? (
            <EditTeam />
          ) : team ? (
            <>
              <h1 className="text-2xl text-center">{team.name}</h1>
              <Depth
                team={team.players.map(p => {
                  const [, last] = p.split(' ')

                  return {
                    last_name: last,
                    position: getPosition(p),
                  }
                })}
              />
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
                      <XCircleIcon className="w-6 h-6" />
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
                          selected ===
                            `${player.first_name} ${player.last_name}`
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
                            p =>
                              p === `${player.first_name} ${player.last_name}`
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
                      <span className="flex-grow">
                        {team?.players[index]}{' '}
                        {getPosition(team?.players[index]).join(', ')}
                      </span>
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
                          <DownloadIcon className="w-6 h-6 text-red-700" />
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
                className="flex justify-center w-full p-3 text-gray-100 bg-red-700 rounded-lg disabled:opacity-25 disabled:pointer-events-none"
                type="button"
                action={async () => {
                  await deleteTeam(id)
                  push('/fantasy/teams')
                }}
              >
                <TrashIcon className="w-6 h-6" />
              </Confirm>
            </>
          ) : team?.players?.length === 0 ? (
            <p>team has no players</p>
          ) : (
            <div className="flex justify-center flex-grow">
              <Loading />
            </div>
          )}
        </div>
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
              <SaveIcon className="w-6 h-6" />
            </button>
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Team
