import { Menu } from './nav'
import TodaysGames from './todaysGames'

const Layout = ({ className, todaysGames = true, children }) => (
  <div
    className={`flex flex-col md:flex-row flex-grow divide-x divide-skin-foreground ${
      className ?? ''
    }`}
  >
    <div className='hidden p-4 md:block'>
      <Menu />
    </div>
    {children}
    {todaysGames && (
      <div className='hidden p-4 md:block'>
        <TodaysGames />
      </div>
    )}
  </div>
)
export default Layout
