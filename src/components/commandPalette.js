import { Fragment, useState, useEffect } from 'react'
import { Dialog, Combobox, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'
import Fuse from 'fuse.js'

export default function CommandPalette({
  commands,
  placeholder = 'search commands',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen])

  const fuse = new Fuse(commands, {
    keys: ['id', 'title', { name: 'name', weight: 2 }],
  })

  const filteredCommands = !query
    ? []
    : fuse.search(query.toLowerCase()).map(({ item }) => item)
  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery('')}
    >
      <Dialog
        onClose={setIsOpen}
        className='fixed inset-0 overflow-y-auto p-4 pt-[25vh]'
      >
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-500/75' />
        </Transition.Child>
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Combobox
            as='div'
            onChange={command => {
              setIsOpen(false)
              command.action()
            }}
            className='relative mx-auto max-w-lg divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5'
          >
            <div className='flex items-center space-x-2 px-4'>
              <SearchIcon className='h-6 w-6 text-gray-500' />
              <Combobox.Input
                onChange={e => {
                  setQuery(e.target.value)
                }}
                className='placholder-gray-400 h-12 w-full border-0 bg-transparent text-gray-800 focus:outline-0 focus:ring-0'
                placeholder={placeholder}
              />
            </div>
            {filteredCommands.length > 0 && (
              <Combobox.Options
                static
                className='max-h-40 overflow-y-auto py-4 text-sm'
              >
                {filteredCommands.map(command => (
                  <Combobox.Option key={command.id} value={command}>
                    {({ active }) => (
                      <div
                        className={`space-x-1 px-4 py-2 ${
                          active ? 'bg-indigo-600' : 'bg-white'
                        }`}
                      >
                        <span
                          className={`font-medium ${
                            active ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {command.title}
                        </span>
                        {command.subtitle && (
                          <span
                            className={`${
                              active ? 'text-indigo-200' : 'text-gray-400'
                            }`}
                          >
                            - {command.subtitle}
                          </span>
                        )}
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query && filteredCommands.length === 0 && (
              <p className='p-4 text-sm text-gray-500'>no results found</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
