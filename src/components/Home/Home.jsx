import React from 'react'

export default function Home() {
    return (
        <section className="flex items-center justify-center py-10 text-white bg-none sm:py-16 md:py-24 lg:py-32" >
            <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
                <div className="flex flex-col w-full md:flex-row">
                    <div className="flex justify-between">
                        <h1 className="relative flex flex-col text-4xl font-extrabold text-left text-black">
                            <p>Full Stack</p>
                            <p>web.developer</p>
                        </h1>
                    </div>
                    <div>
                        <img src="https://i.gifer.com/Hihj.gif" alt='asd' className="object-cover mt-3 mr-5 h-80 lg:h-96"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
