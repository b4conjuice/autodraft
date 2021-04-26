import Link from 'next/link'
import { useRouter } from 'next/router'
import { SaveIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Main from '@/components/main'
import Footer from '@/components/footer'
import { saveTeam } from '@/lib/api'
import useForm from '@/lib/useForm'
import nav from '@/lib/nav'

const EditTeam = ({ values, handleChange }) => {
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
  const { pathname, push } = useRouter()
  const { values, handleChange, handleSubmit, isSubmitting, dirty } = useForm({
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
      const { id } = await saveTeam(newTeam)
      push(`/fantasy/teams/${id}`)
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
          <EditTeam values={values} handleChange={handleChange} />
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
