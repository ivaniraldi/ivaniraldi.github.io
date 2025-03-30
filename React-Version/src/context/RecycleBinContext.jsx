import { createContext, useContext, useState } from 'react'

const RecycleBinContext = createContext()

export function RecycleBinProvider({ children }) {
  const [files, setFiles] = useState([
    {
      name: 'Documento borrado 1.doc',
      type: 'Documento',
      date: '2024-03-25',
      size: '2.5 MB'
    },
    {
      name: 'Imagen borrada.jpg',
      type: 'Imagen',
      date: '2024-03-24',
      size: '1.8 MB'
    },
    {
      name: 'Carpeta borrada',
      type: 'Carpeta',
      date: '2024-03-23',
      size: '15 MB'
    },
    {
      name: 'Archivo borrado.pdf',
      type: 'PDF',
      date: '2024-03-22',
      size: '3.2 MB'
    }
  ])

  const emptyRecycleBin = () => {
    setFiles([])
  }

  const value = {
    files,
    emptyRecycleBin
  }

  return (
    <RecycleBinContext.Provider value={value}>
      {children}
    </RecycleBinContext.Provider>
  )
}

export function useRecycleBin() {
  const context = useContext(RecycleBinContext)
  if (!context) {
    throw new Error('useRecycleBin must be used within a RecycleBinProvider')
  }
  return context
} 