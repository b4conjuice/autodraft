import { useEffect, useRef, useState } from 'react'
import { Dialog, Listbox } from '@headlessui/react'
import {
  CloudDownloadIcon,
  SaveIcon,
  TrashIcon,
  UserGroupIcon,
  CogIcon,
  PlusCircleIcon,
} from '@heroicons/react/solid'
import Fuse from 'fuse.js'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import DraftListItem from '@/components/dnd'
import CommandPalette from '@/components/commandPalette'
import DragDropList from '@/components/dragDropList'
import useLocalStorage from '@/lib/useLocalStorage'
import espnRank, { normalizePlayerName } from '@/lib/espnRank'
import espnRankWithinDraft from '@/lib/espnRankWithinDraft'
import hashtagRank from '@/lib/hashtagRank'
import hashtagASTRank from '@/lib/hashtagPuntASTRank'
import hashtagBLKRank from '@/lib/hashtagPuntBLKRank'
import { fetchLists, saveList } from '@/lib/api'
import useForm from '@/lib/useForm'

const ranks = [
  // {
  //   title: 'espn (draft)',
  //   items: espnRankWithinDraft.map(normalizePlayerName),
  // },
  {
    title: 'hashtag',
    items: hashtagRank.map(normalizePlayerName),
  },
  {
    title: 'ht punt AST',
    items: hashtagASTRank.map(normalizePlayerName),
  },
  {
    title: 'ht punt BLK',
    items: hashtagBLKRank.map(normalizePlayerName),
  },
]

const projections = {
  title: 'espn',
  // items: espnRank,
  // items: espnRank.slice(0, 300),
  items: espnRankWithinDraft.map(playerr => {
    const player = espnRank.find(p => p.name === playerr.name)
    if (player) return player
    else return { name: playerr.name, position: [] }
  }),
}

const PlusMinus = ({ index, rank, compare, isProjections }) => {
  const index2 = compare.findIndex(p => p.name === rank[index]?.name)
  const difference = isProjections ? index - index2 : index2 - index
  const absoluteDifference = Math.abs(difference)
  if (isProjections) {
    return (
      <td
        className={`p-2 text-center ${
          index > index2 ? 'bg-green-700' : index < index2 ? 'bg-red-700' : ''
        } ${
          absoluteDifference > 24
            ? 'bg-opacity-100'
            : absoluteDifference > 12
            ? 'bg-opacity-75'
            : absoluteDifference > 6
            ? 'bg-opacity-50'
            : 'bg-opacity-25'
        }`}
      >
        <div>{`${index > index2 ? '+' : ''}${difference}`}</div>
        <div>({index2 + 1})</div>
      </td>
    )
  }
  return (
    <td
      className={`p-2 text-center ${
        index2 > index ? 'bg-green-700' : index2 < index ? 'bg-red-700' : ''
      } ${
        absoluteDifference > 24
          ? 'bg-opacity-100'
          : absoluteDifference > 12
          ? 'bg-opacity-75'
          : absoluteDifference > 6
          ? 'bg-opacity-50'
          : 'bg-opacity-25'
      }`}
    >
      <div>{`${index2 > index ? '+' : ''}${difference}`}</div>
      <div>({index2 + 1})</div>
    </td>
  )
}

const SaveDraftDialog = ({ isOpen, setIsOpen, drafted }) => {
  const { values, handleChange, handleSubmit, isSubmitting, dirty } = useForm({
    initialValues: {
      title: '',
    },
    onSubmit: async ({ title: newTitle }, { setSubmitting }) => {
      await saveList({
        title: newTitle,
        items: drafted,
      })
      setIsOpen(false)
      setSubmitting(false)
    },
  })
  const { title } = values
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex min-h-screen items-center justify-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative mx-auto max-w-sm rounded bg-white p-4'>
          <Dialog.Title>Save List</Dialog.Title>
          <input
            placeholder='title'
            className='form-input w-full text-center'
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
          />

          <button
            type='submit'
            onClick={handleSubmit}
            disabled={!dirty || isSubmitting || title === ''}
            className='disabled:pointer-events-none disabled:opacity-25'
          >
            <SaveIcon className='h-6 w-6' />
          </button>
          <button type='button' onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  )
}

const LoadListDialog = ({ isOpen, setIsOpen, setDrafted }) => {
  const { data: lists } = fetchLists()
  const [selectedListIndex, setSelectedListIndex] = useState(0)
  if (!lists || lists.length === 0) return null
  const selectedList = lists[selectedListIndex]
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex min-h-screen items-center justify-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative mx-auto max-w-sm space-y-4 rounded bg-white p-4'>
          <Dialog.Title>Load List</Dialog.Title>
          <Listbox
            value={selectedList}
            onChange={({ id }) => {
              const newIndex = lists.findIndex(l => l.id === id)
              setSelectedListIndex(newIndex)
            }}
          >
            <div>
              <Listbox.Button className='w-full p-3'>
                <span>{selectedList.title}</span>
              </Listbox.Button>
              <Listbox.Options>
                {lists.map(list => (
                  <Listbox.Option key={list.id} value={list}>
                    {list.title}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
          <button
            type='button'
            onClick={() => {
              setIsOpen(false)
              setDrafted(selectedList.items)
            }}
          >
            <CloudDownloadIcon className='h-6 w-6' />
          </button>
        </div>
      </div>
    </Dialog>
  )
}
const FixItemDialog = ({
  isOpen,
  setIsOpen,
  itemToBeFixed,
  setItemToBeFixed,
  drafted,
  setDrafted,
}) => {
  if (itemToBeFixed === null) return null
  const item = drafted[itemToBeFixed]
  const fuse = new Fuse(projections.items, {
    keys: ['name'],
  })
  const players = fuse.search(item).map(({ item }) => item)
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])
  const [text, setText] = useState('')
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex min-h-screen items-center justify-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative mx-auto max-w-sm space-y-4 rounded bg-white p-4'>
          <Dialog.Title>Fix Item: {item}</Dialog.Title>
          <div>
            <Listbox value={selectedPlayer} onChange={setSelectedPlayer}>
              <div>
                <Listbox.Button className='w-full p-3'>
                  <span>{selectedPlayer.name}</span>
                </Listbox.Button>
                <Listbox.Options>
                  {players.map(player => (
                    <Listbox.Option key={player.name} value={player}>
                      {player.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            <button
              type='button'
              onClick={() => {
                drafted[itemToBeFixed] = selectedPlayer.name
                setDrafted(drafted)
                setItemToBeFixed(null)
                setIsOpen(false)
              }}
            >
              {' '}
              Set to Searched
              <CloudDownloadIcon className='h-6 w-6' />
            </button>
          </div>
          <div>
            <input
              type='text'
              value={text}
              onChange={e => {
                setText(e.target.value)
              }}
            />
            <button
              type='button'
              onClick={() => {
                drafted[itemToBeFixed] = text
                setDrafted(drafted)
                setItemToBeFixed(null)
                setIsOpen(false)
              }}
            >
              {' '}
              Set to Text
              <CloudDownloadIcon className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

const TeamsDialog = ({ isOpen, setIsOpen, drafted, teams }) => {
  const draftedReversed = [...drafted].reverse()
  const league = draftedReversed.reduce((finalTeams, player, index) => {
    const round = Math.ceil((index + 1) / teams)
    const teamIndex =
      round % 2 === 1 ? index % teams : teams - 1 - (index % teams)
    const espnPlayer = espnRank.find(p => p.name === player) || {}
    if (finalTeams[teamIndex]) {
      finalTeams[teamIndex].push({
        ...espnPlayer,
        draftString: `${index + 1} ${player} (${round}-${(index % teams) + 1})`,
      })
    } else {
      finalTeams[teamIndex] = [
        {
          ...espnPlayer,
          draftString: `${index + 1} ${player} (${round}-${
            (index % teams) + 1
          })`,
        },
      ]
    }
    return finalTeams
  }, [])
  const [selectedTeam, setSelectedTeam] = useState(null)

  const positions = ['PG', 'SG', 'SF', 'PF', 'C']
  const getPlayersByPosition = position => {
    const playersByPosition = league[selectedTeam]
      .filter(player => player.position?.some(pos => pos === position))
      .map(player => player.name)
    return playersByPosition.length > 0
      ? `${playersByPosition.join(' ')} (${playersByPosition.length})`
      : ''
  }
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex min-h-screen items-center justify-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative mx-auto rounded bg-white p-4'>
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='absolute right-4 h-6 w-6'
          >
            &times;
          </button>
          <Dialog.Title>{teams} Teams</Dialog.Title>
          <ul className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {league.map((team, index) => (
              <li key={index}>
                <h2>
                  <button
                    type='button'
                    onClick={() => {
                      setSelectedTeam(index)
                    }}
                  >
                    Team {index + 1}
                  </button>
                </h2>
                <ul>
                  {team.map((player, pIndex) => (
                    <li key={pIndex}>{player.draftString}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {selectedTeam !== null && (
            <>
              <h2>
                <button
                  type='button'
                  onClick={() => {
                    setSelectedTeam(selectedTeam)
                  }}
                >
                  Selcted: Team {selectedTeam + 1}
                </button>
              </h2>
              <div className='flex space-x-2'>
                <ul>
                  {league[selectedTeam]?.map((player, pIndex) => (
                    <li key={pIndex}>{player.name}</li>
                  ))}
                </ul>
                <ul>
                  {positions.map(position =>
                    getPlayersByPosition(position) ? (
                      <li key={position}>
                        {position} -{' '}
                        {league[selectedTeam]
                          .filter(player =>
                            player.position?.some(pos => pos === position)
                          )
                          .reduce(
                            (str, player) => `${str}${player.name} - `,
                            ''
                          )}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </Dialog>
  )
}

const SettingsDialog = ({ isOpen, setIsOpen, settings, setSettings }) => {
  const { teams } = settings
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex min-h-screen items-center justify-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative mx-auto rounded bg-white p-4'>
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='absolute right-4 h-6 w-6'
          >
            &times;
          </button>
          <Dialog.Title>Settings</Dialog.Title>
          <label htmlFor='teams'>
            <span>teams</span>
            <input
              placeholder='teams'
              className='form-input w-full text-center'
              type='text'
              name='teams'
              value={teams}
              onChange={e =>
                setSettings({
                  ...settings,
                  teams: Number(e.target.value),
                })
              }
            />
          </label>
        </div>
      </div>
    </Dialog>
  )
}

const Draft = () => {
  const [drafted, setDrafted] = useLocalStorage('draft', [])
  const [queue, setQueue] = useLocalStorage('queue', [])
  const [saveDraftDialogIsOpen, setSaveDraftDialogIsOpen] = useState(false)
  const [loadListDialogIsOpen, setLoadListDialogIsOpen] = useState(false)
  const [fixItemDialogIsOpen, setFixItemDialogIsOpen] = useState(false)
  const [teamsDialogIsOpen, setTeamsDialogIsOpen] = useState(false)
  const [settingsDialogIsOpen, setSettingsDialogIsOpen] = useState(false)
  const [isEmptyDraftDialogOpen, setIsEmptyDraftDialogOpen] = useState(false)
  const [isEmptyQueueDialogOpen, setIsEmptyQueueDialogOpen] = useState(false)
  const [settings, setSettings] = useState({
    teams: 12,
  })
  const [itemToBeFixed, setItemToBeFixed] = useState(null)
  const [hideDrafted, setHideDrafted] = useState(true)
  const [ranksList, setRanksList] = useState([...ranks])
  const [filter, setFilter] = useState('')
  const filterRef = useRef(null)
  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'f' && e.ctrlKey) {
        console.log('focus filter')
        filterRef.current.focus()
      }
      if (e.key === 't' && e.ctrlKey) {
        setTeamsDialogIsOpen(!teamsDialogIsOpen)
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [])

  const unqueue = name => {
    const newQueue = queue.filter(p => p.name !== name)
    setQueue(newQueue)
  }
  const draft = name => {
    const newDrafted = [name, ...drafted]
    setDrafted(newDrafted)
    unqueue(name)
    setFilter('')
  }
  const undraft = index => {
    const newDrafted = [...drafted]
    newDrafted.splice(index, 1)
    setDrafted(newDrafted)
  }
  const compareRank = rank => {
    const newRanksList = [...ranksList]
    const selectedRanksListIndex = newRanksList.findIndex(
      r => r.title === rank.title
    )
    newRanksList.unshift(newRanksList.splice(selectedRanksListIndex, 1)[0])
    setRanksList(newRanksList)
  }
  const [, ...compareRanksList] = ranksList
  const available = projections.items.filter(
    p => !drafted.some(d => d === p.name)
  )
  const commands = [
    ...available.map(p => ({
      ...p,
      id: `Draft ${p.name}`,
      title: `Draft ${p.name}`,
      name: p.name,
      subtitle: `${p.position.join(', ')} - ${p.team}`,
      action: () => draft(p.name),
    })),
    // ...drafted.map((name, index) => ({
    //   id: `Undraft ${name}`,
    //   title: `Undraft ${name}`,
    //   name,
    //   action: () => undraft(index),
    // })),
    ...available
      .filter(p => !queue.some(q => q.name === p.name))
      .map(p => ({
        ...p,
        id: `Queue ${p.name}`,
        title: `Queue ${p.name}`,
        name: p.name,
        action: () => setQueue([...queue, p]),
      })),
    // ...queue.map(p => ({
    //   ...p,
    //   id: `Unqueue ${p.name}`,
    //   title: `Unqueue ${p.name}`,
    //   name: p.name,
    //   action: () => unqueue(p.name),
    // })),
    // ...available.map(p => ({
    //   ...p,
    //   id: `Filter ${p.name}`,
    //   title: `Filter ${p.name}`,
    //   name: p.name,
    //   action: () => setFilter(p.name),
    // })),
    // ...compareRanksList.map(rank => ({
    //   id: `Compare Rank ${rank.title}`,
    //   title: `Compare Rank ${rank.title}`,
    //   action: () => compareRank(rank),
    // })),
    {
      id: `Toggle Hide Drafted`,
      title: `${hideDrafted ? 'Show' : 'Hide'} Drafted`,
      action: () => setHideDrafted(!hideDrafted),
    },
    {
      id: 'Open Teams',
      title: 'Open Teams',
      action: () => setTeamsDialogIsOpen(true),
    },
    {
      id: 'Open Settings',
      title: 'Open Settings',
      action: () => setSettingsDialogIsOpen(true),
    },
  ]
  if (filter) {
    commands.push({
      id: `Clear Filter`,
      title: `Clear Filter`,
      action: () => setFilter(''),
    })
  }
  if (queue.length > 0) {
    commands.push({
      id: `Clear Queue`,
      title: `Clear Queue`,
      action: () => setQueue([]),
    })
  }
  return (
    <Page fullScreen>
      <Layout todaysGames={false} fullScreen>
        <Main className='space-y-2 px-2 md:mx-auto md:w-9/10'>
          <div className='sticky top-0 flex space-x-4 bg-skin-background'>
            <label
              htmlFor='checked'
              className='inline-flex cursor-pointer items-center justify-center space-x-3 divide-skin-foreground'
            >
              <span className={!hideDrafted ? 'text-gray-500' : ''}>
                hide drafted <span className='hidden md:inline'>players</span>
              </span>
              <span className='relative'>
                <span className='block h-6 w-10 rounded-full bg-gray-400 shadow-inner' />
                <span
                  className={`focus-within:shadow-outline absolute inset-y-0 left-0 mt-1 ml-1 block h-4 w-4 rounded-full bg-skin-button-accent shadow transition-transform duration-300 ease-in-out ${
                    !hideDrafted ? 'translate-x-full transform' : ''
                  }`}
                >
                  <input
                    id='checked'
                    type='checkbox'
                    checked
                    onChange={() => setHideDrafted(!hideDrafted)}
                    className='absolute h-0 w-0 opacity-0'
                  />
                </span>
              </span>
            </label>
            <input
              type='text'
              value={filter}
              onChange={e => setFilter(e.target.value)}
              placeholder='filter'
              ref={filterRef}
              className='hidden md:block'
            />
            <button type='button' onClick={() => setTeamsDialogIsOpen(true)}>
              <UserGroupIcon className='h-6 w-6' />
            </button>
            <button type='button' onClick={() => setSettingsDialogIsOpen(true)}>
              <CogIcon className='h-6 w-6' />
            </button>
            <button
              type='button'
              onClick={() => {
                setSaveDraftDialogIsOpen(true)
              }}
              disabled={drafted.length === 0}
              className='disabled:pointer-events-none disabled:opacity-25'
            >
              <SaveIcon className='h-6 w-6' />
            </button>
            <button
              type='button'
              onClick={() => {
                setLoadListDialogIsOpen(true)
              }}
            >
              <CloudDownloadIcon className='h-6 w-6' />
            </button>
          </div>
          <div className='flex divide-x divide-skin-foreground overflow-x-scroll'>
            <div className='w-[350px]'>
              <h2 className='flex justify-between space-x-4 p-2'>
                <span>queue</span>
                <button
                  type='button'
                  onClick={() => {
                    setIsEmptyQueueDialogOpen(true)
                  }}
                  disabled={queue.length === 0}
                >
                  <TrashIcon className='h-6 w-6' />
                </button>
              </h2>
              {queue.length > 0 ? (
                <DragDropList
                  items={queue}
                  renderItem={item => (
                    <button
                      type='button'
                      onClick={() => draft(item.name)}
                      className='flex-grow truncate'
                    >
                      {item.name}
                    </button>
                  )}
                  reorderItems={newQueue => setQueue(newQueue)}
                  itemContainerClassName='flex items-center space-x-4 p-2 odd:bg-skin-foreground-alt'
                />
              ) : (
                <div className='p-2'>empty</div>
              )}
              <h2 className='flex justify-between space-x-4 border-t-4 border-skin-foreground p-2'>
                <span>draft</span>
                <div className='flex space-x-2'>
                  <button
                    type='button'
                    onClick={() => {
                      draft('placeholder')
                    }}
                  >
                    <PlusCircleIcon className='h-6 w-6' />
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      setIsEmptyDraftDialogOpen(true)
                    }}
                    disabled={drafted.length === 0}
                  >
                    <TrashIcon className='h-6 w-6' />
                  </button>
                </div>
              </h2>
              <DragDropList
                items={drafted}
                renderItem={(item, index) => (
                  <DraftListItem
                    item={item}
                    index={index}
                    itemsLength={drafted.length}
                    fixItem={idx => {
                      setFixItemDialogIsOpen(true)
                      setItemToBeFixed(idx)
                    }}
                    deleteItem={undraft}
                    teams={settings.teams}
                  />
                )}
                reorderItems={newDrafted => {
                  setDrafted(newDrafted)
                }}
                itemContainerClassName='flex items-center space-x-4 p-2 odd:bg-skin-foreground-alt'
              />
            </div>
            {[projections, ...ranksList].map((rank, rankIndex) => (
              <div key={rank.title} className='w-[350px]'>
                <table className='w-full'>
                  <thead>
                    <tr>
                      <td className='p-2 text-center'>#</td>
                      <td className='p-2'>
                        {rankIndex > 1 ? (
                          <button
                            type='button'
                            className='block w-full rounded bg-blue-800 px-2'
                            onClick={() => compareRank(rank)}
                          >
                            {rank.title}
                          </button>
                        ) : (
                          rank.title
                        )}
                      </td>

                      <td className='p-2 text-center'>+/-</td>
                    </tr>
                  </thead>
                  <tbody>
                    {projections.items.map(({ name }, index) => (
                      <tr
                        key={name}
                        className={`border-b border-skin-foreground ${
                          (drafted.some(p => p === rank.items[index]?.name) &&
                            hideDrafted) ||
                          (filter &&
                            !rank.items[index]?.name
                              .toLowerCase()
                              .includes(filter.toLowerCase()))
                            ? 'hidden'
                            : ''
                        }`}
                      >
                        <td className='p-2 text-center'>{index + 1}</td>
                        <td
                          className={`p-2 ${
                            drafted.some(p => p === rank.items[index]?.name)
                              ? 'opacity-25'
                              : ''
                          }`}
                        >
                          <button
                            type='button'
                            className={`truncate disabled:pointer-events-none ${
                              projections.items.findIndex(
                                p => p.name === rank.items[index]?.name
                              ) === -1
                                ? 'font-bold text-red-700'
                                : ''
                            }`}
                            onClick={() => {
                              if (rank.title === projections.title) {
                                draft(rank.items[index].name)
                              } else {
                                setQueue([...queue, rank.items[index]])
                              }
                            }}
                            disabled={drafted.some(
                              p => p === rank.items[index]?.name
                            )}
                          >
                            {rank.items[index]?.name}
                          </button>
                        </td>
                        {rankIndex === 0 ? (
                          <PlusMinus
                            index={index}
                            rank={projections.items}
                            compare={ranksList[0].items}
                            isProjections
                          />
                        ) : (
                          <PlusMinus
                            index={index}
                            rank={rank.items}
                            compare={projections.items}
                          />
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </Main>
      </Layout>
      <SaveDraftDialog
        isOpen={saveDraftDialogIsOpen}
        setIsOpen={setSaveDraftDialogIsOpen}
        drafted={drafted}
      />
      <LoadListDialog
        isOpen={loadListDialogIsOpen}
        setIsOpen={setLoadListDialogIsOpen}
        setDrafted={setDrafted}
      />
      <FixItemDialog
        isOpen={fixItemDialogIsOpen}
        setIsOpen={setFixItemDialogIsOpen}
        itemToBeFixed={itemToBeFixed}
        setItemToBeFixed={setItemToBeFixed}
        drafted={drafted}
        setDrafted={setDrafted}
      />
      <TeamsDialog
        isOpen={teamsDialogIsOpen}
        setIsOpen={setTeamsDialogIsOpen}
        drafted={drafted}
        teams={settings.teams}
      />
      <SettingsDialog
        isOpen={settingsDialogIsOpen}
        setIsOpen={setSettingsDialogIsOpen}
        settings={settings}
        setSettings={setSettings}
      />
      <Dialog
        open={isEmptyQueueDialogOpen}
        onClose={() => setIsEmptyQueueDialogOpen(false)}
        className='fixed inset-0 z-10 overflow-y-auto'
      >
        <div className='flex min-h-screen items-center justify-center'>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

          <div className='relative mx-auto rounded bg-white p-4'>
            <button
              type='button'
              onClick={() => setIsEmptyQueueDialogOpen(false)}
              className='absolute right-4 h-6 w-6'
            >
              &times;
            </button>
            <Dialog.Title>Empty Queue?</Dialog.Title>
            <button
              type='button'
              onClick={() => {
                setQueue([])
                setIsEmptyQueueDialogOpen(false)
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={isEmptyDraftDialogOpen}
        onClose={() => setIsEmptyDraftDialogOpen(false)}
        className='fixed inset-0 z-10 overflow-y-auto'
      >
        <div className='flex min-h-screen items-center justify-center'>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

          <div className='relative mx-auto rounded bg-white p-4'>
            <button
              type='button'
              onClick={() => setIsEmptyDraftDialogOpen(false)}
              className='absolute right-4 h-6 w-6'
            >
              &times;
            </button>
            <Dialog.Title>Delete Draft?</Dialog.Title>
            <button
              type='button'
              onClick={() => {
                setDrafted([])
                setIsEmptyDraftDialogOpen(false)
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Dialog>
      <CommandPalette commands={commands} />
    </Page>
  )
}

export default Draft
