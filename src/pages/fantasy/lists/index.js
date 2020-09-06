import Link from 'next/link'
import { useRouter } from 'next/router'

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
    <Page title="lists">
      <Main className="flex flex-col px-2 space-y-2">
        <nav className="px-2 text-md">
          <ul className="flex justify-center space-x-3">
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
                    <a className="text-blue-700 hover:text-blue-600">{text}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {lists ? (
          <ul className="space-y-2">
            {lists.map(list => (
              <li key={list.id} className="bg-gray-300 rounded odd:bg-gray-400">
                <div className="space-x-1">
                  <Link
                    href="/fantasy/lists/[id]"
                    as={`/fantasy/lists/${list.id}`}
                  >
                    <a className="block p-2">{list.title}</a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : lists?.length === 0 ? (
          <p>no lists</p>
        ) : (
          <div className="flex justify-center flex-grow">
            <Loading />
          </div>
        )}
      </Main>
      <Footer className="flex justify-center">
        <ul className="inline-flex bg-blue-700 divide-x divide-gray-100 rounded-lg">
          <li className="flex justify-center">
            <Link href="/fantasy/lists/new">
              <a className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Lists
