import { useEffect, useRef, useState } from 'react'
import { Dialog, Listbox } from '@headlessui/react'
import { CloudDownloadIcon, SaveIcon, TrashIcon } from '@heroicons/react/solid'
import Fuse from 'fuse.js'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Dnd from '@/components/dnd'
import Autocomplete from '@/components/autocomplete'
import useLocalStorage from '@/lib/useLocalStorage'
import espnRank from '@/lib/espnRank'
import hashtagRank from '@/lib/hashtagRank'
import hashtagPuntFGRank from '@/lib/hashtagPuntFGRank'
import hashtagPuntFTRank from '@/lib/hashtagPuntFTRank'
import hashtagPuntBLKRank from '@/lib/hashtagPuntBLKRank'
import { fetchLists, saveList } from '@/lib/api'
import useForm from '@/lib/useForm'

const ranks = [
  {
    title: 'hashtag',
    items: hashtagRank,
  },
  {
    title: 'hashtag punt fg%',
    items: hashtagPuntFGRank,
  },
  {
    title: 'hashtag punt ft%',
    items: hashtagPuntFTRank,
  },
  {
    title: 'hashtag punt blk',
    items: hashtagPuntBLKRank,
  },
]

const projections = {
  title: 'espn',
  items: espnRank,
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
      >{`${index > index2 ? '+' : ''}${difference} (${index2 + 1})`}</td>
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
    >{`${index2 > index ? '+' : ''}${difference} (${index2 + 1})`}</td>
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
  if (!itemToBeFixed) return null
  const fuse = new Fuse(espnRank, {
    keys: ['name'],
  })
  const players = fuse.search(itemToBeFixed).map(({ item }) => item)
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex min-h-screen items-center justify-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative mx-auto max-w-sm space-y-4 rounded bg-white p-4'>
          <Dialog.Title>Fix Item: {itemToBeFixed}</Dialog.Title>
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
              const idx = drafted.findIndex(p => p === itemToBeFixed)
              drafted[idx] = selectedPlayer.name
              setDrafted(drafted)
              setItemToBeFixed(null)
              setIsOpen(false)
            }}
          >
            <CloudDownloadIcon className='h-6 w-6' />
          </button>
        </div>
      </div>
    </Dialog>
  )
}

const Draft = () => {
  const [drafted, setDrafted] = useLocalStorage('draft', [])
  const [saveDraftDialogIsOpen, setSaveDraftDialogIsOpen] = useState(false)
  const [loadListDialogIsOpen, setLoadListDialogIsOpen] = useState(false)
  const [fixItemDialogIsOpen, setFixItemDialogIsOpen] = useState(false)
  const [itemToBeFixed, setItemToBeFixed] = useState(null)
  const [hideDrafted, setHideDrafted] = useState(true)
  const [ranksList, setRanksList] = useState([...ranks])
  const [filter, setFilter] = useState('')
  const autocompleteRef = useRef(null)
  const filterRef = useRef(null)
  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'f' && e.ctrlKey) {
        console.log('focus filter')
        filterRef.current.focus()
      }
      if (e.key === 'd' && e.ctrlKey) {
        console.log('focus draft')
        console.log({ foo: autocompleteRef.current })
        autocompleteRef.current.focus()
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [])
  useEffect(() => {
    autocompleteRef.current = document.querySelector('input.aa-Input')
    console.log({ autocompleteRef })
  }, [])

  const draft = name => {
    const newDrafted = [...drafted]
    newDrafted.push(name)
    setDrafted(newDrafted)
  }
  return (
    <Page>
      <Layout todaysGames={false}>
        <Main className='space-y-2 px-2 md:mx-auto md:w-9/10'>
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
          <div className='flex space-x-4'>
            <Autocomplete
              openOnFocus
              placeholder='Draft by search'
              getSources={() => {
                return [
                  {
                    sourceId: 'links',
                    getItems({ query }) {
                      const fuse = new Fuse(espnRank, {
                        keys: ['name'],
                      })
                      return fuse
                        .search(query)
                        .map(({ item }) => item)
                        .filter(player => !drafted.some(p => p === player.name))
                    },
                    getItemUrl({ item }) {
                      return item.name
                    },
                    templates: {
                      item({ item }) {
                        return item.name
                      },
                    },
                  },
                ]
              }}
              navigator={{
                navigate({ itemUrl }) {
                  draft(itemUrl)
                },
              }}
            />
            <label
              htmlFor='checked'
              className='divide-skin-foregroundspace-x-3 inline-flex cursor-pointer items-center justify-center'
            >
              <span className={!hideDrafted ? 'text-gray-500' : ''}>
                hide drafted players
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
            />
          </div>
          <div className='flex divide-x divide-skin-foreground overflow-x-scroll'>
            <div className='w-[250px]'>
              <h2 className='flex space-x-4 p-2'>
                <span>draft</span>
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
                <button
                  type='button'
                  onClick={() => {
                    setDrafted([])
                  }}
                >
                  <TrashIcon className='h-6 w-6' />
                </button>
              </h2>
              <Dnd
                items={drafted}
                reorderItems={newDrafted => {
                  setDrafted(newDrafted)
                }}
                deleteItem={index => {
                  const newDrafted = [...drafted]
                  newDrafted.splice(index, 1)
                  setDrafted(newDrafted)
                }}
                fixItem={index => {
                  setFixItemDialogIsOpen(true)
                  setItemToBeFixed(drafted[index])
                }}
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
                            onClick={() => {
                              const newRanksList = [...ranksList]
                              const selectedRanksListIndex =
                                newRanksList.findIndex(
                                  r => r.title === rank.title
                                )
                              newRanksList.unshift(
                                newRanksList.splice(
                                  selectedRanksListIndex,
                                  1
                                )[0]
                              )
                              setRanksList(newRanksList)
                            }}
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
                        className={`odd:bg-skin-foreground-alt ${
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
                            className={`disabled:pointer-events-none ${
                              projections.items.findIndex(
                                p => p.name === rank.items[index]?.name
                              ) === -1
                                ? 'font-bold text-red-700'
                                : ''
                            }`}
                            onClick={() => draft(rank.items[index].name)}
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
    </Page>
  )
}

export default Draft
