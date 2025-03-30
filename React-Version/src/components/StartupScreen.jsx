import { useState, useEffect, useRef } from 'react'
import { useSoundContext } from '../context/SoundContext'
import { motion, AnimatePresence } from 'framer-motion'
import energyStarLogo from '../assets/images/energy-star.png'
import bootImg from '../assets/images/background.jpg'

function StartupScreen({ onStartupComplete }) {
  const [stage, setStage] = useState('bios')
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState([])
  const { play } = useSoundContext()
  const progressRef = useRef(null)

  const biosLines = [
    'Phoenix - AwardBIOS v6.00PG, An Energy Star Ally',
    'Copyright (C) 1984-1995, Phoenix Technologies, LTD',
    'ASUS A8N-SLI Premium ACPI BIOS Revision 1023-002',
    'Main Processor : AMD Athlon(tm) 64 Processor 7000+',
    'Memory Testing : 16384K OK (Installed Memory)',
    'Chipset Model : nForce 9',
    'Primary IDE Master : WDC WD2500J-22HC 6.00.100',
    'Primary IDE Slave : Media Error',
    'Secondary IDE Master : None',
    'Secondary IDE Slave : Media Error',
    'Error 0211: Keyboard not found',
    'Error 0242: Battery Failure',
    'Error 0201: Primary Slave Hard Disc Error',
    '',
    'Press F1 to continue, DEL to enter SETUP',
    '12/08/1995-NF-CK804-A8NSLI-P-00',
    'Loading Operating System...'
  ]

  useEffect(() => {
    // Mostrar líneas de la BIOS una por una
    const showNextLine = (index) => {
      if (index < biosLines.length) {
        setVisibleLines(prev => [...prev, index])
        const randomDelay = Math.floor(Math.random() * 71) + 30
        setTimeout(() => showNextLine(index + 1), randomDelay)
      }
    }

    showNextLine(0)

    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 0.5
      })
    }, 20)

    // Cambiar a la pantalla de Windows después de la carga
    const timer = setTimeout(() => {
      setStage('windows')
      play('STARTUP')
    }, 4000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (stage === 'windows') {
      const timer = setTimeout(() => {
        onStartupComplete()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [stage])

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        {stage === 'bios' ? (
          <motion.div 
            key="bios"
            className="h-full flex flex-col p-5 text-white font-mono text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-7xl mx-auto w-full relative">
              <div className="mb-5">
                {biosLines.slice(0, 3).map((line, index) => (
                  <motion.div
                    key={index}
                    className="mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>

              <div className="mb-5">
                {biosLines.slice(3, -2).map((line, index) => (
                  <motion.div
                    key={index + 3}
                    className={`mb-2 ${line.includes('Error') ? 'text-red-500' : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visibleLines.includes(index + 3) ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>

              <div className="absolute top-5 right-5 w-48 text-right">
                <img 
                  src={energyStarLogo}
                  alt="Energy Star Logo" 
                  className="w-full h-auto mb-2"
                />
              </div>

              <div className="mt-5">
                {biosLines.slice(-2).map((line, index) => (
                  <motion.div
                    key={index + biosLines.length - 2}
                    className="mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visibleLines.includes(index + biosLines.length - 2) ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    {line}
                  </motion.div>
                ))}
                <div className="w-full h-0.5 bg-white mt-2 relative">
                  <motion.div
                    ref={progressRef}
                    className="absolute top-0 left-0 h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="windows"
            className="h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img 
              src={bootImg} 
              alt="Windows 95" 
              className="w-full h-full object-contain"
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default StartupScreen 