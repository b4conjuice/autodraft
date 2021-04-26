import Link from 'next/link'
import { useRouter } from 'next/router'
import { PlusIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Footer from '@/components/footer'
import { fetchLists } from '@/lib/api'
import nav from '@/lib/nav'

const Lists = () => {
  const { pathname } = useRouter()
  const { data: lists } = fetchLists()
  return (
    <Page title='lists'>
      <Main className='px-2 md:px-0'>
        <div className='mx-auto space-y-2 md:max-w-screen-md'>
          <nav className='px-2 text-md'>
            <ul className='flex justify-center space-x-3'>
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
                      <a className='text-skin-link-accent hover:text-skin-link-accent-hover'>
                        {text}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {lists ? (
            <ul className='space-y-2'>
              {lists.map(list => (
                <li
                  key={list.id}
                  className='rounded bg-skin-foreground odd:bg-skin-foreground-alt'
                >
                  <div className='space-x-1'>
                    <Link
                      href='/fantasy/lists/[id]'
                      as={`/fantasy/lists/${list.id}`}
                    >
                      <a className='block p-2'>{list.title}</a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : lists?.length === 0 ? (
            <p>no lists</p>
          ) : (
            <div className='flex justify-center flex-grow'>
              <Loading />
            </div>
          )}
        </div>
      </Main>
      <Footer className='flex justify-center'>
        <ul className='inline-flex divide-x divide-gray-100 rounded-lg bg-skin-button-accent'>
          <li className='flex justify-center'>
            <Link href='/fantasy/lists/new'>
              <a className='p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none'>
                <PlusIcon className='w-6 h-6' />
              </a>
            </Link>
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Lists
