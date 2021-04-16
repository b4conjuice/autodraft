import { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/solid'

const nav = [
  {
    url: '/games',
    text: 'games',
  },
  {
    url: '/teams',
    text: 'teams',
  },
  {
    url: '/players',
    text: 'players',
  },
  {
    url: '/fantasy',
    text: 'fantasy',
  },
  {
    url: '/settings',
    text: 'settings',
  },
]

export const TopNav = ({ pathname }) => (
  <nav className="hidden px-2 py-1 text-lg md:block">
    <ul className="flex justify-center space-x-3">
      {nav.map(({ url, text }) => (
        <li
          key={url}
          className={
            pathname === url || pathname.includes(`${url}/`)
              ? 'border-b-2 border-blue-700'
              : ''
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
)
export const SideNav = () => {
  const { events, pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef()
  if (events) {
    events.on('routeChangeComplete', () => {
      setIsOpen(false)
    })
  }
  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-75"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          static
          as="div"
          className="fixed inset-0 z-40 overflow-hidden text-xl md:hidden text-skin-base"
          initialFocus={closeButtonRef}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Overlay
            className={`absolute inset-0 ${
              isOpen
                ? 'bg-skin-background bg-opacity-50 backdrop-filter backdrop-blur'
                : ''
            }`}
          >
            <button
              ref={closeButtonRef}
              className="fixed z-30 flex items-center justify-center w-12 h-12 text-white transition bg-blue-700 bg-opacity-50 border border-white rounded-full border-opacity-20 bottom-2 right-2 md:hidden focus:outline-none focus-visible:ring backdrop-filter backdrop-blur"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close site navigation</span>
              <XIcon className="w-6 h-6" />
            </button>
          </Dialog.Overlay>
          <div className="absolute inset-0 z-40 flex pointer-events-none">
            <div className="flex-1 max-w-sm min-w-0 bg-opacity-75 border-r border-white pointer-events-auto bg-skin-background border-opacity-10 backdrop-filter backdrop-blur firefox:bg-opacity-90">
              <nav className="p-4">
                <ul className="space-y-4">
                  {nav.map(({ url, text }) => (
                    <li
                      key={url}
                      className={
                        pathname === url || pathname.includes(`/`) ? '' : ''
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
            </div>
            <div className="w-32 pointer-events-none" aria-hidden="true" />
          </div>
        </Dialog>
      </Transition>
      <button
        className="fixed z-30 flex items-center justify-center w-12 h-12 text-white transition bg-blue-700 bg-opacity-50 border border-white rounded-full border-opacity-20 bottom-2 right-2 md:hidden focus:outline-none focus-visible:ring backdrop-filter backdrop-blur"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open site navigation</span>
        <MenuAlt4Icon className="w-6 h-6" />
      </button>
    </>
  )
}
