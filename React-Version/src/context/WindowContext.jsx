import { createContext, useContext, useState } from 'react'

const WindowContext = createContext()

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState(new Map())
  const [activeWindow, setActiveWindow] = useState(null)
  const [zIndex, setZIndex] = useState(10)

  const showWindow = (windowId, title) => {
    setWindows(prev => {
      const newWindows = new Map(prev)
      if (!newWindows.has(windowId)) {
        newWindows.set(windowId, {
          id: windowId,
          title,
          isVisible: true,
          zIndex: zIndex
        })
        setZIndex(prev => prev + 1)
      } else {
        const window = newWindows.get(windowId)
        window.isVisible = true
        window.zIndex = zIndex
        setZIndex(prev => prev + 1)
      }
      return newWindows
    })
    setActiveWindow(windowId)
  }

  const hideWindow = (windowId) => {
    setWindows(prev => {
      const newWindows = new Map(prev)
      if (newWindows.has(windowId)) {
        const window = newWindows.get(windowId)
        window.isVisible = false
      }
      return newWindows
    })
  }

  const closeWindow = (windowId) => {
    setWindows(prev => {
      const newWindows = new Map(prev)
      newWindows.delete(windowId)
      return newWindows
    })
    if (activeWindow === windowId) {
      setActiveWindow(null)
    }
  }

  const updateWindowPosition = (windowId, position) => {
    setWindows(prev => {
      const newWindows = new Map(prev)
      if (newWindows.has(windowId)) {
        const window = newWindows.get(windowId)
        window.position = position
      }
      return newWindows
    })
  }

  const maximizeWindow = (windowId) => {
    setWindows(prev => {
      const newWindows = new Map(prev)
      if (newWindows.has(windowId)) {
        const window = newWindows.get(windowId)
        window.isMaximized = !window.isMaximized
      }
      return newWindows
    })
  }

  const value = {
    windows,
    activeWindow,
    showWindow,
    hideWindow,
    closeWindow,
    maximizeWindow,
    updateWindowPosition,
    setActiveWindow
  }

  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  )
}

export function useWindow() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindow must be used within a WindowProvider')
  }
  return context
} 