import { CONFIG } from './config.js';

class SoundManager {
    constructor() {
        this.sounds = new Map();
        this.initialized = false;
    }

    async initialize() {
        if (this.initialized) return;

        try {
            // Precargar todos los sonidos
            for (const [key, filename] of Object.entries(CONFIG.SOUNDS)) {
                const audio = new Audio(`${CONFIG.ASSETS.SOUNDS}/${filename}`);
                audio.volume = 0.5;
                this.sounds.set(key, audio);
            }

            this.initialized = true;
        } catch (error) {
            console.error('Error al inicializar los sonidos:', error);
        }
    }

    play(soundKey) {
        if (!this.initialized) {
            console.warn('SoundManager no está inicializado');
            return;
        }

        const sound = this.sounds.get(soundKey);
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(error => {
                console.error(`Error al reproducir el sonido ${soundKey}:`, error);
            });
        } else {
            console.warn(`Sonido ${soundKey} no encontrado`);
        }
    }

    stop(soundKey) {
        const sound = this.sounds.get(soundKey);
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    }

    stopAll() {
        this.sounds.forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }

    setVolume(volume) {
        if (volume < 0 || volume > 1) return;
        
        this.sounds.forEach(sound => {
            sound.volume = volume;
        });
    }
}

export const soundManager = new SoundManager(); 