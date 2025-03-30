import React from 'react'
import { motion } from 'framer-motion'
import { hdd, diskette, externalHdd } from '../../assets/images'

function MyPC() {
  const systemInfo = {
    computerName: 'IVAN-PC',
    os: 'Windows 11 Pro 64-bit',
    processor: 'Intel(R) Core(TM) i3-8100 CPU @ 3.60GHz',
    ram: '16384 MB',
    manufacturer: 'Gigabyte Technology Co., Ltd.',
    model: 'H310M H 2.0',
    bios: 'F14a (UEFI)'
  }

  const drives = [
    { name: 'C:', type: 'Disco Local', freeSpace: '500', totalSpace: '1000' },
    { name: 'D:', type: 'Disco Local', freeSpace: '200', totalSpace: '500' },
    { name: 'E:', type: 'CD-ROM', freeSpace: '0', totalSpace: '0' }
  ]

  const calculatePercentage = (free, total) => {
    if (total === 0) return 0
    return (free / total) * 100
  }

  return (
    <div className="bg-[#c0c0c0] p-4 border-2 border-[#808080]">
      <div className="bg-[#000080] text-white p-2 mb-4 flex items-center">
        <img src={hdd} alt="My PC" className="w-6 h-6 mr-2" />
        <span className="font-bold">Mi PC</span>
      </div>
      
      <div className="bg-white p-4 mb-4 border-2 border-[#808080]">
        <h3 className="font-bold mb-2">Información del Sistema</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-semibold">Nombre del equipo:</span>
            <span className="ml-2">{systemInfo.computerName}</span>
          </div>
          <div>
            <span className="font-semibold">Sistema operativo:</span>
            <span className="ml-2">{systemInfo.os}</span>
          </div>
          <div>
            <span className="font-semibold">Procesador:</span>
            <span className="ml-2">{systemInfo.processor}</span>
          </div>
          <div>
            <span className="font-semibold">Memoria RAM:</span>
            <span className="ml-2">{systemInfo.ram}</span>
          </div>
          <div>
            <span className="font-semibold">Fabricante:</span>
            <span className="ml-2">{systemInfo.manufacturer}</span>
          </div>
          <div>
            <span className="font-semibold">Modelo:</span>
            <span className="ml-2">{systemInfo.model}</span>
          </div>
          <div>
            <span className="font-semibold">BIOS:</span>
            <span className="ml-2">{systemInfo.bios}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 border-2 border-[#808080]">
        <h3 className="font-bold mb-2">Unidades de disco</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drives.map((drive, index) => (
            <div key={index} className="border-2 border-[#808080] p-4 bg-[#c0c0c0]">
              <div className="flex items-center space-x-2 mb-2">
                <img 
                  src="/src/assets/images/drive.png" 
                  alt="Drive icon" 
                  className="w-8 h-8"
                />
                <h3 className="font-bold">{drive.name}</h3>
              </div>
              <p className="text-sm">{drive.type}</p>
              <div className="mt-2">
                <div className="w-full bg-[#808080] h-2.5 border border-[#000000]">
                  <div 
                    className="bg-[#000080] h-2.5" 
                    style={{ 
                      width: `${calculatePercentage(parseInt(drive.freeSpace), parseInt(drive.totalSpace))}%` 
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-1">
                  {drive.freeSpace} GB libres de {drive.totalSpace} GB
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPC 