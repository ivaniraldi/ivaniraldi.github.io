import React from 'react'

export default function NavBar() {
    return (
        <section id="head" className="w-full px-8 text-black-700 bg-none" >
            <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <div className="relative flex flex-col md:flex-row">
                    <a href="#head" className="flex items-center mb-5 font-medium text-black-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <span className="mx-auto text-xl font-black leading-none text-black-900 select-none">Ivan Iraldi<span className="text-indigo-600">.</span>
                        </span>
                    </a>
                    <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-black-200">
                        <a href="#about" className="mr-5 font-medium leading-6 text-black-600 hover:text-black-900">About</a>
                        <a href="#projects" className="mr-5 font-medium leading-6 text-black-600 hover:text-black-900">Projects</a>
                        <a href="#contact" className="mr-5 font-medium leading-6 text-black-600 hover:text-black-900">Contact</a>
                    </nav>
                </div>
            </div>
        </section>
    )
}
