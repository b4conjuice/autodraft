import Link from 'next/link'
import { useRouter } from 'next/router'

import Page from '@/components/page'
import Main from '@/components/main'
import EditList from '@/components/editList'
import Footer from '@/components/footer'
import { saveList } from '@/lib/api'
import useForm from '@/lib/useForm'
import nav from '@/lib/nav'

const NewList = () => {
  const { pathname, push } = useRouter()
  const { values, handleChange, handleSubmit, isSubmitting, dirty } = useForm({
    initialValues: {
      title: '',
      items: [''],
    },
    onSubmit: async (
      { title: newTitle, items: newItems },
      { setSubmitting }
    ) => {
      const { id } = await saveList({ title: newTitle, items: newItems })
      push(`/fantasy/lists/${id}`)
      setSubmitting(false)
    },
  })
  return (
    <Page title="new list">
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
        <EditList values={values} handleChange={handleChange} />
      </Main>
      <Footer className="flex justify-center">
        <ul className="inline-flex bg-blue-700 divide-x divide-gray-100 rounded-lg">
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
        </ul>
      </Footer>
    </Page>
  )
}

export default NewList
