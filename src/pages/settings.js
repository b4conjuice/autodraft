import Page from '@/components/page'
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
      <Main className="px-2">
        <label htmlFor="theme">
          <span>theme</span>
          <select
            className="w-full"
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
      </Main>
    </Page>
  )
}

export default Settings
