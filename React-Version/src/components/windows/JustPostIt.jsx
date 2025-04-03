import React from 'react'
import { motion } from 'framer-motion'

function JustPostIt() {
  return (
    <div className="bg-[#c0c0c0] p-4">
      {/* Encabezado */}
      <div className="bg-[#000080] text-white p-2 mb-4 flex items-center">
        <span className="font-bold">Información</span>
      </div>

      {/* Contenido Principal */}
      <div className="space-y-4">
        <div className="bg-white border-2 border-[#808080] p-3">
          <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
            Este programa aún está en desarrollo, puedes ver el repositorio en este{' '}
            <a 
              href="https://github.com/ivaniraldi/JustPostIt" 
              className="text-[#000080] underline hover:text-[#0000ff]"
              target="_blank"
              rel="noopener noreferrer"
            >
              enlace
            </a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default JustPostIt