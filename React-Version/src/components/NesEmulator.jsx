import React, { useRef, useState, useEffect } from 'react';
import { NES } from 'jsnes';

const NesEmulator = () => {
    const canvasRef = useRef(null);
    const nesRef = useRef(null);
    const [romData, setRomData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [running, setRunning] = useState(false);

    // Función para validar la cabecera del ROM
    const isValidNesRom = (romData) => {
        if (romData.length < 16) return false;
        const header = String.fromCharCode(romData[0], romData[1], romData[2], romData[3]);
        return header === "NES\x1a";
    };

    // Función para cargar el ROM
    const loadRom = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLoading(true);
            setError(null);
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const romData = new Uint8Array(reader.result);
                    // Validar la cabecera del ROM
                    if (!isValidNesRom(romData)) {
                        throw new Error("Not a valid NES ROM.");
                    }
                    setRomData(romData);
                    setLoading(false);
                    setRunning(true);
                } catch (err) {
                    console.error("Error al cargar el ROM:", err.message);
                    setError("Archivo ROM de NES inválido. Por favor, intenta con un archivo válido.");
                    setLoading(false);
                }
            };
            reader.readAsArrayBuffer(file); // Leer como ArrayBuffer
        }
    };

    // Inicializar el emulador cuando el ROM esté listo
    useEffect(() => {
        if (romData && running) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            // Crear instancia de NES
            const nes = new NES({
                onFrame: (frameBuffer) => {
                    const imageData = context.createImageData(256, 240);
                    for (let i = 0; i < frameBuffer.length; i++) {
                        const pixel = frameBuffer[i];
                        const offset = i * 4;
                        imageData.data[offset] = (pixel >> 16) & 0xff;     // Rojo
                        imageData.data[offset + 1] = (pixel >> 8) & 0xff;  // Verde
                        imageData.data[offset + 2] = pixel & 0xff;         // Azul
                        imageData.data[offset + 3] = 0xff;                 // Alpha
                    }
                    context.putImageData(imageData, 0, 0);
                },
                onStatusUpdate: (status) => console.log(status),
            });

            nesRef.current = nes;

            try {
                nes.loadROM(romData);
            } catch (error) {
                console.error("Error al cargar el ROM:", error.message);
                setError("Archivo ROM de NES inválido.");
                setRunning(false);
                return;
            }

            // Temporizador de frames (aproximadamente 60 FPS)
            const frameInterval = 1000 / 60;
            const frameTimer = setInterval(() => {
                if (running && nesRef.current) {
                    nes.frame();
                }
            }, frameInterval);

            // Limpiar al desmontar el componente
            return () => {
                clearInterval(frameTimer);
                nesRef.current = null;
            };
        }
    }, [romData, running]);

    // Manejar entrada del teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (nesRef.current) {
                switch (e.key) {
                    case 'ArrowUp':
                        nesRef.current.buttonDown(1, 4); // Arriba
                        break;
                    case 'ArrowDown':
                        nesRef.current.buttonDown(1, 5); // Abajo
                        break;
                    case 'ArrowLeft':
                        nesRef.current.buttonDown(1, 6); // Izquierda
                        break;
                    case 'ArrowRight':
                        nesRef.current.buttonDown(1, 7); // Derecha
                        break;
                    case 'z':
                        nesRef.current.buttonDown(1, 0); // Botón A
                        break;
                    case 'x':
                        nesRef.current.buttonDown(1, 1); // Botón B
                        break;
                    case 'Enter':
                        nesRef.current.buttonDown(1, 2); // Start
                        break;
                    case 'Shift':
                        nesRef.current.buttonDown(1, 3); // Select
                        break;
                    default:
                        break;
                }
            }
        };

        const handleKeyUp = (e) => {
            if (nesRef.current) {
                switch (e.key) {
                    case 'ArrowUp':
                        nesRef.current.buttonUp(1, 4);
                        break;
                    case 'ArrowDown':
                        nesRef.current.buttonUp(1, 5);
                        break;
                    case 'ArrowLeft':
                        nesRef.current.buttonUp(1, 6);
                        break;
                    case 'ArrowRight':
                        nesRef.current.buttonUp(1, 7);
                        break;
                    case 'z':
                        nesRef.current.buttonUp(1, 0);
                        break;
                    case 'x':
                        nesRef.current.buttonUp(1, 1);
                        break;
                    case 'Enter':
                        nesRef.current.buttonUp(1, 2);
                        break;
                    case 'Shift':
                        nesRef.current.buttonUp(1, 3);
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [running]);

    // Renderizado del componente
    return (
        <div>
            {loading && <p>Cargando ROM...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!romData && !loading && !error && <p>Selecciona un archivo ROM para comenzar.</p>}
            <canvas
                ref={canvasRef}
                width="256"
                height="240"
                style={{ border: '1px solid black', display: romData ? 'block' : 'none' }}
            />
            <input type="file" accept=".nes" onChange={loadRom} />
        </div>
    );
};

export default NesEmulator;