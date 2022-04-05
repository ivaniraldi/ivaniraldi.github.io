import logo from './logo.svg';
import icons from "./icons.png"
import settings1 from "./settings.png"
import './App.css';

function App() {
  return (
    <>

      <div className='pp'> 
        <section id="head" class="w-full px-8 text-black-700 bg-none">
          <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div class="relative flex flex-col md:flex-row">
              <a href="#head" class="flex items-center mb-5 font-medium text-black-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="mx-auto text-xl font-black leading-none text-black-900 select-none">Ivan Iraldi<span class="text-indigo-600">.</span></span>
              </a>
              <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-black-200">
                <a href="#about" class="mr-5 font-medium leading-6 text-black-600 hover:text-black-900">About</a>
                <a href="#projects" class="mr-5 font-medium leading-6 text-black-600 hover:text-black-900">Projects</a>
                <a href="#contact" class="mr-5 font-medium leading-6 text-black-600 hover:text-black-900">Contact</a>
              </nav>
            </div>
          </div>
        </section>


        <section class="flex items-center justify-center py-10 text-white bg-none sm:py-16 md:py-24 lg:py-32">
          <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
            <div class="flex flex-col w-full md:flex-row"
            >
 
              <div class="flex justify-between" >
                <h1 class="relative flex flex-col text-4xl font-extrabold text-left text-black"> 
                <p >Full Stack</p>
                  <p>web.developer</p>
                </h1>
              </div>

              <div >
                <img src="https://i.gifer.com/Hihj.gif" class="object-cover mt-3 mr-5 h-80 lg:h-96" />
              </div>
            </div>


            <h2 class="text-left text-black-500 xl:text-xl"></h2>
          </div>
        </section>

        <section class="w-full bg-none pt-7 pb-7 md:pt-20 md:pb-24">

          <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-black-300 border-solid md:flex-row max-w-7xl lg:px-16">

            <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <img src={icons} class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
            </div>

            <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-black-300 lg:text-3xl md:text-2xl">
                Skills:
              </h2>
              <p class="pt-4 pb-8 m-0 leading-7 text-black-700 border-0 border-black-300 sm:pr-12 xl:pr-32 lg:text-lg">
               
              </p>
              <ul class="p-0 m-0 leading-6 border-0 border-black-300">
                <li class="box-border relative py-1 pl-0 text-left text-black-500 border-solid">
                  <span ><span class="text-sm font-bold lg:text-2xl" >  JavaScript - React - Redux - NodeJs - Express - PostgreSQL - Sequelize - CSS - HTML - Git - GitHub - </span></span>
                </li>
              </ul>
            </div>

          </div>
          <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-black-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">


            <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-black-300 lg:text-3xl md:text-2xl">
                My Resume
              </h2>
              <p class="pt-4 pb-8 m-0 leading-7 text-black-700 border-0 border-black-300 sm:pr-10 lg:text-lg">
                Save time and money with my revolutionary services. We can give us a try.
              </p>
              <a href='https://fv9-1.failiem.lv/down.php?cf&i=8nypjn46t&n=Curriculum+Vitae.pdf'><button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button></a>
            </div>

            <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <img src={settings1} class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
            </div>
          </div>
        </section>
        <section class="py-20 bg-none" id='projects'>
    <div class="container max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight text-center">My projects</h2>
        <p class="mt-2 text-lg text-center text-black-600"></p>
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-black sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <a href='https://touristicgate.vercel.app/'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                </a>
                </div>
                <h4 class="text-xl font-medium text-gray-700">touristicGate🚀</h4>
                <p class="text-base text-center text-gray-500">A Single page app that can be used to create a touristic activity for any countrie you want.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-black sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
            <a href='https://woofizy.vercel.app/'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                </a>
                </div>
                <h4 class="text-xl font-medium text-gray-700">🐶woofizy</h4>
                <p class="text-base text-center text-gray-500">An app where you can search, filtrate, order and create dogs breeds, consume an API.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-black sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
            <a href='https://github.com/ivaniraldi/TyrGaming'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                </a>
                </div>
                <h4 class="text-xl font-medium text-gray-700">TyrGaming🎮</h4>
                <p class="text-base text-center text-gray-500">Another SPA created to view games caratules and create your own one, still on development.</p>
            </div>
        </div>
    </div>
</section>
        
        <section id='about' class="py-20 bg-black-50">
          <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
            <div class="flex flex-wrap items-center -mx-3">
              <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                <div class="w-full lg:max-w-md">
                  <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools needed to succeed!</h2>
                  <p class="mb-4 font-medium tracking-tight text-black-400 xl:mb-6">Im a pro-active person that works perfectly on team or at single, im empatic and curious, i can handle the changes with a possitive attitude.
I consideer teamwork and honestity as great values.
Im on the way to learn many more skills and habilities, to travel and know everything that appasionates me.</p>
                  <ul>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                      <svg class="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                      <span class="font-medium text-black-500">Fast working and delivery.</span>
                    </li>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                      <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                      <span class="font-medium text-black-500">Out of the Box thinking.</span>
                    </li>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                      <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      <span class="font-medium text-black-500">100% trustworthy and friendly.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://i.gifer.com/XOsa.gif" alt="feature image" /></div>
            </div>
          </div>
        </section>


        <section class="bg-none" id='contact'>
          <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
              <div class="px-5 py-2">
                <a href="#about" class="text-base leading-6 text-black-500 hover:text-black-900">
                  About
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#projects" class="text-base leading-6 text-black-500 hover:text-black-900">
                  Projects
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-black-500 hover:text-black-900">
                  Team
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#contact" class="text-base leading-6 text-black-500 hover:text-black-900">
                  Contact
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-black-500 hover:text-black-900">
                  Terms
                </a>
              </div>
            </nav>
            <div class="flex justify-center mt-8 space-x-6">
              <a href="https://www.facebook.com/profile.php?id=100071325024533" class="text-black-400 hover:text-black-500">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
              </a>
    
              <a href="https://github.com/ivaniraldi" class="text-black-400 hover:text-black-500">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-black-400">
              © 2022 Ivan Iraldi.
            </p>
          </div>
        </section>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
      </div>
    </>
  );
}

export default App;
