import { useState } from 'react'
import { Dialog, Listbox } from '@headlessui/react'
import {
  CloudDownloadIcon,
  SaveIcon,
  TrashIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/solid'
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
]

const PlusMinus = ({ index, rank }) => {
  const index2 = espnRank.findIndex(p => p.name === rank[index]?.name)
  const difference = index2 - index
  const absoluteDifference = Math.abs(difference)
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
      <div className='flex items-center justify-center min-h-screen'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative max-w-sm p-4 mx-auto bg-white rounded'>
          <Dialog.Title>Save List</Dialog.Title>
          <input
            placeholder='title'
            className='w-full text-center form-input'
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
            <SaveIcon className='w-6 h-6' />
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
      <div className='flex items-center justify-center min-h-screen'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative max-w-sm p-4 mx-auto space-y-4 bg-white rounded'>
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
            <CloudDownloadIcon className='w-6 h-6' />
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
  // .filter(player => !drafted.some(p => p === player.name))
  console.log({ players })

  // const { data: lists } = fetchLists()
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])
  // if (!lists || lists.length === 0) return null
  // const selectedList = lists[selectedListIndex]
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex items-center justify-center min-h-screen'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative max-w-sm p-4 mx-auto space-y-4 bg-white rounded'>
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
            <CloudDownloadIcon className='w-6 h-6' />
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
  const draft = name => {
    const newDrafted = [...drafted]
    newDrafted.push(name)
    setDrafted(newDrafted)
  }
  return (
    <Page>
      <Layout todaysGames={false}>
        <Main className='px-2 space-y-2 md:mx-auto md:w-9/10'>
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
              className='inline-flex items-center justify-center cursor-pointer divide-skin-foregroundspace-x-3'
            >
              <span className={!hideDrafted ? 'text-gray-500' : ''}>
                hide drafted players
              </span>
              <span className='relative'>
                <span className='block w-10 h-6 bg-gray-400 rounded-full shadow-inner' />
                <span
                  className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-skin-button-accent ${
                    !hideDrafted ? 'transform translate-x-full' : ''
                  }`}
                >
                  <input
                    id='checked'
                    type='checkbox'
                    checked
                    onChange={() => setHideDrafted(!hideDrafted)}
                    className='absolute w-0 h-0 opacity-0'
                  />
                </span>
              </span>
            </label>
          </div>
          <div className='flex overflow-x-scroll divide-x divide-skin-foreground'>
            <div className='w-[250px]'>
              <h2 className='flex p-2 space-x-4'>
                <span>draft</span>
                <button
                  type='button'
                  onClick={() => {
                    setSaveDraftDialogIsOpen(true)
                  }}
                  disabled={drafted.length === 0}
                  className='disabled:pointer-events-none disabled:opacity-25'
                >
                  <SaveIcon className='w-6 h-6' />
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setLoadListDialogIsOpen(true)
                  }}
                >
                  <CloudDownloadIcon className='w-6 h-6' />
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setDrafted([])
                  }}
                >
                  <TrashIcon className='w-6 h-6' />
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
            <div className='w-[250px]'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <td className='p-2'>#</td>
                    <td className='p-2'>espn</td>
                  </tr>
                </thead>
                <tbody>
                  {espnRank.map(({ name }, index) => (
                    <tr
                      key={name}
                      className={`odd:bg-skin-foreground-alt ${
                        drafted.some(p => p === name) && hideDrafted
                          ? 'hidden'
                          : ''
                      }`}
                    >
                      <td className='p-2'>{index + 1}</td>
                      <td
                        className={`p-2 truncate ${
                          drafted.some(p => p === name) ? 'opacity-25' : ''
                        }`}
                      >
                        <button
                          type='button'
                          className='disabled:pointer-events-none'
                          onClick={() => draft(name)}
                          disabled={drafted.some(p => p === name)}
                        >
                          {name}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {ranks.map(rank => (
              <div className='w-[350px]'>
                <table className='w-full'>
                  <thead>
                    <tr>
                      <td className='p-2 text-center'>#</td>
                      <td className='p-2'>{rank.title}</td>
                      <td className='p-2 text-center'>+/-</td>
                    </tr>
                  </thead>
                  <tbody>
                    {espnRank.map(({ name }, index) => (
                      <tr
                        key={name}
                        className={`odd:bg-skin-foreground-alt ${
                          drafted.some(p => p === rank.items[index]?.name) &&
                          hideDrafted
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
                              espnRank.findIndex(
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
                        <PlusMinus index={index} rank={rank.items} />
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
