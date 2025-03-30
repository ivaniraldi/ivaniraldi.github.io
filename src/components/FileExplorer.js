import WindowComponent from './Window.js';

class FileExplorer extends WindowComponent {
    constructor(id, title, path, files, options = {}) {
        super(id, title, '', options);
        this.path = path;
        this.files = files;
    }

    render() {
        const content = `
            <div class="window-menu">
                <div class="window-menu-item">Archivo</div>
                <div class="window-menu-item">Editar</div>
                <div class="window-menu-item">Ver</div>
                <div class="window-menu-item">Ayuda</div>
            </div>
            <div class="explorer-toolbar">
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_1.ico" alt="Atrás">
                    <span>Atrás</span>
                </div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_2.ico" alt="Adelante">
                    <span>Adelante</span>
                </div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_3.ico" alt="Arriba">
                    <span>Arriba</span>
                </div>
                <div class="explorer-toolbar-separator"></div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_4.ico" alt="Cortar">
                    <span>Cortar</span>
                </div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_5.ico" alt="Copiar">
                    <span>Copiar</span>
                </div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_6.ico" alt="Pegar">
                    <span>Pegar</span>
                </div>
                <div class="explorer-toolbar-separator"></div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_7.ico" alt="Deshacer">
                    <span>Deshacer</span>
                </div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_8.ico" alt="Eliminar">
                    <span>Eliminar</span>
                </div>
                <div class="explorer-toolbar-button">
                    <img src="src/assets/images/w95_9.ico" alt="Propiedades">
                    <span>Propiedades</span>
                </div>
            </div>
            <div class="explorer-address-bar">
                <span class="explorer-address-label">Dirección:</span>
                <input type="text" class="explorer-address-input" value="${this.path}" readonly>
            </div>
            <div class="explorer-content">
                <div class="icon-grid">
                    ${this.files.map(file => `
                        <div class="file-icon">
                            <img src="${file.icon}" alt="${file.name}">
                            <span class="file-name">${file.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="explorer-status-bar">
                ${this.files.length} objeto(s)
            </div>
        `;

        return `
            <div id="${this.id}-window" class="window" style="width: ${this.options.width}; height: ${this.options.height}; top: ${this.options.top}; left: ${this.options.left};">
                <div class="title-bar">
                    <span class="title-bar-text">${this.title}</span>
                    <div class="title-bar-controls">
                        <button class="minimize-btn">_</button>
                        <button class="maximize-btn">□</button>
                        <button class="close-btn">×</button>
                    </div>
                </div>
                <div class="window-content">
                    ${content}
                </div>
            </div>
        `;
    }

    initialize() {
        super.initialize();
        const window = document.getElementById(`${this.id}-window`);
        if (!window) return;

        // Asegurar que la ventana esté visible cuando se hace clic en sus elementos
        window.addEventListener('click', () => {
            window.style.zIndex = '10';
        });
    }
}

export default FileExplorer; 