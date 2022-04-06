import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <section className="bg-none" id='footer'>
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a href="#about" className="text-base leading-6 text-black-500 hover:text-black-900">
                            About
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#projects" className="text-base leading-6 text-black-500 hover:text-black-900">
                            Projects
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="#contact" className="text-base leading-6 text-black-500 hover:text-black-900">
                            Contact
                        </a>
                    </div>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://www.facebook.com/profile.php?id=100071325024533" className="text-black-400 hover:text-black-500" target="_blank" rel="noreferrer">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                    </a>

                    <a href="https://github.com/ivaniraldi" className="text-black-400 hover:text-black-500" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                    </a>

                    <a href="https://linkedin/in/ivaniraldi" className="text-black-400 hover:text-black-500" target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                    </a>


                </div>
                <p className="mt-8 text-base leading-6 text-center text-black-400">
                    © 2022 Ivan Iraldi.
                </p>

            </div>
                    <a href="https://wa.me/+541137574004" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-whatsapp whatsapp-icon"></i>
                    </a>
        </section>
    )
}
