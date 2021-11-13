import { Menu } from './nav'

const Layout = ({ className, children }) => (
  <div
    className={`flex flex-col md:flex-row flex-grow divide-x divide-skin-foreground ${
      className ?? ''
    }`}
  >
    <div className='hidden p-4 md:block'>
      <Menu />
    </div>
    {children}
  </div>
)
export default Layout
