import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all'
import gsap from 'gsap'         
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CocktailSection from './Components/CocktailSection'
import About from './Components/About'
import Art from './Components/Art'
import Menu from './Components/Menu'


gsap.registerPlugin(ScrollTrigger,SplitText)


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      
      
      <CocktailSection/>

      <About/>
      <Art/>
    <Menu/>
      
    </main>
  )
}

export default App
