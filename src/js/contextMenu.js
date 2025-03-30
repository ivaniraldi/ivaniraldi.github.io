import { soundManager } from './sounds.js';

class ContextMenu {
    constructor() {
        this.menu = null;
        this.initialize();
    }

    initialize() {
        // Crear el menú contextual
        this.menu = document.createElement('div');
        this.menu.className = 'context-menu';
        document.body.appendChild(this.menu);

        // Manejar clic derecho en el escritorio
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const target = e.target;
            
            // Si el clic fue en el escritorio
            if (target.closest('.desktop')) {
                this.showDesktopMenu(e.clientX, e.clientY);
            }
            // Si el clic fue en un icono
            else if (target.closest('.icon')) {
                this.showIconMenu(e.clientX, e.clientY, target.closest('.icon'));
            }
            // Si el clic fue en un archivo
            else if (target.closest('.file-icon')) {
                this.showFileMenu(e.clientX, e.clientY, target.closest('.file-icon'));
            }
        });

        // Cerrar el menú al hacer clic
        document.addEventListener('click', () => {
            this.hide();
        });
    }

    showDesktopMenu(x, y) {
        this.menu.innerHTML = `
            <div class="context-menu-item">Nuevo</div>
            <div class="context-menu-item">Organizar iconos</div>
            <div class="context-menu-item">Actualizar</div>
            <div class="context-menu-divider"></div>
            <div class="context-menu-item">Propiedades</div>
        `;

        this.show(x, y);
    }

    showIconMenu(x, y, icon) {
        const windowId = icon.dataset.window;
        this.menu.innerHTML = `
            <div class="context-menu-item" data-action="open">Abrir</div>
            <div class="context-menu-item" data-action="create-shortcut">Crear acceso directo</div>
            <div class="context-menu-item" data-action="delete">Eliminar</div>
            <div class="context-menu-divider"></div>
            <div class="context-menu-item" data-action="properties">Propiedades</div>
        `;

        this.show(x, y);

        // Manejar acciones del menú
        this.menu.querySelectorAll('.context-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                switch (action) {
                    case 'open':
                        const window = document.getElementById(`${windowId}-window`);
                        if (window) {
                            window.style.display = 'block';
                            window.style.zIndex = '10';
                            taskbar.addWindow(windowId, window.querySelector('.title-bar-text').textContent);
                        }
                        break;
                    case 'create-shortcut':
                        alert('Acceso directo creado');
                        break;
                    case 'delete':
                        if (confirm('¿Estás seguro de que deseas eliminar este icono?')) {
                            icon.remove();
                        }
                        break;
                    case 'properties':
                        alert('Propiedades del icono');
                        break;
                }
                this.hide();
            });
        });
    }

    showFileMenu(x, y, file) {
        const fileName = file.querySelector('.file-name').textContent;
        this.menu.innerHTML = `
            <div class="context-menu-item" data-action="open">Abrir</div>
            <div class="context-menu-item" data-action="edit">Editar</div>
            <div class="context-menu-item" data-action="copy">Copiar</div>
            <div class="context-menu-item" data-action="cut">Cortar</div>
            <div class="context-menu-item" data-action="delete">Eliminar</div>
            <div class="context-menu-divider"></div>
            <div class="context-menu-item" data-action="properties">Propiedades</div>
        `;

        this.show(x, y);

        // Manejar acciones del menú
        this.menu.querySelectorAll('.context-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                switch (action) {
                    case 'open':
                        // Manejar la apertura según el tipo de archivo
                        if (fileName === 'Impresoras') {
                            window.print();
                        } else if (fileName === 'pagina_web.html') {
                            window.open('https://webrushbrasil.com.br', '_blank');
                        } else if (fileName === '(C:) Disco duro') {
                            const window = document.getElementById('mypc-window');
                            if (window) {
                                window.style.display = 'block';
                                window.style.zIndex = '10';
                                taskbar.addWindow('mypc', window.querySelector('.title-bar-text').textContent);
                            }
                        } else if (fileName === 'curriculum.doc') {
                            const window = document.getElementById('documents-window');
                            if (window) {
                                window.style.display = 'block';
                                window.style.zIndex = '10';
                                taskbar.addWindow('documents', window.querySelector('.title-bar-text').textContent);
                            }
                        }
                        break;
                    case 'edit':
                        alert('Editar archivo');
                        break;
                    case 'copy':
                        alert('Archivo copiado');
                        break;
                    case 'cut':
                        alert('Archivo cortado');
                        break;
                    case 'delete':
                        if (confirm('¿Estás seguro de que deseas eliminar este archivo?')) {
                            file.remove();
                        }
                        break;
                    case 'properties':
                        alert('Propiedades del archivo');
                        break;
                }
                this.hide();
            });
        });
    }

    show(x, y) {
        this.menu.style.display = 'block';
        this.menu.style.left = `${x}px`;
        this.menu.style.top = `${y}px`;
    }

    hide() {
        this.menu.style.display = 'none';
    }
}

export const contextMenu = new ContextMenu(); 