import React from 'react'
import "./Projects.css"
export default function Projects() {
    return (
        <section className="py-20 bg-none" id='projects'>
            <div className="container max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight text-center">My projects</h2>
                <p className="mt-2 text-lg text-center text-black-600"></p>
                <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0" >

                    <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl" id='p1'>
                        <div className="p-3 text-white bg-blue-500 rounded-full">
                            <a href='https://touristicgate.vercel.app/' target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M8 9l3 3l-3 3"></path>
                                    <line x1="13" y1="15" x2="16" y2="15"></line>
                                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                </svg>
                            </a>
                        </div>
                        <h4 className="text-xl font-medium text-black-700">touristicGate🚀</h4>
                        <p className="text-xl text-center text-black-500">A Single page app that can be used to create a touristic activity for any country you want.</p>
                    </div>

                    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4  sm:rounded-xl" id='p3'>
                        <div className="p-3 text-white bg-blue-500 rounded-full">
                            <a href='https://github.com/ivaniraldi/TyrGaming' target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M8 9l3 3l-3 3"></path>
                                    <line x1="13" y1="15" x2="16" y2="15"></line>
                                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                </svg>
                            </a>
                        </div>
                        <h4 className="text-xl font-medium text-black-700">TyrGaming🎮</h4>
                        <p className="text-xl text-center text-black-500">Another SPA created to view games caratules and create your own one, still on development.</p>
                    </div>
                    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 - sm:rounded-xl" id='p2'>
                        <div className="p-3 text-white bg-blue-500 rounded-full">
                            <a href='https://woofizy.vercel.app/' target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M8 9l3 3l-3 3"></path>
                                    <line x1="13" y1="15" x2="16" y2="15"></line>
                                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                </svg>
                            </a>
                        </div>
                        <h4 className="text-xl font-medium text-black-700">🐶woofizy</h4>
                        <p className="text-xl text-center text-black-500">An app where you can search, filtrate, order and create dogs breeds, consume an API.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
