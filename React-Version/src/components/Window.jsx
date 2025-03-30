import { useState, useRef, useEffect } from 'react'
import { useWindow } from '../context/WindowContext'
import { useSoundContext } from '../context/SoundContext'
import MyPC from './windows/MyPC'
import Customize from './windows/Customize'
import Properties from './windows/Properties'
import Profile from './windows/Profile'
import Portfolio from './windows/Portfolio'
import Company from './windows/Company'
import Documents from './windows/Documents'
import RecycleBin from './windows/RecycleBin'

function Window({ id, title, isVisible, zIndex, position, children, width, height, minWidth, minHeight, onClose, type, icon }) {
  const { hideWindow, closeWindow, updateWindowPosition, setActiveWindow } = useWindow()
  const { play } = useSoundContext()
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState(null)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [windowPos, setWindowPos] = useState(position || getCenteredPosition())
  const [windowSize, setWindowSize] = useState({ width: width || 790, height: height || 550 })
  const [isMaximized, setIsMaximized] = useState(false)
  const [previousPos, setPreviousPos] = useState(null)
  const windowRef = useRef(null)

  // Función para obtener la posición en la esquina superior izquierda
  function getCenteredPosition() {
    const topOffset = 10 // Posición base superior
    const leftOffset = 20 // Posición base izquierda
    const randomOffset = Math.floor(Math.random() * 100) + 30 // Offset aleatorio entre 50 y 200 píxeles
    
    return {
      x: leftOffset + randomOffset,
      y: topOffset + randomOffset
    }
  }

  useEffect(() => {
    if (windowRef.current) {
      if (isVisible) {
        windowRef.current.style.display = 'block'
        windowRef.current.style.zIndex = zIndex
      } else {
        windowRef.current.style.display = 'none'
      }
    }
  }, [isVisible, zIndex])

  const handleMouseDown = (e) => {
    if (e.target.closest('.title-bar')) {
      setIsDragging(true)
      setStartPos({
        x: e.clientX - windowPos.x,
        y: e.clientY - windowPos.y
      })
      setActiveWindow(id)
      play('CLICK')
      e.preventDefault()
    } else if (e.target.closest('.resize-handle')) {
      setIsResizing(true)
      const direction = e.target.dataset.direction
      setResizeDirection(direction)
      setStartPos({
        x: e.clientX,
        y: e.clientY
      })
      setActiveWindow(id)
      e.preventDefault()
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newPos = {
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      }
      setWindowPos(newPos)
      updateWindowPosition(id, newPos)
      e.preventDefault()
    } else if (isResizing && resizeDirection) {
      const deltaX = e.clientX - startPos.x
      const deltaY = e.clientY - startPos.y
      
      let newWidth = windowSize.width
      let newHeight = windowSize.height
      
      if (resizeDirection.includes('e')) {
        newWidth = Math.max(minWidth || 790, windowSize.width + deltaX)
      }
      if (resizeDirection.includes('w')) {
        const newX = windowPos.x + deltaX
        const newW = Math.max(minWidth || 790, windowSize.width - deltaX)
        if (newW >= (minWidth || 790)) {
          setWindowPos({ ...windowPos, x: newX })
          newWidth = newW
        }
      }
      if (resizeDirection.includes('s')) {
        newHeight = Math.max(minHeight || 550, windowSize.height + deltaY)
      }
      if (resizeDirection.includes('n')) {
        const newY = windowPos.y + deltaY
        const newH = Math.max(minHeight || 550, windowSize.height - deltaY)
        if (newH >= (minHeight || 550)) {
          setWindowPos({ ...windowPos, y: newY })
          newHeight = newH
        }
      }
      
      setWindowSize({ width: newWidth, height: newHeight })
      setStartPos({ x: e.clientX, y: e.clientY })
      e.preventDefault()
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
    setResizeDirection(null)
  }

  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'none'
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'auto'
    }
  }, [isDragging, isResizing])

  const handleMinimize = () => {
    hideWindow(id)
    play('CLICK')
  }

  const handleMaximize = () => {
    if (!isMaximized) {
      setPreviousPos(windowPos)
      setWindowPos({ x: 0, y: 0 })
      setIsMaximized(true)
      play('CLICK')
    } else {
      setWindowPos(previousPos)
      setIsMaximized(false)
      play('CLICK')
    }
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      closeWindow(id)
    }
    play('CLICK')
  }

  const renderWindowContent = () => {
    switch (id) {
      case 'mypc':
        return <MyPC />
      case 'customize':
        return <Customize />
      case 'properties':
        return <Properties id={id} title={title} icon={icon} type={type} onClose={handleClose} />
      case 'profile':
        return <Profile />
      case 'portfolio':
        return <Portfolio />
      case 'company':
        return <Company />
      case 'documents':
        return <Documents />
      case 'recycle':
        return <RecycleBin />
      default:
        return children || (
          <div className="p-4">
            contenido de {title}
          </div>
        )
    }
  }

  return (
    <>
      {isVisible && (
        <div
          ref={windowRef}
          className={`window ${isMaximized ? 'maximized' : ''}`}
          style={{
            position: 'fixed',
            zIndex: zIndex,
            userSelect: isDragging || isResizing ? 'none' : 'auto',
            width: isMaximized ? '100%' : `${windowSize.width}px`,
            height: isMaximized ? '100%' : `${windowSize.height}px`,
            minWidth: minWidth || '790px',
            minHeight: minHeight || '550px',
            left: isMaximized ? 0 : windowPos.x,
            top: isMaximized ? 0 : windowPos.y,
            opacity: 1,
            transition: 'opacity 0.2s ease-in-out'
          }}
          onMouseDown={handleMouseDown}
        >
          <div 
            className="title-bar"
            style={{
              transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(0, 0, 128)'
              e.currentTarget.style.color = 'rgb(255, 255, 255)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ''
              e.currentTarget.style.color = ''
            }}
          >
            <span className="title-bar-text">{title}</span>
            <div className="title-bar-controls">
              <button 
                onClick={handleMinimize}
                style={{
                  transition: 'transform 0.1s ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              >
                _
              </button>
              <button 
                onClick={handleMaximize}
                style={{
                  transition: 'transform 0.1s ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              >
                □
              </button>
              <button 
                onClick={handleClose}
                style={{
                  transition: 'transform 0.1s ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              >
                ×
              </button>
            </div>
          </div>
          <div 
            className="window-content"
            style={{
              opacity: 1,
              transition: 'opacity 0.1s ease-in-out'
            }}
          >
            {renderWindowContent()}
          </div>
          {!isMaximized && (
            <>
              <div className="resize-handle" data-direction="n" style={{ top: 0, left: 0, right: 0, height: '4px', cursor: 'ns-resize' }} />
              <div className="resize-handle" data-direction="s" style={{ bottom: 0, left: 0, right: 0, height: '4px', cursor: 'ns-resize' }} />
              <div className="resize-handle" data-direction="e" style={{ top: 0, right: 0, bottom: 0, width: '4px', cursor: 'ew-resize' }} />
              <div className="resize-handle" data-direction="w" style={{ top: 0, left: 0, bottom: 0, width: '4px', cursor: 'ew-resize' }} />
              <div className="resize-handle" data-direction="ne" style={{ top: 0, right: 0, width: '4px', height: '4px', cursor: 'nesw-resize' }} />
              <div className="resize-handle" data-direction="nw" style={{ top: 0, left: 0, width: '4px', height: '4px', cursor: 'nwse-resize' }} />
              <div className="resize-handle" data-direction="se" style={{ bottom: 0, right: 0, width: '4px', height: '4px', cursor: 'nwse-resize' }} />
              <div className="resize-handle" data-direction="sw" style={{ bottom: 0, left: 0, width: '4px', height: '4px', cursor: 'nesw-resize' }} />
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Window 