import { soundManager } from './sounds.js';
import { CONFIG } from './config.js';

class Taskbar {
    constructor() {
        this.windows = new Map();
        this.isStartMenuOpen = false;
        this.initialize();
    }

    initialize() {
        // Crear la barra de tareas
        const taskbar = document.createElement('div');
        taskbar.className = 'taskbar';
        taskbar.innerHTML = `
            <div class="start-button">
                <img src="${CONFIG.ASSETS.IMAGES}/w95_40.ico" alt="Start">
                <span class="start-text">Inicio</span>
            </div>
            <div class="taskbar-divider"></div>
            <div class="taskbar-items"></div>
            <div class="taskbar-time"></div>
        `;
        document.body.appendChild(taskbar);

        // Crear el menú inicio
        const startMenu = document.createElement('div');
        startMenu.className = 'start-menu';
        startMenu.innerHTML = `
            <div class="start-menu-header">
                <span class="start-menu-header-text">Windows 95</span>
            </div>
            <div class="start-menu-items">
                <div class="start-menu-item" data-action="profile">
                    <img src="${CONFIG.ASSETS.IMAGES}/w98_address_book_user.ico" alt="Mi Perfil">
                    <span>Mi Perfil</span>
                </div>
                <div class="start-menu-item" data-action="portfolio">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_59.ico" alt="Portafolio">
                    <span>Portafolio</span>
                </div>
                <div class="start-menu-item" data-action="company">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_42.ico" alt="Webrush">
                    <span>Webrush</span>
                </div>
                <div class="start-menu-item" data-action="mypc">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_16.ico" alt="Mi PC">
                    <span>Mi PC</span>
                </div>
                <div class="start-menu-item" data-action="documents">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_21.ico" alt="Mis Documentos">
                    <span>Mis Documentos</span>
                    <span class="start-menu-submenu-arrow">▶</span>
                </div>
                <div class="start-menu-item" data-action="printers">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_17.ico" alt="Impresoras">
                    <span>Impresoras</span>
                </div>
                <div class="start-menu-divider"></div>
                <div class="start-menu-item" data-action="shutdown">
                    <img src="${CONFIG.ASSETS.IMAGES}/w98_shut_down_with_computer.ico" alt="Apagar">
                    <span>Apagar</span>
                </div>
            </div>
        `;
        document.body.appendChild(startMenu);

        // Crear el submenú de Mis Documentos
        const documentsSubmenu = document.createElement('div');
        documentsSubmenu.className = 'start-menu';
        documentsSubmenu.style.left = '210px';
        documentsSubmenu.style.display = 'none';
        documentsSubmenu.innerHTML = `
            <div class="start-menu-items">
                <div class="start-menu-item" data-action="documents-curriculum">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_21.ico" alt="Curriculum">
                    <span>Curriculum.doc</span>
                </div>
                <div class="start-menu-item" data-action="documents-proyectos">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_21.ico" alt="Proyectos">
                    <span>Proyectos.xls</span>
                </div>
                <div class="start-menu-item" data-action="documents-notas">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_21.ico" alt="Notas">
                    <span>Notas.txt</span>
                </div>
                <div class="start-menu-item" data-action="documents-presentacion">
                    <img src="${CONFIG.ASSETS.IMAGES}/w95_21.ico" alt="Presentación">
                    <span>Presentación.ppt</span>
                </div>
            </div>
        `;
        document.body.appendChild(documentsSubmenu);

        // Eventos
        const startButton = taskbar.querySelector('.start-button');
        startButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleStartMenu();
        });

        // Manejar el submenú de Mis Documentos
        const documentsItem = startMenu.querySelector('[data-action="documents"]');
        let submenuTimeout;

        documentsItem.addEventListener('mouseenter', () => {
            clearTimeout(submenuTimeout);
            const rect = documentsItem.getBoundingClientRect();
            documentsSubmenu.style.top = `${rect.top}px`;
            documentsSubmenu.style.display = 'block';
        });

        documentsItem.addEventListener('mouseleave', () => {
            submenuTimeout = setTimeout(() => {
                documentsSubmenu.style.display = 'none';
            }, 100);
        });

        documentsSubmenu.addEventListener('mouseenter', () => {
            clearTimeout(submenuTimeout);
        });

        documentsSubmenu.addEventListener('mouseleave', () => {
            documentsSubmenu.style.display = 'none';
        });

        startMenu.querySelectorAll('.start-menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = item.dataset.action;
                if (action === 'shutdown') {
                    window.location.href = 'shutdown.html';
                } else if (action.startsWith('documents-')) {
                    const docType = action.split('-')[1];
                    this.handleStartMenuItem('documents');
                } else {
                    this.handleStartMenuItem(action);
                }
            });
        });

        // Actualizar reloj
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);

        // Cerrar menú inicio al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!startMenu.contains(e.target) && !startButton.contains(e.target) && !documentsSubmenu.contains(e.target)) {
                this.closeStartMenu();
                documentsSubmenu.style.display = 'none';
            }
        });
    }

    addWindow(windowId, title) {
        if (this.windows.has(windowId)) {
            this.updateWindow(windowId, title);
            return;
        }

        const taskbarItems = document.querySelector('.taskbar-items');
        const item = document.createElement('div');
        item.className = 'taskbar-item';
        item.dataset.window = windowId;
        item.innerHTML = `
            <img src="${CONFIG.ASSETS.IMAGES}/w95_1.ico" alt="${title}">
            <span>${title}</span>
        `;

        item.addEventListener('click', () => this.toggleWindow(windowId));
        taskbarItems.appendChild(item);
        this.windows.set(windowId, item);
        soundManager.play('CLICK');
    }

    updateWindow(windowId, title) {
        const item = this.windows.get(windowId);
        if (item) {
            item.querySelector('span').textContent = title;
            item.classList.add('active');
        }
    }

    removeWindow(windowId) {
        const item = this.windows.get(windowId);
        if (item) {
            item.remove();
            this.windows.delete(windowId);
        }
    }

    toggleWindow(windowId) {
        const item = this.windows.get(windowId);
        if (item) {
            const window = document.getElementById(`${windowId}-window`);
            if (window) {
                const isVisible = window.style.display === 'block';
                window.style.display = isVisible ? 'none' : 'block';
                item.classList.toggle('active', !isVisible);
                soundManager.play('CLICK');
            }
        }
    }

    toggleStartMenu() {
        const startMenu = document.querySelector('.start-menu');
        const startButton = document.querySelector('.start-button');
        
        if (this.isStartMenuOpen) {
            startMenu.style.display = 'none';
            startButton.classList.remove('active');
        } else {
            startMenu.style.display = 'block';
            startButton.classList.add('active');
        }
        
        this.isStartMenuOpen = !this.isStartMenuOpen;
        soundManager.play('CLICK');
    }

    closeStartMenu() {
        if (this.isStartMenuOpen) {
            const startMenu = document.querySelector('.start-menu');
            const startButton = document.querySelector('.start-button');
            startMenu.style.display = 'none';
            startButton.classList.remove('active');
            this.isStartMenuOpen = false;
        }
    }

    handleStartMenuItem(action) {
        this.closeStartMenu();
        const window = document.getElementById(`${action}-window`);
        if (window) {
            window.style.display = 'block';
            window.style.zIndex = '10';
            this.addWindow(action, window.querySelector('.title-bar-text').textContent);
        }
    }

    handleShutdown() {
        this.closeStartMenu();
        soundManager.play('SHUTDOWN');
        // Aquí puedes agregar la lógica de apagado
        setTimeout(() => {
            alert('Apagando Windows 95...');
        }, 1000);
    }

    updateClock() {
        const timeElement = document.querySelector('.taskbar-time');
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}

export const taskbar = new Taskbar(); 