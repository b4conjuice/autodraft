import { Menu } from './nav'

const Layout = ({ className, children }) => (
  <div className={`flex flex-grow ${className}`}>
    <Menu />
    {children}
  </div>
)
export default Layout
