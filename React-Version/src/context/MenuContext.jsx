import { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [openMenus, setOpenMenus] = useState(new Set())

  const openMenuById = (menuId) => {
    setOpenMenus(prev => {
      const newMenus = new Set()
      newMenus.add(menuId)
      return newMenus
    })
  }

  const closeMenu = (menuId) => {
    setOpenMenus(prev => {
      const newMenus = new Set(prev)
      if (menuId) {
        newMenus.delete(menuId)
      } else {
        newMenus.clear()
      }
      return newMenus
    })
  }

  const isMenuOpen = (menuId) => {
    return openMenus.has(menuId)
  }

  const value = {
    openMenus,
    openMenuById,
    closeMenu,
    isMenuOpen
  }

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
} 