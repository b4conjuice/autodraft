import { Menu } from './nav'

const Layout = ({ className, children }) => (
  <div
    className={`flex flex-grow flex-col divide-x divide-skin-foreground md:flex-row ${
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
