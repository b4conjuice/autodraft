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
import nav from '@/lib/nav'

const List = () => {
  const { pathname, query, push } = useRouter()
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
              <nav className='px-2 text-md'>
                <ul className='flex justify-center space-x-3'>
                  {nav.map(({ url, text }) => (
                    <li
                      key={url}
                      className={
                        pathname.includes(url)
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
              <h1 className='text-2xl text-center'>{list.error}</h1>
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
            {edit ? (
              <EditList values={values} handleChange={handleChange} />
            ) : list ? (
              <>
                <h1 className='text-2xl text-center'>{list.title}</h1>
                <ul className='space-y-2'>
                  {list?.items.map(item => (
                    <li
                      key={item}
                      className='p-2 rounded bg-skin-foreground odd:bg-skin-foreground-alt'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Confirm
                  className='flex justify-center w-full p-3 text-gray-100 bg-red-700 rounded-lg disabled:opacity-25 disabled:pointer-events-none'
                  type='button'
                  action={async () => {
                    await deleteList(id)
                    push('/fantasy/lists')
                  }}
                >
                  <TrashIcon className='w-6 h-6' />
                </Confirm>
              </>
            ) : list?.items?.length === 0 ? (
              <p>list has no items</p>
            ) : (
              <div className='flex justify-center flex-grow'>
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
              className='p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none'
              type='button'
              onClick={() => setEdit(!edit)}
            >
              {edit ? (
                <XIcon className='w-6 h-6' />
              ) : (
                <PencilAltIcon className='w-6 h-6' />
              )}
            </button>
          </li>
          {edit && (
            <li className='flex justify-center'>
              <button
                className='p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none'
                type='submit'
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                <SaveIcon className='w-6 h-6' />
              </button>
            </li>
          )}
        </ul>
      </Footer>
    </Page>
  )
}

export default List
