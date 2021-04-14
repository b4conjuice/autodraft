import '../index.css'
import { ThemeProvider } from '@/lib/useTheme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
