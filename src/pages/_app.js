import '../index.css'
import { SideNav } from '@/components/nav'
import { AppProvider } from '@/lib/useApp'

const App = ({ Component, pageProps }) => (
  <AppProvider>
    <Component {...pageProps} />
    <SideNav />
  </AppProvider>
)

export default App
