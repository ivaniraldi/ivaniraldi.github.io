import React from 'react'

function Win95Port() {
  return (
    <div className="bg-[#c0c0c0] w-full h-screen flex flex-col p-0 m-0">

      {/* Contenido Principal - Iframe ocupando todo el espacio restante */}
      <div className="flex-1 bg-[#c0c0c0] p-0 m-0">
        <iframe
          src="https://ivaniraldi.github.io/"
          title="Goofy Ahh Page"
          className="w-full h-full border-0 bg-[#c0c0c0]"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default Win95Port