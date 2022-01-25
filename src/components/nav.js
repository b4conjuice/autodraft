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
  TableIcon,
} from '@heroicons/react/solid'

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
      {
        url: '/fantasy/scoreboard',
        text: 'scoreboard',
        Icon: TableIcon,
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

export const Menu = () => {
  const { pathname } = useRouter()
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
                <Icon className='h-6 w-6' />
                <span>{text}</span>
              </span>
            ) : (
              <Link href={url}>
                <a
                  className={`flex items-center space-x-2 hover:text-skin-link-accent-hover ${
                    pathname.includes(url) ? '' : 'text-skin-link-accent'
                  }`}
                >
                  <Icon className='h-6 w-6' />
                  <span>{text}</span>
                </a>
              </Link>
            )}
            {children && (
              <ul className='mt-3 ml-4 space-y-3'>
                {children.map(child => (
                  <li key={child.url}>
                    {pathname === child.url ? (
                      <span className='flex items-center space-x-2'>
                        <child.Icon className='h-6 w-6' />
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
                          <child.Icon className='h-6 w-6' />
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
          className='fixed inset-0 z-40 overflow-hidden text-xl text-skin-base md:hidden'
          initialFocus={closeButtonRef}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Overlay
            className={`absolute inset-0 ${
              isOpen
                ? 'bg-skin-background bg-opacity-50 backdrop-blur backdrop-filter'
                : ''
            }`}
          >
            <button
              ref={closeButtonRef}
              className='focus:outline-none fixed bottom-2 right-2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white border-opacity-20 bg-skin-button-accent bg-opacity-50 text-white backdrop-blur backdrop-filter transition focus-visible:ring md:hidden'
              type='button'
              onClick={() => setIsOpen(false)}
            >
              <span className='sr-only'>Close site navigation</span>
              <XIcon className='h-6 w-6' />
            </button>
          </Dialog.Overlay>
          <div className='pointer-events-none absolute inset-0 z-40 flex'>
            <div className='firefox:bg-opacity-90 pointer-events-auto min-w-0 max-w-sm flex-1 border-r border-white border-opacity-10 bg-skin-background bg-opacity-75 backdrop-blur backdrop-filter'>
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
                          <Icon className='h-6 w-6' />
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
                            <Icon className='h-6 w-6' />
                            <span>{text}</span>
                          </a>
                        </Link>
                      )}
                      {children && (
                        <ul className='mt-3 ml-4 space-y-3'>
                          {children.map(child => (
                            <li key={child.url}>
                              {pathname === child.url ? (
                                <span className='flex items-center space-x-2'>
                                  <child.Icon className='h-6 w-6' />
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
                                    <child.Icon className='h-6 w-6' />
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
            <div className='pointer-events-none w-32' aria-hidden='true' />
          </div>
        </Dialog>
      </Transition>
      <button
        className='focus:outline-none fixed bottom-2 right-2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white border-opacity-20 bg-skin-button-accent bg-opacity-50 text-white backdrop-blur backdrop-filter transition focus-visible:ring md:hidden'
        type='button'
        onClick={() => setIsOpen(true)}
      >
        <span className='sr-only'>Open site navigation</span>
        <MenuIcon className='h-6 w-6' />
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
