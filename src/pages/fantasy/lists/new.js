import { useRouter } from 'next/router'
import { SaveIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import EditList from '@/components/editList'
import Footer from '@/components/footer'
import { saveList } from '@/lib/api'
import useForm from '@/lib/useForm'

const NewList = () => {
  const { push } = useRouter()
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
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <EditList values={values} handleChange={handleChange} />
          </div>
        </Main>
      </Layout>
      <Footer className='flex justify-center'>
        <ul className='inline-flex divide-x divide-gray-100 rounded-lg bg-skin-button-accent'>
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
        </ul>
      </Footer>
    </Page>
  )
}

export default NewList
