import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className='pp'>
    <NavBar/>
       <Home/>
       <Skills/>
       <Projects/>
       <About/>
       <Contact/>
       <Footer/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
      </div>
    </>
  );
}

export default App;
