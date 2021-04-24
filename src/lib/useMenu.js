import { createContext, useState, useContext } from 'react'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <MenuContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
