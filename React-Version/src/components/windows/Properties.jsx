import { motion } from 'framer-motion'
import { useWindow } from '../../context/WindowContext'
import { useSoundContext } from '../../context/SoundContext'
import Window from '../Window'

function Properties({ id, title, icon, type, onClose }) {
  const { play } = useSoundContext()

  const getProperties = () => {
    switch (type) {
      case 'profile':
        return {
          type: 'Carpeta',
          location: 'C:\\Users\\Ivan',
          size: '0 bytes',
          contains: '1 archivo',
          created: '1/1/2024',
          attributes: 'Oculto'
        }
      case 'portfolio':
        return {
          type: 'Carpeta',
          location: 'C:\\Users\\Ivan\\Portfolio',
          size: '0 bytes',
          contains: '0 archivos',
          created: '1/1/2024',
          attributes: 'Normal'
        }
      case 'company':
        return {
          type: 'Carpeta',
          location: 'C:\\Users\\Ivan\\Webrush',
          size: '0 bytes',
          contains: '0 archivos',
          created: '1/1/2024',
          attributes: 'Normal'
        }
      case 'mypc':
        return {
          type: 'Carpeta del sistema',
          location: 'C:\\',
          size: '0 bytes',
          contains: '6 elementos',
          created: '1/1/2024',
          attributes: 'Sistema'
        }
      case 'documents':
        return {
          type: 'Carpeta',
          location: 'C:\\Users\\Ivan\\Documents',
          size: '0 bytes',
          contains: '0 archivos',
          created: '1/1/2024',
          attributes: 'Normal'
        }
      case 'recycle':
        return {
          type: 'Carpeta del sistema',
          location: 'C:\\RECYCLED',
          size: '0 bytes',
          contains: '0 elementos',
          created: '1/1/2024',
          attributes: 'Sistema'
        }
      default:
        return {
          type: 'Acceso directo',
          location: 'C:\\Users\\Ivan\\Desktop',
          size: '1 KB',
          contains: '1 archivo',
          created: '1/1/2024',
          attributes: 'Normal'
        }
    }
  }

  const properties = getProperties()

  return (
    <Window
      id={id}
      title={title}
      icon={icon}
      onClose={onClose}
      width={400}
      height={300}
      minWidth={400}
      minHeight={300}
    >
      <div className="flex flex-col h-full bg-[#c0c0c0] p-4">
        <div className="flex items-center gap-4 mb-4">
          <img src={icon} alt={title} className="w-16 h-16" />
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm">{properties.type}</p>
          </div>
        </div>

        <div className="flex-1 bg-white p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-bold">Ubicación:</p>
              <p className="text-sm">{properties.location}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Tamaño:</p>
              <p className="text-sm">{properties.size}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Contiene:</p>
              <p className="text-sm">{properties.contains}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Creado:</p>
              <p className="text-sm">{properties.created}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Atributos:</p>
              <p className="text-sm">{properties.attributes}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-[#c0c0c0] border border-[#808080] hover:bg-[#d4d4d4] active:bg-[#a0a0a0]"
            onClick={onClose}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Window>
  )
}

export default Properties 