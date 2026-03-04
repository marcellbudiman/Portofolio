import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  }, []);

  useEffect (() => {
    AOS.refresh()
  },[darkMode])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={
      darkMode
        ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
        : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />

      <Hero darkMode={darkMode}/>

      <About darkMode={darkMode}/>

      <Project darkMode={darkMode}/>

      <Contact darkMode={darkMode}/>
    </div>
  );
};

export default App