import { useEffect } from 'react'
import { useSoundContext } from '../context/SoundContext'
import { motion } from 'framer-motion'
import { energyStar } from '../assets/images'

function ShutdownScreen({ onShutdownComplete }) {
  const { play } = useSoundContext()

  useEffect(() => {
    play('SHUTDOWN')
    
    const timer = setTimeout(() => {
      onShutdownComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full flex items-center justify-center">
        <motion.div 
          className="text-center text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img 
              src={energyStar} 
              alt="Energy Star" 
              className="w-32 h-32 mb-4"
            />
            <motion.div 
              className="text-xl font-bold mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Es seguro apagar el equipo
            </motion.div>
            <motion.div 
              className="text-sm text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Ha terminado de cerrar Windows 95
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ShutdownScreen 