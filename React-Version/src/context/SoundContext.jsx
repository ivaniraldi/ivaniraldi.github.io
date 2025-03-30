import { createContext, useContext, useState, useEffect } from 'react'
import useSound from 'use-sound'

const SoundContext = createContext()

const SOUNDS = {
  CLICK: '/src/assets/sounds/click.mp3',
  STARTUP: '/src/assets/sounds/startup.mp3',
  SHUTDOWN: '/src/assets/sounds/shutdown.mp3'
}

export function SoundProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false)
  const [playClick] = useSound(SOUNDS.CLICK, { volume: 0.5 })
  const [playStartup] = useSound(SOUNDS.STARTUP, { volume: 0.5 })
  const [playShutdown] = useSound(SOUNDS.SHUTDOWN, { volume: 0.5 })

  useEffect(() => {
    if (!isMuted) {
      playStartup()
    }
  }, [])

  const play = (sound) => {
    if (!isMuted) {
      switch (sound) {
        case 'CLICK':
          playClick()
          break
        case 'STARTUP':
          playStartup()
          break
        case 'SHUTDOWN':
          playShutdown()
          break
        default:
          console.warn('Sonido no encontrado:', sound)
      }
    }
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
  }

  const value = {
    isMuted,
    play,
    toggleMute
  }

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  )
}

export function useSoundContext() {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider')
  }
  return context
} 