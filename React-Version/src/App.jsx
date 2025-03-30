import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import StartupScreen from './components/StartupScreen'
import ShutdownScreen from './components/ShutdownScreen'
import { WindowProvider } from './context/WindowContext'
import { SoundProvider } from './context/SoundContext'
import { MenuProvider } from './context/MenuContext'
import { RecycleBinProvider } from './context/RecycleBinContext'

function App() {
  const [isStarting, setIsStarting] = useState(true)
  const [isShuttingDown, setIsShuttingDown] = useState(false)

  const handleStartupComplete = () => {
    setIsStarting(false)
  }

  const handleShutdownComplete = () => {
    setIsShuttingDown(false)
    window.location.reload()
  }

  const renderMainContent = () => {
    if (isStarting) {
      return <StartupScreen onStartupComplete={handleStartupComplete} />
    }

    if (isShuttingDown) {
      return <ShutdownScreen onShutdownComplete={handleShutdownComplete} />
    }

    return (
      <>
        <Desktop />
        <Taskbar onShutdown={() => setIsShuttingDown(true)} />
      </>
    )
  }

  return (
    <MenuProvider>
      <SoundProvider>
        <WindowProvider>
          <RecycleBinProvider>
            <div className="flex flex-col h-screen">
              <Routes>
                <Route path="/" element={renderMainContent()} />
                {/* Aquí puedes agregar más rutas según sea necesario */}
              </Routes>
            </div>
          </RecycleBinProvider>
        </WindowProvider>
      </SoundProvider>
    </MenuProvider>
  )
}

export default App 