import '../index.css'
import { SideNav } from '@/components/nav'
import { ThemeProvider } from '@/lib/useTheme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
    <SideNav />
  </ThemeProvider>
)

export default App
