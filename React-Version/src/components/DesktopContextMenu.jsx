import { useWindow } from '../context/WindowContext'
import { useSoundContext } from '../context/SoundContext'
import { useMenu } from '../context/MenuContext'
import {
  miPc,
  misDocumentos,
  papeleraLlena,
  ayuda,
  defaultFile
} from '../assets/images'

function DesktopContextMenu({ x, y, menuId }) {
  const { showWindow } = useWindow()
  const { play } = useSoundContext()
  const { closeMenu } = useMenu()

  const handleItemClick = (action) => {
    play('CLICK')
    action()
    closeMenu(menuId)
  }

  return (
    <div 
      className="fixed bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-lg z-[9999]"
      style={{ left: x, top: y }}
    >
      <div className="menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => handleItemClick(() => showWindow('mypc', 'Mi PC'))}>
        <img src={miPc} alt="Mi PC" className="w-4 h-4" />
        <span>Mi PC</span>
      </div>
      <div className="menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => handleItemClick(() => showWindow('documents', 'Mis Documentos'))}>
        <img src={misDocumentos} alt="Mis Documentos" className="w-4 h-4" />
        <span>Mis Documentos</span>
      </div>
      <div className="h-px bg-[#808080] my-1" />
      <div className="menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => handleItemClick(() => showWindow('recycle', 'Papelera de Reciclaje'))}>
        <img src={papeleraLlena} alt="Papelera" className="w-4 h-4" />
        <span>Papelera de Reciclaje</span>
      </div>
      <div className="h-px bg-[#808080] my-1" />
      <div className="menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => handleItemClick(() => showWindow('customize', 'Personalizar escritorio'))}>
        <img src={ayuda} alt="Personalizar" className="w-4 h-4" />
        <span>Personalizar escritorio</span>
      </div>
      <div className="menu-item flex items-center gap-2 p-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => handleItemClick(() => showWindow('properties', 'Propiedades de Escritorio'))}>
        <img src={defaultFile} alt="Propiedades" className="w-4 h-4" />
        <span>Propiedades</span>
      </div>
    </div>
  )
}

export default DesktopContextMenu 