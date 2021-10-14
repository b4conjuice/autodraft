import { useState } from 'react'
import { Dialog, Listbox } from '@headlessui/react'
import { CloudDownloadIcon, SaveIcon, TrashIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Dnd from '@/components/dnd'
import useLocalStorage from '@/lib/useLocalStorage'
import espnRank from '@/lib/espnRank'
import hashtagRank from '@/lib/hashtagRank'
import { fetchLists, saveList } from '@/lib/api'
import useForm from '@/lib/useForm'

const PlusMinus = ({ index }) => {
  const index2 = espnRank.findIndex(p => p.name === hashtagRank[index]?.name)
  return (
    <td className={`p-2 ${index2 > index ? 'bg-blue-700' : 'bg-red-700'}`}>{`${
      index2 > index ? '+' : ''
    }${index2 - index} (${index + 1})`}</td>
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

const Draft = () => {
  const [drafted, setDrafted] = useLocalStorage('draft', [])
  const [saveDraftDialogIsOpen, setSaveDraftDialogIsOpen] = useState(false)
  const [loadListDialogIsOpen, setLoadListDialogIsOpen] = useState(false)
  const draft = name => {
    const newDrafted = [...drafted]
    newDrafted.push(name)
    setDrafted(newDrafted)
  }
  return (
    <Page>
      <Layout todaysGames={false}>
        <Main className='px-2 space-y-2 md:mx-auto'>
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
          <div className='flex'>
            <div className='w-[350px]'>
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
              />
            </div>
            <table>
              <thead>
                <tr>
                  <td className='p-2'>#</td>
                  <td className='p-2'>espn</td>
                  <td className='p-2'>hashtag</td>
                  <td className='p-2'>+/-</td>
                </tr>
              </thead>
              <tbody>
                {espnRank.map(({ name, position }, index) => (
                  <tr key={name} className='odd:bg-skin-foreground-alt'>
                    <td className='p-2'>{index + 1}</td>
                    <td
                      className={`p-2 ${
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
                    <td
                      className={`p-2 ${
                        drafted.some(p => p === hashtagRank[index]?.name)
                          ? 'opacity-25'
                          : ''
                      }`}
                    >
                      <button
                        type='button'
                        className='disabled:pointer-events-none'
                        onClick={() => draft(hashtagRank[index].name)}
                        disabled={drafted.some(
                          p => p === hashtagRank[index]?.name
                        )}
                      >
                        {hashtagRank[index]?.name}
                      </button>
                    </td>
                    <PlusMinus index={index} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default Draft
