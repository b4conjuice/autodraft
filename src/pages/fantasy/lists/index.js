import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Footer from '@/components/footer'
import { fetchLists } from '@/lib/api'

const Lists = () => {
  const { data: lists } = fetchLists()
  return (
    <Page title='lists'>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            {lists ? (
              <ul className='space-y-2'>
                {lists.map(list => (
                  <li
                    key={list.id}
                    className='rounded bg-skin-foreground odd:bg-skin-foreground-alt'
                  >
                    <div className='space-x-1'>
                      <Link href={`/fantasy/lists/${list.id}`}>
                        <a className='block p-2'>{list.title}</a>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : lists?.length === 0 ? (
              <p>no lists</p>
            ) : (
              <div className='flex flex-grow justify-center'>
                <Loading />
              </div>
            )}
          </div>
        </Main>
      </Layout>
      <Footer className='flex justify-center'>
        <ul className='inline-flex divide-x divide-gray-100 rounded-lg bg-skin-button-accent'>
          <li className='flex justify-center'>
            <Link href='/fantasy/lists/new'>
              <a className='p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'>
                <PlusIcon className='h-6 w-6' />
              </a>
            </Link>
          </li>
        </ul>
      </Footer>
    </Page>
  )
}

export default Lists
