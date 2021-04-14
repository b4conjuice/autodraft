import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Page from '@/components/page'
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
                      <a className="text-blue-700 hover:text-blue-600">
                        {text}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <h1 className="text-2xl text-center">{list.error}</h1>
          <Link href="/fantasy/lists">
            <a className="text-center text-blue-700 hover:text-blue-600">
              back to lists
            </a>
          </Link>
        </Main>
      </Page>
    )
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
        {edit ? (
          <EditList values={values} handleChange={handleChange} />
        ) : list ? (
          <>
            <h1 className="text-2xl text-center">{list.title}</h1>
            <ul className="space-y-2">
              {list?.items.map(item => (
                <li
                  key={item}
                  className="p-2 rounded bg-skin-foreground odd:bg-skin-foreground-alt"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Confirm
              className="flex justify-center p-3 text-gray-100 bg-red-700 rounded-lg disabled:opacity-25 disabled:pointer-events-none"
              type="button"
              action={async () => {
                await deleteList(id)
                push('/fantasy/lists')
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </Confirm>
          </>
        ) : list?.items?.length === 0 ? (
          <p>list has no items</p>
        ) : (
          <div className="flex justify-center flex-grow">
            <Loading />
          </div>
        )}
      </Main>
      <Footer className="flex justify-center">
        <ul className="inline-flex bg-blue-700 divide-x divide-gray-100 rounded-lg">
          <li className="flex justify-center">
            <button
              className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
              type="button"
              onClick={() => setEdit(!edit)}
            >
              {edit ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </li>
          {edit && (
            <li className="flex justify-center">
              <button
                className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
                type="submit"
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </Footer>
    </Page>
  )
}

export default List
