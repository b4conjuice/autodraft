import { useRouter } from 'next/router'
import { SaveIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Footer from '@/components/footer'
import { saveTeam } from '@/lib/api'
import useForm from '@/lib/useForm'

const EditTeam = ({ values, handleChange, errors }) => {
  const { name, teams, rounds, order, slots, ir } = values
  return (
    <form className='space-y-2'>
      <input
        placeholder='name'
        className='w-full text-center form-input'
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
      />
      {errors.name && <div className='text-red-700'>{errors.name}</div>}
      <div className='flex space-x-2'>
        <div className='w-1/2 space-y-2'>
          <h2>league settings</h2>
          <label htmlFor='teams'>
            <span>teams</span>
            <input
              className='w-full form-input'
              type='number'
              name='teams'
              value={teams}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='rounds'>
            <span>rounds</span>
            <input
              className='w-full form-input'
              type='number'
              name='rounds'
              value={rounds}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='order'>
            <span>order</span>
            <input
              className='w-full form-input'
              type='number'
              name='order'
              value={order}
              min='1'
              max={rounds}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='ir'>
            <span>ir</span>
            <input
              className='w-full form-input'
              type='number'
              name='ir'
              value={ir}
              min='1'
              max='4'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='w-1/2'>
          <h2>slots</h2>
          {[...Array(rounds).keys()]
            .map(x => x)
            .map(slot => (
              <div key={slot}>
                <label htmlFor={`slots-${slot}`}>
                  {slot + 1}.
                  <select
                    className='w-full form-select'
                    name={`slots-${slot}`}
                    value={slots[slot] || 'B'}
                    onChange={handleChange}
                  >
                    {['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F', 'U', 'B'].map(
                      option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </div>
            ))}
        </div>
      </div>
    </form>
  )
}

const NewList = () => {
  const { push } = useRouter()
  const { values, handleChange, handleSubmit, isSubmitting, dirty, errors } =
    useForm({
      initialValues: {
        name: '',
        teams: 12,
        rounds: 13,
        order: 1,
        slots: [
          'PG',
          'SG',
          'SF',
          'PF',
          'C',
          'G',
          'F',
          'U',
          'U',
          'U',
          'B',
          'B',
          'B',
        ],
        ir: 1,
      },
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
      validate: newValues => {
        const newErrors = {}
        const { name } = newValues
        if (name === '') newErrors.name = 'name cannot be empty'
        return newErrors
      },
    })
  return (
    <Page title='new list'>
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
