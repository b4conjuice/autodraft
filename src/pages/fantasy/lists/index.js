import { useState } from 'react'
import Link from 'next/link'
import { PlusIcon, UserGroupIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Footer from '@/components/footer'
import TeamsDialog from '@/components/teamsDialog'
import { fetchLists } from '@/lib/api'

const Lists = () => {
  const { data: lists } = fetchLists()
  const [teamsDialogIsOpen, setTeamsDialogIsOpen] = useState(false)
  const [selectedTeamId, setSelectedTeamId] = useState(null)
  const selectedTeam = selectedTeamId
    ? lists.find(list => list.id === selectedTeamId).items
    : []
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
                    <div className='flex p-2'>
                      <Link href={`/fantasy/lists/${list.id}`}>
                        <a className='block flex-grow'>{list.title}</a>
                      </Link>
                      <button
                        type='button'
                        onClick={() => {
                          setTeamsDialogIsOpen(true)
                          setSelectedTeamId(list.id)
                        }}
                      >
                        <UserGroupIcon className='h-6 w-6' />
                      </button>
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
      <TeamsDialog
        isOpen={teamsDialogIsOpen}
        setIsOpen={setTeamsDialogIsOpen}
        drafted={[...selectedTeam]}
        teams={12}
      />
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
