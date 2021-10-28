import { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'
import {
  MenuAlt4Icon as MenuIcon,
  XIcon,
  ClockIcon,
  UserGroupIcon,
  UserIcon,
  LightningBoltIcon,
  ChartBarIcon,
  CogIcon,
  ViewListIcon,
  FireIcon,
} from '@heroicons/react/solid'

import { useMenu } from '@/lib/useMenu'

const nav = [
  {
    url: '/fantasy',
    text: 'fantasy',
    Icon: LightningBoltIcon,
    children: [
      {
        url: '/fantasy/teams',
        text: 'teams',
        Icon: UserGroupIcon,
      },
      {
        url: '/fantasy/players',
        text: 'players',
        Icon: UserIcon,
      },
      {
        url: '/fantasy/lists',
        text: 'lists',
        Icon: ViewListIcon,
      },
    ],
  },
  {
    url: '/nba',
    text: 'nba',
    Icon: FireIcon,
    children: [
      {
        url: '/nba/games',
        text: 'games',
        Icon: ClockIcon,
      },
      {
        url: '/nba/teams',
        text: 'teams',
        Icon: UserGroupIcon,
      },
      {
        url: '/nba/players',
        text: 'players',
        Icon: UserIcon,
      },
    ],
  },
  {
    url: '/draft',
    text: 'draft',
    Icon: ChartBarIcon,
  },
  {
    url: '/settings',
    text: 'settings',
    Icon: CogIcon,
  },
]

export const TopNav = ({ pathname }) => (
  <nav className='hidden px-2 py-1 text-lg md:block'>
    <ul className='flex justify-center space-x-3'>
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
              <a className='text-skin-link-accent hover:text-skin-link-accent-hover'>
                {text}
              </a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
)

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useMenu()
  return (
    <button
      className='items-center justify-center hidden w-12 h-12 text-white transition md:flex focus:outline-none focus-visible:ring backdrop-filter backdrop-blur'
      type='button'
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className='sr-only'>Open site navigation</span>
      <MenuIcon className='w-6 h-6' />
    </button>
  )
}

export const Menu = () => {
  const { events, pathname } = useRouter()
  const [isOpen, setIsOpen] = useMenu()
  if (events) {
    events.on('routeChangeComplete', () => {
      setIsOpen(true)
    })
  }
  return (
    <nav>
      <ul className='space-y-4'>
        {nav.map(({ url, text, Icon, children }) => (
          <li
            key={url}
            className={pathname === url || pathname.includes(`/`) ? '' : ''}
          >
            {pathname === url ? (
              <span className='flex items-center space-x-2'>
                <Icon className='w-6 h-6' />
                <span className={isOpen ? 'block' : 'hidden'}>{text}</span>
              </span>
            ) : (
              <Link href={url}>
                <a
                  className={`flex items-center space-x-2 hover:text-skin-link-accent-hover ${
                    pathname.includes(url) ? '' : 'text-skin-link-accent'
                  }`}
                >
                  <Icon className='w-6 h-6' />
                  <span className={isOpen ? 'block' : 'hidden'}>{text}</span>
                </a>
              </Link>
            )}
            {children && (
              <ul className='mt-3 ml-4 space-y-3'>
                {children.map(child => (
                  <li>
                    {pathname === child.url ? (
                      <span className='flex items-center space-x-2'>
                        <child.Icon className='w-6 h-6' />
                        <span className={isOpen ? 'block' : 'hidden'}>
                          {child.text}
                        </span>
                      </span>
                    ) : (
                      <Link href={child.url}>
                        <a
                          className={`flex items-center space-x-2 hover:text-skin-link-accent-hover ${
                            pathname.includes(child.url)
                              ? ''
                              : 'text-skin-link-accent'
                          }`}
                        >
                          <child.Icon className='w-6 h-6' />
                          <span className={isOpen ? 'block' : 'hidden'}>
                            {child.text}
                          </span>
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

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
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-75'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Dialog
          static
          as='div'
          className='fixed inset-0 z-40 overflow-hidden text-xl md:hidden text-skin-base'
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
              className='fixed z-30 flex items-center justify-center w-12 h-12 text-white transition bg-opacity-50 border border-white rounded-full bg-skin-button-accent border-opacity-20 bottom-2 right-2 md:hidden focus:outline-none focus-visible:ring backdrop-filter backdrop-blur'
              type='button'
              onClick={() => setIsOpen(false)}
            >
              <span className='sr-only'>Close site navigation</span>
              <XIcon className='w-6 h-6' />
            </button>
          </Dialog.Overlay>
          <div className='absolute inset-0 z-40 flex pointer-events-none'>
            <div className='flex-1 max-w-sm min-w-0 bg-opacity-75 border-r border-white pointer-events-auto bg-skin-background border-opacity-10 backdrop-filter backdrop-blur firefox:bg-opacity-90'>
              <nav className='p-4'>
                <ul className='space-y-4'>
                  {nav.map(({ url, text, Icon, children }) => (
                    <li
                      key={url}
                      className={
                        pathname === url || pathname.includes(`/`) ? '' : ''
                      }
                    >
                      {pathname === url ? (
                        <span className='flex items-center space-x-2'>
                          <Icon className='w-6 h-6' />
                          <span>{text}</span>
                        </span>
                      ) : (
                        <Link href={url}>
                          <a
                            className={`flex items-center space-x-2 hover:text-skin-link-accent-hover ${
                              pathname.includes(url)
                                ? ''
                                : 'text-skin-link-accent'
                            }`}
                          >
                            <Icon className='w-6 h-6' />
                            <span>{text}</span>
                          </a>
                        </Link>
                      )}
                      {children && (
                        <ul className='mt-3 ml-4 space-y-3'>
                          {children.map(child => (
                            <li>
                              {pathname === child.url ? (
                                <span className='flex items-center space-x-2'>
                                  <child.Icon className='w-6 h-6' />
                                  <span>{child.text}</span>
                                </span>
                              ) : (
                                <Link href={child.url}>
                                  <a
                                    className={`flex items-center space-x-2 hover:text-skin-link-accent-hover ${
                                      pathname.includes(child.url)
                                        ? ''
                                        : 'text-skin-link-accent'
                                    }`}
                                  >
                                    <child.Icon className='w-6 h-6' />
                                    <span>{child.text}</span>
                                  </a>
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='w-32 pointer-events-none' aria-hidden='true' />
          </div>
        </Dialog>
      </Transition>
      <button
        className='fixed z-30 flex items-center justify-center w-12 h-12 text-white transition bg-opacity-50 border border-white rounded-full bg-skin-button-accent border-opacity-20 bottom-2 right-2 md:hidden focus:outline-none focus-visible:ring backdrop-filter backdrop-blur'
        type='button'
        onClick={() => setIsOpen(true)}
      >
        <span className='sr-only'>Open site navigation</span>
        <MenuIcon className='w-6 h-6' />
      </button>
      {/* <button
        className="fixed top-0 z-30 flex items-center justify-center w-12 h-12 text-white transition focus:outline-none focus-visible:ring backdrop-filter backdrop-blur"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open site navigation</span>
        <MenuIcon className="w-6 h-6" />
      </button> */}
    </>
  )
}
