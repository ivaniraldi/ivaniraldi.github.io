import { taskbar } from '../js/taskbar.js';

class WindowComponent {
    constructor(id, title, content, options = {}) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.options = {
            width: options.width || '400px',
            height: options.height || '300px',
            top: options.top || '50px',
            left: options.left || '50px',
            ...options
        };
    }

    render() {
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
                    ${this.content}
                </div>
            </div>
        `;
    }

    initialize() {
        const window = document.getElementById(`${this.id}-window`);
        if (!window) return;

        const titleBar = window.querySelector('.title-bar');
        const minimizeBtn = window.querySelector('.minimize-btn');
        const maximizeBtn = window.querySelector('.maximize-btn');
        const closeBtn = window.querySelector('.close-btn');

        // Manejar arrastre de ventana
        let isDragging = false;
        let startX, startY, initialX, initialY;

        titleBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialX = window.offsetLeft;
            initialY = window.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            window.style.left = `${initialX + dx}px`;
            window.style.top = `${initialY + dy}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Manejar botones de control
        minimizeBtn.addEventListener('click', () => {
            window.style.display = 'none';
            taskbar.removeWindow(this.id);
        });

        maximizeBtn.addEventListener('click', () => {
            if (window.classList.contains('maximized')) {
                window.classList.remove('maximized');
                window.style.width = this.options.width;
                window.style.height = this.options.height;
                window.style.top = this.options.top;
                window.style.left = this.options.left;
            } else {
                window.classList.add('maximized');
                window.style.width = '100%';
                window.style.height = '100%';
                window.style.top = '0';
                window.style.left = '0';
            }
        });

        closeBtn.addEventListener('click', () => {
            window.style.display = 'none';
            taskbar.removeWindow(this.id);
        });

        // Manejar clic en la ventana
        window.addEventListener('click', () => {
            window.style.zIndex = '10';
        });

        // Manejar redimensionamiento
        let isResizing = false;
        let startWidth, startHeight;

        window.addEventListener('mousedown', (e) => {
            if (e.target === window) {
                isResizing = true;
                startWidth = window.offsetWidth;
                startHeight = window.offsetHeight;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            
            const width = startWidth + (e.clientX - startX);
            const height = startHeight + (e.clientY - startY);
            
            window.style.width = `${width}px`;
            window.style.height = `${height}px`;
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
        });
    }
}

export default WindowComponent; 