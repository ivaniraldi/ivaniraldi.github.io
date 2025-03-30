import { useWindow } from '../../context/WindowContext'
import { useSoundContext } from '../../context/SoundContext'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ayuda } from '../../assets/images'

function Customize() {
  const { closeWindow } = useWindow()
  const { play } = useSoundContext()
  const [selectedTab, setSelectedTab] = useState('background')

  const handleClose = () => {
    play('CLICK')
    closeWindow('customize')
  }

  const handleTabClick = (tab) => {
    play('CLICK')
    setSelectedTab(tab)
  }

  return (
    <div className="window" style={{ width: '500px', height: '400px' }}>
      <div className="title-bar">
        <div className="flex items-center gap-2 p-2">
          <img src={ayuda} alt="Personalizar" className="w-4 h-4" />
          <span className="text-sm font-bold text-[#000080]">Personalizar Escritorio</span>
        </div>
        <div className="title-bar-controls">
          <button onClick={handleClose}>×</button>
        </div>
      </div>
      <div className="window-content p-4">
        {/* Pestañas */}
        <div className="flex border-b border-[#808080] mb-4">
          <button 
            className={`px-4 py-2 text-sm ${selectedTab === 'background' ? 'bg-[#c0c0c0] border border-[#808080] border-b-white' : ''}`}
            onClick={() => handleTabClick('background')}
          >
            Fondo
          </button>
          <button 
            className={`px-4 py-2 text-sm ${selectedTab === 'appearance' ? 'bg-[#c0c0c0] border border-[#808080] border-b-white' : ''}`}
            onClick={() => handleTabClick('appearance')}
          >
            Apariencia
          </button>
          <button 
            className={`px-4 py-2 text-sm ${selectedTab === 'effects' ? 'bg-[#c0c0c0] border border-[#808080] border-b-white' : ''}`}
            onClick={() => handleTabClick('effects')}
          >
            Efectos
          </button>
        </div>

        {/* Contenido de las pestañas */}
        {selectedTab === 'background' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs mb-1">Fondo:</label>
              <select className="input w-full">
                <option>Fondo de Windows 95</option>
                <option>Fondo de Windows 98</option>
                <option>Fondo de Windows 2000</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1">Patrón:</label>
              <select className="input w-full">
                <option>Ninguno</option>
                <option>Cuadros</option>
                <option>Líneas</option>
                <option>Puntos</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1">Color:</label>
              <select className="input w-full">
                <option>Azul marino</option>
                <option>Verde</option>
                <option>Rojo</option>
                <option>Gris</option>
              </select>
            </div>
          </div>
        )}

        {selectedTab === 'appearance' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs mb-1">Esquema:</label>
              <select className="input w-full">
                <option>Windows 95</option>
                <option>Windows 98</option>
                <option>Windows 2000</option>
                <option>Personalizado</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1">Tamaño de fuente:</label>
              <select className="input w-full">
                <option>Normal</option>
                <option>Grande</option>
                <option>Extra grande</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1">Fuente:</label>
              <select className="input w-full">
                <option>MS Sans Serif</option>
                <option>MS Serif</option>
                <option>Courier New</option>
              </select>
            </div>
          </div>
        )}

        {selectedTab === 'effects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs">Animaciones de menús</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs">Efectos de sombra</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs">Efectos de transición</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex justify-end gap-2 mt-4">
          <button className="button">Aplicar</button>
          <button className="button">Aceptar</button>
          <button className="button" onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default Customize 