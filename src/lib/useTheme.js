import { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(global.window?.__theme || 'theme-light')
  const updateTheme = newTheme => {
    global.window.__setPreferredTheme(newTheme)
  }
  useEffect(() => {
    global.window.__onThemeChange = setTheme
  }, [])
  return (
    <ThemeContext.Provider value={[theme, updateTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
