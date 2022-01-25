import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  XIcon,
  PencilAltIcon,
  SaveIcon,
  TrashIcon,
} from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Loading from '@/components/loading'
import EditList from '@/components/editList'
import Confirm from '@/components/confirm'
import Footer from '@/components/footer'
import { fetchLists, updateList, deleteList } from '@/lib/api'
import useForm from '@/lib/useForm'

const List = () => {
  const { query, push } = useRouter()
  const { id } = query
  const [edit, setEdit] = useState(false)
  const { data: list, revalidate } = fetchLists(id)
  const { values, handleChange, handleSubmit, isSubmitting, dirty } = useForm({
    initialValues: list,
    onSubmit: async (
      { title: newTitle, items: newItems },
      { setSubmitting }
    ) => {
      await updateList({ id, title: newTitle, items: newItems })
      await revalidate()
      setSubmitting(false)
      setEdit(!edit)
    },
  })
  if (list?.error)
    return (
      <Page title='lists'>
        <Layout>
          <Main className='px-2 md:px-0'>
            <div className='mx-auto space-y-2 md:max-w-screen-md'>
              <h1 className='text-center text-2xl'>{list.error}</h1>
              <Link href='/fantasy/lists'>
                <a className='text-center text-skin-link-accent hover:text-skin-link-accent-hover'>
                  back to lists
                </a>
              </Link>
            </div>
          </Main>
        </Layout>
      </Page>
    )
  return (
    <Page title='lists'>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            {edit ? (
              <EditList values={values} handleChange={handleChange} />
            ) : list ? (
              <>
                <h1 className='text-center text-2xl'>{list.title}</h1>
                <ul className='space-y-2'>
                  {list?.items.map(item => (
                    <li
                      key={item}
                      className='rounded bg-skin-foreground p-2 odd:bg-skin-foreground-alt'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Confirm
                  className='flex w-full justify-center rounded-lg bg-red-700 p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'
                  type='button'
                  action={async () => {
                    await deleteList(id)
                    push('/fantasy/lists')
                  }}
                >
                  <TrashIcon className='h-6 w-6' />
                </Confirm>
              </>
            ) : list?.items?.length === 0 ? (
              <p>list has no items</p>
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
            <button
              className='p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'
              type='button'
              onClick={() => setEdit(!edit)}
            >
              {edit ? (
                <XIcon className='h-6 w-6' />
              ) : (
                <PencilAltIcon className='h-6 w-6' />
              )}
            </button>
          </li>
          {edit && (
            <li className='flex justify-center'>
              <button
                className='p-3 text-gray-100 disabled:pointer-events-none disabled:opacity-25'
                type='submit'
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                <SaveIcon className='h-6 w-6' />
              </button>
            </li>
          )}
        </ul>
      </Footer>
    </Page>
  )
}

export default List
