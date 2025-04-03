import { useState, useEffect, useRef } from 'react'
import { useWindow } from '../context/WindowContext'
import { useSoundContext } from '../context/SoundContext'
import { useMenu } from '../context/MenuContext'
import {
  logoInicio,
  miPc,
  misDocumentos,
  profile,
  webrush,
  apagar,
  proyectos,
  defaultFile
} from '../assets/images'

function Taskbar({ onShutdown }) {
  const { windows, activeWindow, showWindow, hideWindow, closeWindow } = useWindow()
  const { play } = useSoundContext()
  const { isMenuOpen, openMenuById, closeMenu } = useMenu()
  const [time, setTime] = useState('')
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0, windowId: null })
  const startMenuRef = useRef(null)
  const startButtonRef = useRef(null)
  const contextMenuRef = useRef(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen('start') &&
        startMenuRef.current &&
        startButtonRef.current &&
        !startMenuRef.current.contains(event.target) &&
        !startButtonRef.current.contains(event.target)
      ) {
        closeMenu()
      }
      
      if (contextMenu.show && contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setContextMenu({ show: false, x: 0, y: 0, windowId: null })
      }
    }

    const handleContextMenu = (event) => {
      if (
        isMenuOpen('start') &&
        startMenuRef.current &&
        startButtonRef.current &&
        !startMenuRef.current.contains(event.target) &&
        !startButtonRef.current.contains(event.target)
      ) {
        event.preventDefault()
        closeMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('contextmenu', handleContextMenu)
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [isMenuOpen, closeMenu, contextMenu.show])

  const handleStartClick = (e) => {
    e.stopPropagation()
    if (isMenuOpen('start')) {
      closeMenu()
    } else {
      openMenuById('start')
    }
    play('CLICK')
  }

  const handleWindowClick = (windowId) => {
    const window = windows.get(windowId)
    if (window.isVisible) {
      hideWindow(windowId)
    } else {
      showWindow(windowId, window.title)
    }
    play('CLICK')
  }

  const handleShutdown = () => {
    play('SHUTDOWN')
    closeMenu()
    onShutdown()
  }

  const handleTaskbarItemContextMenu = (e, windowId) => {
    e.preventDefault()
    e.stopPropagation()
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY - 60,
      windowId
    })
    play('CLICK')
  }

  const handleContextMenuAction = (action) => {
    const { windowId } = contextMenu
    switch (action) {
      case 'minimize':
        hideWindow(windowId)
        break
      case 'close':
        closeWindow(windowId)
        break
    }
    setContextMenu({ show: false, x: 0, y: 0, windowId: null })
    play('CLICK')
  }

  return (
    <div className="taskbar">
      {/* Botón de inicio */}
      <div
        ref={startButtonRef}
        className={`start-button ${isMenuOpen('start') ? 'active' : ''}`}
        onClick={handleStartClick}
      >
        <img src={logoInicio} alt="Start" className="w-5 h-5 mr-1" />
        <span className="start-text">Inicio</span>
      </div>

      {/* Separador */}
      <div className="taskbar-divider" />

      {/* Ventanas abiertas */}
      <div className="taskbar-items flex-1 flex items-center gap-1">
        {Array.from(windows.values()).map(window => (
          <div
            key={window.id}
            className={`taskbar-item ${activeWindow === window.id ? 'active' : ''}`}
            onClick={() => handleWindowClick(window.id)}
            onContextMenu={(e) => handleTaskbarItemContextMenu(e, window.id)}
          >
            <img src={defaultFile} alt={window.title} className="w-4 h-4 mr-1" />
            <span>{window.title}</span>
          </div>
        ))}
      </div>

      {/* Reloj */}
      <div className="taskbar-time px-2 py-1 border border-[#808080] border-r-white border-b-white bg-[#c0c0c0] text-xs">
        {time}
      </div>

      {/* Menú inicio */}
      {isMenuOpen('start') && (
        <div 
          ref={startMenuRef}
          className="start-menu fixed bottom-7 left-0 w-48 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-lg"
          onClick={(e) => e.stopPropagation()}
          onContextMenu={(e) => e.stopPropagation()}
        >
          <div className="start-menu-header bg-[#000080] text-white p-1 text-sm font-bold">
            <span>Windows 98</span>
          </div>
          <div className="start-menu-items p-1">
            <div className="start-menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => showWindow('profile', 'Mi Perfil')}>
              <img src={profile} alt="Mi Perfil" className="w-4 h-4" />
              <span>Mi Perfil</span>
            </div>
            <div className="start-menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => showWindow('portfolio', 'Portafolio')}>
              <img src={proyectos} alt="Portafolio" className="w-4 h-4" />
              <span>Portafolio</span>
            </div>
            <div className="start-menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => showWindow('company', 'Webrush')}>
              <img src={webrush} alt="Webrush" className="w-4 h-4" />
              <span>Webrush</span>
            </div>
            <div className="start-menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => showWindow('mypc', 'Mi PC')}>
              <img src={miPc} alt="Mi PC" className="w-4 h-4" />
              <span>Mi PC</span>
            </div>
            <div className="start-menu-item flex items-center justify-between p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => showWindow('documents', 'Mis Documentos')}>
              <div className="flex items-center gap-2">
                <img src={misDocumentos} alt="Mis Documentos" className="w-4 h-4" />
                <span>Mis Documentos</span>
              </div>
              <span className="text-xs">▶</span>
            </div>
            <div className="h-px bg-[#808080] my-1" />
            <div className="start-menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={handleShutdown}>
              <img src={apagar} alt="Apagar" className="w-4 h-4" />
              <span>Apagar</span>
            </div>
          </div>
        </div>
      )}

      {/* Menú contextual */}
      {contextMenu.show && (
        <div
          ref={contextMenuRef}
          className="context-menu fixed bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-lg z-50"
          style={{
            left: contextMenu.x,
            top: contextMenu.y,
            minWidth: '120px'
          }}
        >
          <div className="context-menu-item px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => handleContextMenuAction('minimize')}>
            Minimizar
          </div>
          <div className="context-menu-item px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => handleContextMenuAction('close')}>
            Cerrar
          </div>
        </div>
      )}
    </div>
  )
}

export default Taskbar 