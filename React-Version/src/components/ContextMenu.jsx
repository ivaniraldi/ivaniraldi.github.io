import { useEffect } from 'react'
import { useSoundContext } from '../context/SoundContext'
import { useMenu } from '../context/MenuContext'
import {
  miPc,
  misDocumentos,
  papeleraLlena,
  ayuda,
  defaultFile
} from '../assets/images'

function ContextMenu({ x, y, items, onClose, menuId }) {
  const { play } = useSoundContext()
  const { closeMenu } = useMenu()

  useEffect(() => {
    const handleClickOutside = () => {
      onClose()
      closeMenu(menuId)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [onClose, menuId, closeMenu])

  const handleItemClick = (action, disabled) => {
    if (disabled) return
    play('CLICK')
    action()
    onClose()
    closeMenu(menuId)
  }

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'w95_16':
        return miPc
      case 'w95_21':
        return misDocumentos
      case 'w95_24':
        return papeleraLlena
      case 'w95_11':
        return ayuda
      default:
        return defaultFile
    }
  }

  return (
    <div 
      className="fixed bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-lg z-[9999]"
      style={{ left: x, top: y }}
    >
      {items.map((item, index) => (
        <div key={index}>
          {item.separator ? (
            <div className="h-px bg-[#808080] my-1" />
          ) : (
            <div 
              className={`flex items-center gap-2 px-3 py-1 cursor-pointer text-sm ${
                item.disabled 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'hover:bg-[#000080] hover:text-white'
              }`}
              onClick={() => handleItemClick(item.action, item.disabled)}
            >
              <img 
                src={getIcon(item.icon)} 
                alt={item.label} 
                className="w-4 h-4"
              />
              <span>{item.label}</span>
              {item.submenu && (
                <span className="ml-auto text-xs">▶</span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ContextMenu 