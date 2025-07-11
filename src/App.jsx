import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all'
import gsap from 'gsap'         
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CocktailSection from './Components/CocktailSection'


gsap.registerPlugin(ScrollTrigger,SplitText)


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      
      
      <CocktailSection/>
    </main>
  )
}

export default App
