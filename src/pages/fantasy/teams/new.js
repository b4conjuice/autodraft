import { useRouter } from 'next/router'
import { SaveIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import EditTeam from '@/components/editTeam'
import Footer from '@/components/footer'
import useEditTeam from '@/lib/useEditTeam'
import { saveTeam } from '@/lib/api'

const NewTeam = () => {
  const { push } = useRouter()
  const { values, handleChange, handleSubmit, isSubmitting, dirty, errors } =
    useEditTeam({
      onSubmit: async (newTeam, { setSubmitting }) => {
        const slots = [...Array(newTeam.rounds).keys()]
          .map(x => x)
          .map(slot => newTeam.slots[slot] || 'B')
        const { id } = await saveTeam({
          ...newTeam,
          slots,
        })
        push(`/fantasy/teams/${id}`)
        setSubmitting(false)
      },
    })
  return (
    <Page title='new team'>
      <Layout>
        <Main className='px-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <EditTeam
              values={values}
              handleChange={handleChange}
              errors={errors}
            />
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

export default NewTeam
