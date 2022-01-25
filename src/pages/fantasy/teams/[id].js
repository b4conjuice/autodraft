import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  XCircleIcon,
  DownloadIcon,
  TrashIcon,
  SaveIcon,
  XIcon,
  PencilAltIcon,
} from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Confirm from '@/components/confirm'
import EditTeam from '@/components/editTeam'
import useEditTeam from '@/lib/useEditTeam'
import Footer from '@/components/footer'
import { fetchTeams, updateTeam, deleteTeam, searchNBAPlayers } from '@/lib/api'
import { getPosition } from '@/lib/espnRank'

const positionToSlot = {
  G: ['PG', 'SG', 'G', 'U', 'B'],
  'G-F': ['SG', 'SF', 'G', 'F', 'U', 'B'],
  'F-G': ['SG', 'SF', 'G', 'F', 'U', 'B'],
  F: ['SF', 'PF', 'F', 'U', 'B'],
  'F-C': ['PF', 'C', 'F', 'U', 'B'],
  'C-F': ['PF', 'C', 'F', 'U', 'B'],
  C: ['C', 'U', 'B'],
  PG: ['PG', 'G', 'U', 'B'],
  SG: ['SG', 'G', 'U', 'B'],
  SF: ['SF', 'F', 'U', 'B'],
  PF: ['PF', 'F', 'U', 'B'],
}

const getSlot = position => {
  if (typeof position === 'string') return positionToSlot[position]
  if (Array.isArray(position))
    return position.reduce(
      (slots, pos) => [...slots, ...positionToSlot[pos]],
      []
    )
  return []
}

// const getPicks = ({ order, teams, rounds }) => {
//   const picks = []
//   for (let i = 0; i < rounds; i++) {
//     const round = i + 1

//     const pick =
//       round % 2 === 1 ? teams * i + order : teams * i + (teams - order + 1)
//     picks.push(pick)
//   }
//   return picks
// }

const Depth = ({ team }) => {
  const positions = ['PG', 'SG', 'SF', 'PF', 'C']
  const getPlayersByPosition = position => {
    const playersByPosition = team
      .filter(player => player.position?.some(pos => pos === position))
      .map(player => player.last_name)
    return playersByPosition.length > 0
      ? `${playersByPosition.join(' ')} (${playersByPosition.length})`
      : ''
  }
  return (
    <div className='flex w-full'>
      <div className='w-12'>
        <table className='w-full table-fixed border-r-4 border-gray-400'>
          <tbody>
            {positions.map(position =>
              getPlayersByPosition(position) ? (
                <tr key={position} className='odd:bg-skin-foreground-alt'>
                  <td className='py-1 text-center'>{position}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <div className='flex flex-grow overflow-x-auto'>
        <table className='w-full'>
          <tbody>
            {positions.map(position =>
              getPlayersByPosition(position) ? (
                <tr key={position} className='px-1 odd:bg-skin-foreground-alt'>
                  {team
                    .filter(player =>
                      player.position?.some(pos => pos === position)
                    )
                    .map(player => (
                      <td
                        key={player.fullName}
                        className='max-w-sm truncate px-1 py-1 text-center'
                      >
                        <Link href={`/nba/players/${player.id}`}>
                          <a className='hover:text-skin-link-accent-hover'>
                            {player.last_name || player.first_name}
                          </a>
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
  const { query, push } = useRouter()
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
  const { values, handleChange, handleSubmit, isSubmitting, dirty, errors } =
    useEditTeam({
      initialValues: team,
      onSubmit: async (newTeam, { setSubmitting }) => {
        const slots = [...Array(newTeam.rounds).keys()]
          .map(x => x)
          .map(slot => newTeam.slots[slot] || 'B')
        await updateTeam({
          ...newTeam,
          slots,
        })
        await revalidate()
        setSubmitting(false)
      },
    })
  if (team?.error)
    return (
      <Page title='teams'>
        <Layout>
          <Main className='flex flex-col space-y-2 px-2'>
            <h1 className='text-center text-2xl'>{team.error}</h1>
            <Link href='/fantasy/teams'>
              <a className='text-center text-skin-link-accent hover:text-skin-link-accent-hover'>
                back to teams
              </a>
            </Link>
          </Main>
        </Layout>
      </Page>
    )
  // const addPlayer = (player, index) => {
  //   const newPlayers = [...team.players]
  //   newPlayers[index] = `${player.first_name} ${player.last_name}`
  //   setTeam({
  //     ...team,
  //     players: newPlayers,
  //   })
  //   setSelected('')
  // }
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
  // const picks = team
  //   ? getPicks({ teams: team.teams, rounds: team.rounds, order: team.order })
  //   : []
  // console.log({ team })
  // console.log({ selectedPlayer })
  // console.log({ picks })
  return (
    <Page title='teams'>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            {edit ? (
              <EditTeam
                values={values}
                handleChange={handleChange}
                errors={errors}
              />
            ) : team ? (
              <>
                <h1 className='text-center text-2xl'>{team.name}</h1>
                {team.players && team.players.length > 0 && (
                  <Depth
                    team={team.players.map(p => {
                      const [, last] = p.split(' ')

                      return {
                        id: p.id,
                        fullName: p,
                        last_name: last,
                        position: getPosition(p),
                      }
                    })}
                  />
                )}
                <div className='relative'>
                  <div className='form-input flex focus-within:border-blue-700'>
                    <input
                      placeholder='add player'
                      className='focus:outline-none w-full'
                      type='text'
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                    {search !== '' && (
                      <button type='button' onClick={() => setSearch('')}>
                        <XCircleIcon className='h-6 w-6' />
                      </button>
                    )}
                  </div>
                  {!search ? null : !results ? (
                    <div className='flex flex-grow justify-center'>
                      <Loading />
                    </div>
                  ) : (
                    <ul className='absolute w-full space-y-2 bg-skin-foreground'>
                      {results
                        .filter(player => player.position)
                        .filter(
                          player =>
                            selected === '' ||
                            selected ===
                              `${player.first_name} ${player.last_name}`
                        )
                        .map(player => (
                          <li key={player.id} className='flex p-2'>
                            <div className='flex-grow space-x-1'>
                              <Link href={`/nba/players/${player.id}`}>
                                <a>
                                  {player.first_name} {player.last_name}
                                </a>
                              </Link>
                              <Link href={`/nba/teams/${player.team.id}`}>
                                <a>{player.team.abbreviation}</a>
                              </Link>
                              <span>
                                {player.position} /{' '}
                                {getPosition(
                                  `${player.first_name} ${player.last_name}`
                                )?.join(', ') ?? ''}
                              </span>
                            </div>
                            {team?.players.some(
                              p =>
                                p === `${player.first_name} ${player.last_name}`
                            ) ? (
                              <div>added</div>
                            ) : (
                              <button
                                className={`rounded border-2 border-skin-button-accent px-2 text-xs ${
                                  selected === ''
                                    ? 'bg-skin-button-accent text-gray-100'
                                    : 'bg-gray-100 text-skin-accent'
                                }`}
                                type='button'
                                onClick={() => {
                                  const validSlots = team?.slots
                                    ?.map((slot, index) => {
                                      if (
                                        getSlot(
                                          getPosition(
                                            `${player.first_name} ${player.last_name}`
                                          )
                                        )?.some(s => s === slot) &&
                                        team?.players[index] === ''
                                      )
                                        return index
                                    })
                                    .filter(index => index !== undefined)
                                  if (selected !== '') setSelected('')
                                  else if (validSlots.length > 0) {
                                    movePlayer(player, validSlots[0])
                                    setSearch('')
                                  } else
                                    setSelected(
                                      `${player.first_name} ${player.last_name}`
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
                {team?.slots?.map((slot, index) => (
                  <li
                    key={index + slot}
                    className='flex items-center space-x-2 rounded bg-skin-foreground p-2 odd:bg-skin-foreground-alt'
                  >
                    <span className='font-semibold'>{slot}</span>
                    {team?.players && team?.players[index] ? (
                      <>
                        <span className='flex-grow'>
                          {team?.players[index]}{' '}
                          {getPosition(team?.players[index])?.join(', ') ?? ''}
                        </span>
                        {(selected === '' ||
                          team?.players[index] ===
                            `${selectedPlayer?.first_name} ${selectedPlayer?.last_name}`) && (
                          <button
                            className={`rounded border-2 border-skin-button-accent px-2 text-xs ${
                              selected === ''
                                ? 'bg-skin-button-accent text-gray-100'
                                : 'bg-gray-100 text-skin-accent'
                            }`}
                            type='button'
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
                          getSlot(
                            getPosition(
                              `${selectedPlayer?.first_name} ${selectedPlayer?.last_name}`
                            )
                          ).some(s => s === slot) && (
                            <button
                              className='rounded border-2 border-skin-button-accent bg-skin-button-accent px-2 text-xs text-gray-100'
                              type='button'
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
                            type='button'
                            action={() => {
                              dropPlayer(index)
                            }}
                          >
                            <DownloadIcon className='h-6 w-6 text-red-700' />
                          </Confirm>
                        )}
                      </>
                    ) : (
                      <>
                        <span className='flex-grow'>empty</span>
                        {selectedPlayer &&
                          team?.players[index] !==
                            `${selectedPlayer?.first_name} ${selectedPlayer?.last_name}` &&
                          positionToSlot[selectedPlayer.position].some(
                            s => s === slot
                          ) && (
                            <button
                              className='rounded border-2 border-skin-button-accent bg-skin-button-accent px-2 text-xs text-gray-100'
                              type='button'
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
                  className='flex w-full justify-center rounded-lg bg-red-700 p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'
                  type='button'
                  action={async () => {
                    await deleteTeam(id)
                    push('/fantasy/teams')
                  }}
                >
                  <TrashIcon className='h-6 w-6' />
                </Confirm>
              </>
            ) : team?.players?.length === 0 ? (
              <p>team has no players</p>
            ) : (
              <div className='flex flex-grow justify-center'>
                <Loading />
              </div>
            )}
          </div>
        </Main>
      </Layout>
      <Footer className='flex justify-center'>
        <ul className='inline-flex divide-x divide-gray-100 rounded-lg bg-skin-button-accent'>
          <li className='flex justify-center'>
            <button
              className='p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'
              type='button'
              onClick={() => setEdit(!edit)}
            >
              {edit ? (
                <XIcon className='h-6 w-6' />
              ) : (
                <PencilAltIcon className='h-6 w-6' />
              )}
            </button>
          </li>
          <li className='flex justify-center'>
            {edit ? (
              <button
                className='p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'
                type='submit'
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                <SaveIcon className='h-6 w-6' />
              </button>
            ) : (
              <button
                className='p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'
                type='submit'
                onClick={async () => {
                  await updateTeam(team)
                  await revalidate()
                }}
                disabled={initialTeam?.players?.every(
                  (p, index) => p === team?.players[index]
                )}
              >
                <SaveIcon className='h-6 w-6' />
              </button>
            )}
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Team
