import { CONFIG } from './config.js';
import { soundManager } from './sounds.js';
import { contextMenu } from './contextMenu.js';
import { taskbar } from './taskbar.js';

// Clase principal para manejar la aplicación
class Windows95App {
    constructor() {
        this.windows = new Map();
        this.activeWindow = null;
        this.zIndex = 10;
        this.initialize();
    }

    async initialize() {
        try {
            // Inicializar el sistema de sonido
            await soundManager.initialize();

            // Inicializar el menú contextual
            contextMenu.initialize();

            // Inicializar la barra de tareas
            taskbar.initialize();

            // Inicializar eventos
            this.initializeEventListeners();

            // Intentar reproducir el sonido de inicio
            try {
                await soundManager.play('STARTUP');
            } catch (error) {
                console.warn('No se pudo reproducir el sonido de inicio:', error);
            }
        } catch (error) {
            console.error('Error al inicializar la aplicación:', error);
        }
    }

    initializeEventListeners() {
        // Manejar clic en iconos del escritorio
        document.addEventListener('click', (e) => {
            const iconElement = e.target.closest('.icon');
            if (iconElement) {
                const windowId = iconElement.dataset.window;
                if (windowId) {
                    this.showWindow(windowId);
                }
            }
        });

        // Manejar clic en botones de ventana
        document.addEventListener('click', (e) => {
            const button = e.target.closest('.button');
            if (button && button.dataset.window) {
                this.showWindow(button.dataset.window);
            }
        });

        // Manejar clic en elementos de FileExplorer
        document.addEventListener('click', (e) => {
            const fileIcon = e.target.closest('.file-icon');
            if (fileIcon) {
                const fileName = fileIcon.querySelector('.file-name').textContent;
                const parentWindow = fileIcon.closest('.window');
                if (parentWindow) {
                    const windowId = parentWindow.id.replace('-window', '');
                    this.handleFileClick(fileName, windowId);
                }
            }
        });
    }

    showWindow(windowId) {
        const window = document.getElementById(`${windowId}-window`);
        if (window) {
            window.style.display = 'block';
            window.style.zIndex = this.zIndex++;
            const titleBar = window.querySelector('.title-bar-text');
            if (titleBar) {
                taskbar.addWindow(windowId, titleBar.textContent);
            }
        }
    }

    handleFileClick(fileName, windowId) {
        if (fileName === 'Impresoras') {
            window.print();
        } else if (fileName === 'pagina_web.html') {
            window.open('https://webrushbrasil.com.br', '_blank');
        } else if (fileName === '(C:) Disco duro') {
            this.showWindow('mypc');
        } else if (fileName === '(E:) Disco Extraible') {
            this.showWindow('mypc');
        } else if (fileName === '(A:) Disquete') {
            this.showWindow('mypc');
        } else if (fileName === 'curriculum.doc') {
            this.showWindow('documents');
        } else if (fileName === 'proyectos.xls') {
            this.showWindow('documents');
        } else if (fileName === 'notas.txt') {
            this.showWindow('documents');
        } else if (fileName === 'presentacion.ppt') {
            this.showWindow('documents');
        }
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Windows95App();
}); 