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
        <Main className='space-y-2 px-2 md:px-0'>
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
              className='group focus:outline-none cursor-pointer rounded border-none bg-blue-900 p-0'
              onClick={() => console.log('click me')}
            >
              <span className='block translate-y-[-4px] transform rounded bg-blue-600 px-2 py-1 text-lg text-gray-100 group-active:translate-y-[-2px]'>
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
