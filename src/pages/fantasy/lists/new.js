import Link from 'next/link'
import { useRouter } from 'next/router'
import { SaveIcon } from '@heroicons/react/solid'

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
    <Page title='new list'>
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
          <EditList values={values} handleChange={handleChange} />
        </div>
      </Main>
      <Footer className='flex justify-center'>
        <ul className='inline-flex divide-x divide-gray-100 rounded-lg bg-skin-button-accent'>
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
        </ul>
      </Footer>
    </Page>
  )
}

export default NewList
