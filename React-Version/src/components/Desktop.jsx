import { useWindow } from '../context/WindowContext'
import Icon from './Icon'
import Window from './Window'
import DesktopContextMenu from './DesktopContextMenu'
import Properties from './windows/Properties'
import Customize from './windows/Customize'
import { useEffect, useState } from 'react'
import { useMenu } from '../context/MenuContext'
import {
  profile,
  proyectos,
  webrush,
  miPc,
  misDocumentos,
  justpostit,
  metatagenerator,
  cookieclicker,
  goofyahh,
  wordle,
  logoInicio,
  invoicegenpro,
  papeleraVacia,

} from '../assets/images'

// Constantes para los iconos del escritorio
const DESKTOP_ICONS = [
  {
    id: 'mypc',
    title: 'Mi PC',
    icon: miPc,
    windowId: 'mypc'
  },
  {
    id: 'documents',
    title: 'Mis Documentos',
    icon: misDocumentos,
    windowId: 'documents'
  },
  {
    id: 'profile',
    title: 'Mi Perfil',
    icon: profile,
    windowId: 'profile'
  },
  {
    id: 'portfolio',
    title: 'Portafolio',
    icon: proyectos,
    windowId: 'portfolio'
  },
  {
    id: 'company',
    title: 'Webrush',
    icon: webrush,
    windowId: 'company'
  },
  {
    id: 'recycle',
    title: 'Thrash Bin',
    icon: papeleraVacia,
    windowId: 'recycle'
  },
  {
    id: 'wordle',
    title: 'Wordle',
    icon: wordle,
    windowId: 'wordle'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker clone (on dev)',
    icon: cookieclicker,
    windowId: 'cookieclicker'
  },
  {
    id: 'goofyahh',
    title: 'Goofyahh Page (on dev)',
    icon: goofyahh,
    windowId: 'goofyahh'
  },
  {
    id: 'metatagenerator',
    title: 'MetataGenerator',
    icon: metatagenerator,
    windowId: 'metatagenerator'
  },
  {
    id: 'justpostit',
    title: 'JustPostIt (on dev)',
    icon: justpostit,
    windowId: 'justpostit'
  },
  {
    id: 'invoicegenpro',
    title: 'InvoiceGen.Pro',
    icon: invoicegenpro,
    windowId: 'invoicegenpro'
  },
  {
    id: 'win95port',
    title: 'win95port.exe',
    icon: logoInicio,
    windowId: 'win95port'
  }
]

// Componente para renderizar los iconos del escritorio
const DesktopIcons = () => {
  const [columns, setColumns] = useState([])
  const iconWidth = 85 // Ancho de cada icono en píxeles
  const iconHeight = 80 // Alto total de cada icono (incluyendo texto)
  const gap = 17 // Espacio entre iconos en píxeles
  const padding = 10 // Padding del contenedor en píxeles
  const taskbarHeight = 50 // Altura de la barra de tareas en píxeles

  useEffect(() => {
    const organizeIcons = () => {
      const windowHeight = window.innerHeight - taskbarHeight - (padding * 2)
      const iconsPerColumn = Math.floor(windowHeight / (iconHeight + gap))
      const newColumns = []
      let currentColumn = []
      
      DESKTOP_ICONS.forEach((icon) => {
        if (currentColumn.length >= iconsPerColumn) {
          newColumns.push(currentColumn)
          currentColumn = []
        }
        currentColumn.push(icon)
      })
      
      if (currentColumn.length > 0) {
        newColumns.push(currentColumn)
      }
      
      setColumns(newColumns)
    }

    organizeIcons()
    window.addEventListener('resize', organizeIcons)

    return () => window.removeEventListener('resize', organizeIcons)
  }, [])

  return (
    <div className="p-3">
      <div className="flex gap-3">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-3" style={{ width: `${iconWidth}px` }}>
            {column.map(icon => (
              <Icon key={icon.id} {...icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// Componente para renderizar las ventanas
const DesktopWindows = ({ windows }) => (
  <>
    {Array.from(windows.values()).map(window => {
      switch (window.type) {
        case 'properties':
          return <Properties key={window.id} {...window} />
        case 'customize':
          return <Customize key={window.id} {...window} />
        default:
          return <Window key={window.id} {...window} />
      }
    })}
  </>
)

function Desktop() {
  const { windows } = useWindow()
  const { isMenuOpen, openMenuById, closeMenu } = useMenu()
  const [contextMenuPosition, setContextMenuPosition] = useState(null)

  const handleContextMenu = (e) => {
    e.preventDefault()
    setContextMenuPosition({ x: e.clientX, y: e.clientY })
    openMenuById('desktop')
  }

  const handleClick = () => {
    if (isMenuOpen('desktop')) {
      closeMenu('desktop')
    }
  }

  return (
    <div 
      className="flex-1 relative overflow-hidden pb-12"
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      <DesktopIcons />
      <div className="fixed inset-0 pointer-events-none">
        <div className="relative pointer-events-auto">
          <DesktopWindows windows={windows} />
        </div>
      </div>
      {isMenuOpen('desktop') && contextMenuPosition && (
        <DesktopContextMenu 
          x={contextMenuPosition.x} 
          y={contextMenuPosition.y} 
          menuId="desktop"
        />
      )}
    </div>
  )
}

export default Desktop 