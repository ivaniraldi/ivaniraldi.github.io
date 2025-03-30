import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { papeleraLlena, papeleraVacia } from '../../assets/images'
import { useSoundContext } from '../../context/SoundContext'
import { useMenu } from '../../context/MenuContext'
import { useWindow } from '../../context/WindowContext'
import { useRecycleBin } from '../../context/RecycleBinContext'
import ContextMenu from '../ContextMenu'

function RecycleBin() {
  const { play } = useSoundContext()
  const { openMenuById, isMenuOpen } = useMenu()
  const { showWindow } = useWindow()
  const { files, emptyRecycleBin } = useRecycleBin()
  const [contextMenuPos, setContextMenuPos] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setContextMenuPos({ x: e.clientX, y: e.clientY })
    openMenuById('recycle')
  }

  const handleRestore = () => {
    // Implementar restauración
    play('CLICK')
  }

  const handleEmpty = () => {
    emptyRecycleBin()
    play('CLICK')
  }

  const handleProperties = () => {
    showWindow('properties', 'Propiedades de Papelera de Reciclaje', { 
      type: 'properties', 
      icon: files.length > 0 ? papeleraLlena : papeleraVacia,
      title: 'Papelera de Reciclaje'
    })
    play('CLICK')
  }

  const handleItemClick = (item) => {
    setSelectedItem(item)
    play('CLICK')
  }

  return (
    <div className="p-4" onContextMenu={handleContextMenu}>
      <div className="flex items-center gap-2 mb-6">
        <img 
          src={files.length > 0 ? papeleraLlena : papeleraVacia} 
          alt="Papelera de Reciclaje" 
          className="w-8 h-8"
        />
        <h2 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1">Papelera de Reciclaje</h2>
      </div>

      <div className="flex flex-col h-full">
        <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img 
                src={files.length > 0 ? papeleraLlena : papeleraVacia} 
                alt="Papelera" 
                className="w-6 h-6"
              />
              <span className="text-xs text-black">{files.length} elemento{files.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex gap-2">
              <button 
                className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] px-2 py-1 text-xs text-black hover:bg-[#d4d4d4]"
                onClick={handleRestore}
                disabled={files.length === 0}
              >
                Restaurar
              </button>
              <button 
                className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] px-2 py-1 text-xs text-black hover:bg-[#d4d4d4]"
                onClick={handleEmpty}
                disabled={files.length === 0}
              >
                Vaciar
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {files.length > 0 ? (
              files.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 p-1 cursor-pointer ${
                    selectedItem === item ? 'bg-[#000080] text-white' : 'hover:bg-[#d4d4d4]'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <img 
                    src={`/src/assets/images/${item.type === 'Carpeta' ? 'w95_21' : 'w95_22'}.ico`} 
                    alt={item.name} 
                    className="w-4 h-4"
                  />
                  <span className="text-xs flex-1">{item.name}</span>
                  <span className="text-xs">{item.size}</span>
                  <span className="text-xs">{item.date}</span>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-32 text-gray-500">
                <img 
                  src={papeleraVacia} 
                  alt="Papelera vacía" 
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm">La Papelera de Reciclaje está vacía</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen('recycle') && contextMenuPos && (
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
            menuId="recycle"
            items={[
              {
                label: 'Abrir',
                icon: 'w95_16',
                action: () => showWindow('recycle', 'Papelera de Reciclaje')
              },
              {
                label: 'Vaciar Papelera de Reciclaje',
                icon: 'w95_24',
                action: handleEmpty,
                disabled: files.length === 0
              },
              { separator: true },
              {
                label: 'Propiedades',
                icon: 'w95_8',
                action: handleProperties
              }
            ]}
            onClose={() => setContextMenuPos(null)}
          />
        </div>
      )}
    </div>
  )
}

export default RecycleBin 