import React from 'react'
import icons from "./../../assets/icons.png"
import settings1 from "./../../assets/settings.png"

export default function Skills() {
  return (
    <section className="w-full bg-none pt-7 pb-7 md:pt-20 md:pb-24">

    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-black-300 border-solid md:flex-row max-w-7xl lg:px-16">

      <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <img src={icons} alt="asd"className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
      </div>

      <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-black-300 lg:text-3xl md:text-2xl">
          Skills:
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-black-700 border-0 border-black-300 sm:pr-12 xl:pr-32 lg:text-lg">

        </p>
        <ul className="p-0 m-0 leading-6 border-0 border-black-300">
          <li className="box-border relative py-1 pl-0 text-left text-black-500 border-solid">
            <span ><span className="text-sm font-bold lg:text-2xl" >  JavaScript - React - Redux - NodeJs - Express - PostgreSQL - Sequelize - CSS - HTML - Git - GitHub - </span></span>
          </li>
        </ul>
      </div>

    </div>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-black-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">


      <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-black-300 lg:text-3xl md:text-2xl">
          My Resume
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-black-700 border-0 border-black-300 sm:pr-10 lg:text-lg">
          Save time and money with my revolutionary services. We can give us a try.
        </p>
        <a href='https://fv9-1.failiem.lv/down.php?cf&i=8nypjn46t&n=Curriculum+Vitae.pdf'><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Download</span>
        </button></a>
      </div>

      <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img src={settings1} alt="asd" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
      </div>
    </div>
  </section>
  )
}
