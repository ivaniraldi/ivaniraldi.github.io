import React from 'react'

function Wordle() {
  return (
    <div className="bg-[#c0c0c0] w-full h-screen flex flex-col p-0 m-0">
      {/* Botón de info en la esquina superior derecha */}
      <div className="flex justify-end p-1">
        <div className="relative group">
          <button 
            className="bg-[#c0c0c0] text-black px-2 py-[2px] border-t-[2px] border-l-[2px]  border-b-[2px] border-r-[2px] border-[#6d6d6d] 
            hover:bg-[#d4d0c8] active:border-t-[2px] active:border-l-[2px] active:border-[#808080] active:border-b-[2px] active:border-r-[2px]  
            font-ms-sans text-sm shadow-[1px_1px_#808080] outline-none"
          >
            Info
          </button>
          {/* Mensaje que aparece al hacer hover y permanece visible */}
          <div className="absolute right-0 top-full mt-[2px] w-72 bg-[#c0c0c0] p-2 border-t-[2px] border-l-[2px]  border-b-[2px] border-r-[2px] border-[#6d6d6d] 
            text-black text-sm opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity z-10 shadow-[1px_1px_#808080]">
            Este es un juego desarrollado en HTML, CSS y JavaScript. Hecho como hobby. Repo:{' '}
            <a className="text-blue-800 underline" target="_blank" href="https://github.com/ivaniraldi/wordle">
              GitHub
            </a>{' '}
            | Demo:{' '}
            <a className="text-blue-800 underline" target="_blank" href="https://wordle-spanish.vercel.app/">
              Ver
            </a>
          </div>
        </div>
      </div>

      {/* Contenido Principal - Iframe ocupando todo el espacio restante */}
      <div className="flex-1 bg-[#c0c0c0] p-0 m-0">
        <iframe
          src="https://wordle-spanish.vercel.app/"
          title="Wordle en español"
          className="w-full h-full border-0 bg-[#c0c0c0]"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default Wordle