import React from 'react'

function Company() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-[#000080] flex items-center justify-center">
          <span className="text-white text-sm">W</span>
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-1">Webrush Brasil</h2>
          <p className="text-xs text-black">Transformamos Cliques em Conexões e Resultados</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2">
          <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Sobre Nós</h3>
          <p className="text-xs text-black mb-2">
            Webrush Brasil é uma agência digital especializada em criar soluções web modernas e estratégias de marketing que geram resultados. Transformamos ideias em experiências digitais impactantes para negócios que buscam crescer online.
          </p>
          <a 
            href="https://www.webrushbrasil.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#000080] hover:underline"
          >
            <span className="w-3 h-3 bg-[#000080] flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white"></span>
            </span>
            Visite nosso site: www.webrushbrasil.com.br
          </a>
        </div>

        <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2">
          <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2">
              <h4 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Desenvolvimento Web</h4>
              <p className="text-xs text-black">Criamos sites personalizados e funcionais para sua marca</p>
            </div>
            <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2">
              <h4 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Marketing Digital</h4>
              <p className="text-xs text-black">Estratégias que convertem cliques em vendas</p>
            </div>
            <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2">
              <h4 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">E-commerce</h4>
              <p className="text-xs text-black">Desenvolvemos lojas online otimizadas para resultados</p>
            </div>
            <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2">
              <h4 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Consultoria Digital</h4>
              <p className="text-xs text-black">Apoio para alavancar sua presença online</p>
            </div>
          </div>
        </div>

        <div className="bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] p-2">
          <h3 className="text-sm font-bold text-[#000080] border-b border-[#808080] pb-1 mb-2">Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-black mb-1">Email</label>
              <p className="text-xs text-black">contato@webrushbrasil.com.br</p>
            </div>
            <div>
              <label className="block text-xs text-black mb-1">Telefone</label>
              <p className="text-xs text-black">+55 11 98765-4321</p>
            </div>
            <div>
              <label className="block text-xs text-black mb-1">Endereço</label>
              <p className="text-xs text-black">Rua Digital, 456, São Paulo, SP</p>
            </div>
            <div>
              <label className="block text-xs text-black mb-1">Horário</label>
              <p className="text-xs text-black">Seg - Sex: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company