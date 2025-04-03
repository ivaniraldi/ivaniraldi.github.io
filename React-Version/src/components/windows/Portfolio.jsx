import React from 'react'

function Portfolio() {
  const projects = [
    {
      proyecto: "Blog",
      descripcion: "Involucra a tu audiencia y aumenta tu visibilidad con contenido relevante. Perfecto para atraer clientes e impulsar tráfico.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      imagen: "https://i.imgur.com/2VYp3iA.png",
      codigo: "https://urbanblog.onrender.com",
      demo: "https://urbanblog.onrender.com"
    },
    {
      proyecto: "Landing Page",
      descripcion: "Página única para atraer y convertir visitantes. Útil para promociones o campañas.",
      tecnologias: ["React", "Tailwind CSS", "Framer Motion"],
      imagen: "https://i.imgur.com/wQpr0ve.png",
      codigo: "https://landingpage-portfolio.onrender.com/",
      demo: "https://landingpage-portfolio.onrender.com/"
    },
    {
      proyecto: "Ecommerce",
      descripcion: "Tienda en línea para vender productos o servicios. Ideal para negocios que quieren crecer y gestionar ventas.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "Stripe"],
      imagen: "https://i.imgur.com/vWJ3EfK.png",
      codigo: "https://ecommerce-portfolio-8cbo.onrender.com/",
      demo: "https://ecommerce-portfolio-8cbo.onrender.com/"
    },
    {
      proyecto: "Portfólio",
      descripcion: "Escaparate en línea de trabajos y proyectos. Ideal para creativos que quieren destacar su experiencia.",
      tecnologias: ["React", "Tailwind CSS", "Framer Motion"],
      imagen: "https://i.imgur.com/U0z8kZq.png",
      codigo: "https://portfolio-portfolio-cfrk.onrender.com/",
      demo: "https://portfolio-portfolio-cfrk.onrender.com/"
    }
  ]

  return (
    <div className="p-4">
      <div className="flex justify-between items-center border-b border-[#808080] pb-1 mb-4">
        <h2 className="text-sm font-bold text-[#000080]">Mis Proyectos</h2>
        <a 
          href="https://iraldidev.vercel.app"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-[#000080] hover:underline"
        >
          Ingresar a mi web-portafolio
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2"
          >
            <div className="relative">
              <img 
                src={project.imagen} 
                alt={project.proyecto}
                className="w-full h-40 object-cover mb-2 border border-[#808080] border-r-[#ffffff] border-b-[#ffffff]"
              />
              <div className="absolute bottom-2 right-2 flex gap-1">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] px-2 py-1 text-xs text-black active:border-[#808080] active:border-t-[#ffffff] active:border-l-[#ffffff]"
                >
                  Demo
                </a>
                <a 
                  href={project.codigo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] px-2 py-1 text-xs text-black active:border-[#808080] active:border-t-[#ffffff] active:border-l-[#ffffff]"
                >
                  Código
                </a>
              </div>
            </div>
            
            <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">{project.proyecto}</h3>
            <p className="text-xs text-black mb-2">{project.descripcion}</p>
            <div className="flex flex-wrap gap-1">
              {project.tecnologias.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] px-2 py-0.5 text-[11px] text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio