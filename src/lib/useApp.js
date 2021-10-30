import { ThemeProvider } from '@/lib/useTheme'

export const AppProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
