import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  misDocumentos,
  doc,
  txt,
  folder,
  miPc,
  hdd,
  diskette,
  externalHdd,
  defaultFile,
  certificados,
  proyectos
} from '../../assets/images'

function Documents() {
  const [selectedFolder, setSelectedFolder] = useState('Mis Documentos')
  const [currentPath, setCurrentPath] = useState('C:\\Mis Documentos')

  const folders = [
    {
      name: 'Mis Documentos',
      icon: misDocumentos,
      items: [
        { name: 'Proyectos', type: 'Carpeta', date: '2024-03-15', icon: proyectos },
        { name: 'Portfolio', type: 'Carpeta', date: '2024-03-10', icon: folder },
        { name: 'Documentación', type: 'Carpeta', date: '2024-03-05', icon: folder }
      ]
    },
    {
      name: 'Documentos',
      icon: doc,
      items: [
        { name: 'Currículum.pdf', type: 'PDF', date: '2024-03-20', icon: defaultFile },
        { name: 'Certificados', type: 'Carpeta', date: '2024-03-18', icon: certificados },
        { name: 'Presentaciones', type: 'Carpeta', date: '2024-03-12', icon: folder }
      ]
    },
    {
      name: 'Imágenes',
      icon: txt,
      items: [
        { name: 'Fotos', type: 'Carpeta', date: '2024-03-25', icon: folder },
        { name: 'Diseños', type: 'Carpeta', date: '2024-03-22', icon: folder },
        { name: 'Logos', type: 'Carpeta', date: '2024-03-20', icon: folder }
      ]
    }
  ]

  const navigationItems = [
    { name: 'Escritorio', icon: folder },
    { name: 'Mis Documentos', icon: misDocumentos },
    { name: 'Mi PC', icon: miPc },
    { name: 'Disco Local (C:)', icon: hdd },
    { name: 'Disquete (A:)', icon: diskette },
    { name: 'Disco (D:)', icon: externalHdd }
  ]

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0]">
      {/* Barra de menú superior */}
      <div className="bg-[#e8e8e8] border-b border-[#808080]">
        <div className="flex">
          <div className="px-3 py-1 text-sm hover:bg-[#d4d4d4] cursor-pointer">Archivo</div>
          <div className="px-3 py-1 text-sm hover:bg-[#d4d4d4] cursor-pointer">Editar</div>
          <div className="px-3 py-1 text-sm hover:bg-[#d4d4d4] cursor-pointer">Ver</div>
          <div className="px-3 py-1 text-sm hover:bg-[#d4d4d4] cursor-pointer">Favoritos</div>
          <div className="px-3 py-1 text-sm hover:bg-[#d4d4d4] cursor-pointer">Herramientas</div>
          <div className="px-3 py-1 text-sm hover:bg-[#d4d4d4] cursor-pointer">Ayuda</div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Panel de navegación izquierdo */}
        <div className="w-48 bg-[#e8e8e8] border-r border-[#808080] p-2">
          <div className="space-y-1">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-1 cursor-pointer hover:bg-[#d4d4d4] ${
                  selectedFolder === item.name ? 'bg-[#d4d4d4]' : ''
                }`}
                onClick={() => setSelectedFolder(item.name)}
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-4 h-4"
                />
                <span className="text-sm text-black">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Panel principal */}
        <div className="flex-1 flex flex-col">
          {/* Barra de herramientas */}
          <div className="bg-[#e8e8e8] border-b border-[#808080] p-2 flex gap-2">
            <button className="px-3 py-1 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-sm flex items-center gap-1">
              <img src={folder} alt="Atrás" className="w-4 h-4" />
              Atrás
            </button>
            <button className="px-3 py-1 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-sm flex items-center gap-1">
              <img src={folder} alt="Adelante" className="w-4 h-4" />
              Adelante
            </button>
            <button className="px-3 py-1 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-sm flex items-center gap-1">
              <img src={folder} alt="Arriba" className="w-4 h-4" />
              Arriba
            </button>
            <div className="h-6 border-r border-[#808080] mx-2"></div>
            <button className="px-3 py-1 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-sm flex items-center gap-1">
              <img src={folder} alt="Vista" className="w-4 h-4" />
              Vista
            </button>
            <button className="px-3 py-1 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-sm flex items-center gap-1">
              <img src={folder} alt="Carpetas" className="w-4 h-4" />
              Carpetas
            </button>
          </div>

          {/* Barra de direcciones */}
          <div className="bg-white border-b border-[#808080] p-2 flex items-center">
            <span className="text-sm text-black mr-2">Dirección:</span>
            <input 
              type="text" 
              value={currentPath}
              className="flex-1 bg-white border border-[#808080] p-1 text-sm"
              readOnly
            />
          </div>

          {/* Contenido */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {folders.map((folder, index) => (
                <div 
                  key={index} 
                  className={`bg-white border border-[#808080] p-2 cursor-pointer hover:bg-[#d4d4d4] ${
                    selectedFolder === folder.name ? 'bg-[#d4d4d4]' : ''
                  }`}
                  onClick={() => setSelectedFolder(folder.name)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img 
                      src={folder.icon} 
                      alt={folder.name} 
                      className="w-8 h-8"
                    />
                    <span className="text-sm text-black">{folder.name}</span>
                  </div>
                  
                  <div className="space-y-1">
                    {folder.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center gap-2 p-1 hover:bg-[#e8e8e8]"
                      >
                        <img 
                          src={item.icon} 
                          alt={item.name} 
                          className="w-4 h-4"
                        />
                        <span className="text-xs text-black flex-1">{item.name}</span>
                        <span className="text-xs text-black">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents 