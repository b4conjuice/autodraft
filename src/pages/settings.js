import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import { useTheme } from '@/lib/useTheme'

const themes = [
  {
    name: 'light',
    value: 'theme-light',
  },
  {
    name: 'dark',
    value: 'theme-dark',
  },
]

const Settings = () => {
  const [theme, setTheme] = useTheme()
  return (
    <Page>
      <Layout>
        <Main className='px-2 space-y-2 md:px-0'>
          <div className='mx-auto space-y-2 md:max-w-screen-md'>
            <label htmlFor='theme'>
              <span>theme</span>
              <select
                className='w-full'
                onChange={e => setTheme(e.target.value)}
                value={theme}
              >
                {themes.map(({ name, value }) => (
                  <option key={value} value={value}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <button
              type='button'
              className='p-0 bg-blue-900 border-none rounded cursor-pointer group focus:outline-none'
              onClick={() => console.log('click me')}
            >
              <span className='block px-2 py-1 text-gray-100 transform translate-y-[-4px] bg-blue-600 rounded group-active:translate-y-[-2px] text-lg'>
                save
              </span>
            </button>
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default Settings
