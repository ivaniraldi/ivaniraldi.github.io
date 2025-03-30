import React from 'react'
import { motion } from 'framer-motion'
import { profilePic } from '../../assets/images'

function Profile() {
  return (
    <div className="bg-[#c0c0c0] p-4">
      {/* Encabezado */}
      <div className="bg-[#000080] text-white p-2 mb-4 flex items-center">
        <img 
          src={profilePic} 
          alt="Mi Perfil" 
          className="w-8 h-8 mr-2"
        />
        <span className="font-bold">Mi Perfil</span>
      </div>

      {/* Contenido Principal */}
      <div className="space-y-4">
        {/* Información Personal */}
        <div className="bg-white border-2 border-[#808080] p-3">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={profilePic} 
              alt="Mi Perfil" 
              className="w-24 h-24 border-2 border-[#808080]"
            />
            <div>
              <h2 className="text-lg font-bold text-[#000080]">Ivan Iraldi</h2>
              <p className="text-sm text-black">Desarrollador Web Full Stack</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-[#000080] mb-1">Email</label>
              <p className="text-sm text-black bg-[#c0c0c0] p-1 border border-[#808080]">iraldiban@gmail.com</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#000080] mb-1">Ubicación</label>
              <p className="text-sm text-black bg-[#c0c0c0] p-1 border border-[#808080]">Santa Catarina, Brasil</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#000080] mb-1">Nacionalidad</label>
              <p className="text-sm text-black bg-[#c0c0c0] p-1 border border-[#808080]">Argentina</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#000080] mb-1">Empresa</label>
              <p className="text-sm text-black bg-[#c0c0c0] p-1 border border-[#808080]">Webrush Brasil</p>
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div className="bg-white border-2 border-[#808080] p-3">
          <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Idiomas</h3>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              Español
            </button>
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              Inglés
            </button>
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              Portugués
            </button>
          </div>
        </div>

        {/* Habilidades */}
        <div className="bg-white border-2 border-[#808080] p-3">
          <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Habilidades</h3>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              JavaScript
            </button>
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              React
            </button>
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              Node.js
            </button>
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              SQL
            </button>
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              E-commerce
            </button>
            <button className="bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-3 py-1 text-sm text-black hover:bg-[#d4d4d4]">
              Mentoría
            </button>
          </div>
        </div>

        {/* Experiencia */}
        <div className="bg-white border-2 border-[#808080] p-3">
          <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Experiencia</h3>
          <div className="space-y-2">
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Diseño y liderazgo de sesiones interactivas de programación web
            </div>
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Desarrollo de sitios web de portafolio y SPA
            </div>
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Desarrollo de modificaciones para juegos (Minecraft, Garry's Mod)
            </div>
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Creación de contenido en YouTube y Twitch
            </div>
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Desarrollo de e-commerce con JavaScript, React, SQL y Node.js
            </div>
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Implementación de rutas protegidas y gestión de inventario
            </div>
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Configuración de pasarelas de pago (VISA, Mastercard, Amex)
            </div>
            <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
              • Experiencia como Henry Hero
            </div>
          </div>
        </div>

        {/* Biografía */}
        <div className="bg-white border-2 border-[#808080] p-3">
          <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Biografía</h3>
          <div className="text-sm text-black bg-[#c0c0c0] p-2 border border-[#808080]">
            Desarrollador web full-stack con experiencia en JavaScript, React, SQL y Node.js. 
            Apasionado por crear aplicaciones web eficientes y escalables. Destaco por mi 
            capacidad para trabajar en equipo, mi atención al detalle y mi compromiso con el 
            aprendizaje continuo. Busco unirme a un equipo dinámico donde pueda contribuir 
            con mis habilidades técnicas y crecer profesionalmente.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 