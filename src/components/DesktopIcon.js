class DesktopIcon {
    constructor(id, name, icon, windowId) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.windowId = windowId;
    }

    render() {
        return `
            <div id="${this.id}" class="icon" data-window="${this.windowId}">
                <img src="${this.icon}" alt="${this.name}">
                <span class="icon-text">${this.name}</span>
            </div>
        `;
    }

    initialize() {
        const iconElement = document.getElementById(this.id);
        if (!iconElement) return;

        iconElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showContextMenu(e.clientX, e.clientY);
        });
    }

    showContextMenu(x, y) {
        const existingMenu = document.querySelector('.context-menu');
        if (existingMenu) existingMenu.remove();

        const menu = document.createElement('div');
        menu.className = 'context-menu';
        menu.style.top = `${y}px`;
        menu.style.left = `${x}px`;
        menu.innerHTML = `
            <div class="context-menu-item" data-action="open">Abrir</div>
            <div class="context-menu-item" data-action="rename">Renombrar</div>
            <div class="context-menu-item" data-action="delete">Eliminar</div>
        `;
        document.body.appendChild(menu);

        menu.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (action === 'open') {
                const windowId = this.windowId;
                const windowElement = document.getElementById(`${windowId}-window`);
                if (windowElement) {
                    windowElement.style.display = 'block';
                    windowElement.style.zIndex = '10';
                }
            } else if (action === 'rename') {
                alert('Renombrar no está implementado.');
            } else if (action === 'delete') {
                document.getElementById(this.id).remove();
            }
            menu.remove();
        });

        document.addEventListener('click', () => menu.remove(), { once: true });
    }
}

export default DesktopIcon;