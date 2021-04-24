import { ThemeProvider } from '@/lib/useTheme'
import { MenuProvider } from '@/lib/useMenu'

export const AppProvider = ({ children }) => (
  <ThemeProvider>
    <MenuProvider>{children}</MenuProvider>
  </ThemeProvider>
)
