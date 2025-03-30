import { useState } from 'react'
import { useWindow } from '../context/WindowContext'
import { useSoundContext } from '../context/SoundContext'
import { useMenu } from '../context/MenuContext'
import { useRecycleBin } from '../context/RecycleBinContext'
import ContextMenu from './ContextMenu'
import Properties from './windows/Properties'

function Icon({ id, title, icon, windowId, type = 'Acceso directo' }) {
  const { showWindow } = useWindow()
  const { play } = useSoundContext()
  const { openMenuById, isMenuOpen } = useMenu()
  const { files, emptyRecycleBin } = useRecycleBin()
  const [contextMenuPos, setContextMenuPos] = useState(null)
  const [isRenaming, setIsRenaming] = useState(false)
  const [newName, setNewName] = useState(title)
  const [isCopied, setIsCopied] = useState(false)
  const [showProperties, setShowProperties] = useState(false)

  const handleClick = (e) => {
    if (e.button === 0) { // Click izquierdo
      play('CLICK')
      showWindow(windowId, title)
    } else if (e.button === 2) { // Click derecho
      e.preventDefault()
      e.stopPropagation() // Evita que el evento se propague al escritorio
      setContextMenuPos({ x: e.clientX, y: e.clientY })
      openMenuById(`icon-${id}`)
    }
  }

  const handleRename = () => {
    setIsRenaming(true)
  }

  const handleRenameSubmit = (e) => {
    if (e.key === 'Enter') {
      setIsRenaming(false)
      // Aquí implementarías la lógica para cambiar el nombre
    }
  }

  const handleCopy = () => {
    setIsCopied(true)
    // Aquí implementarías la lógica para copiar
  }

  const handlePaste = () => {
    if (isCopied) {
      // Aquí implementarías la lógica para pegar
      setIsCopied(false)
    }
  }

  const handleCreateShortcut = () => {
    // Aquí implementarías la lógica para crear acceso directo
  }

  const handleProperties = () => {
    setShowProperties(true)
    showWindow('properties', `Propiedades de ${title}`, { type: 'properties', icon, title })
  }

  const getContextMenuItems = () => {
    if (windowId === 'recycle') {
      return [
        {
          label: 'Abrir',
          icon: 'w95_16',
          action: () => showWindow(windowId, title)
        },
        {
          label: 'Vaciar Papelera de Reciclaje',
          icon: 'w95_24',
          action: () => {
            emptyRecycleBin()
            play('CLICK')
          },
          disabled: files.length === 0
        },
        { separator: true },
        {
          label: 'Propiedades',
          icon: 'w95_8',
          action: handleProperties
        }
      ]
    }

    return [
      {
        label: 'Abrir',
        icon: 'w95_16',
        action: () => showWindow(windowId, title)
      },
      {
        label: 'Cambiar nombre',
        icon: 'w95_21',
        action: handleRename
      },
      {
        label: 'Copiar',
        icon: 'w95_24',
        action: handleCopy
      },
      {
        label: 'Pegar',
        icon: 'w95_24',
        action: handlePaste,
        disabled: !isCopied
      },
      {
        label: 'Crear acceso directo',
        icon: 'w95_24',
        action: handleCreateShortcut
      },
      { separator: true },
      {
        label: 'Propiedades',
        icon: 'w95_8',
        action: handleProperties
      }
    ]
  }

  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer hover:bg-[#000080] hover:bg-opacity-20 rounded-xs p-1"
        onContextMenu={handleClick}
        onClick={(e) => handleClick(e)}
      >
        <div className="relative">
          <img
            src={icon}
            alt={title}
            className="w-10 h-10"
          />
        </div>
        <div className="mt-1 text-center max-w-[75px]">
          {isRenaming ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={handleRenameSubmit}
              className="w-full text-center bg-transparent border-none focus:outline-none text-[10px] text-white leading-[1]"
              autoFocus
            />
          ) : (
            <span className="text-[10px] text-white break-words leading-[1]">
              {title}
            </span>
          )}
        </div>

        {isMenuOpen(`icon-${id}`) && contextMenuPos && (
          <div
            style={{
              position: 'fixed',
              left: contextMenuPos.x,
              top: contextMenuPos.y,
              zIndex: 1000
            }}
          >
            <ContextMenu
              x={contextMenuPos.x}
              y={contextMenuPos.y}
              menuId={`icon-${id}`}
              items={getContextMenuItems()}
              onClose={() => setContextMenuPos(null)}
            />
          </div>
        )}
      </div>

      {showProperties && (
        <Properties
          id="properties"
          title={`Propiedades de ${title}`}
          icon={icon}
          type={windowId}
          onClose={() => setShowProperties(false)}
        />
      )}
    </>
  )
}

export default Icon 