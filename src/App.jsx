import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all'
import gsap from 'gsap'         
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CocktailSection from './Components/CocktailSection'
import About from './Components/About'
import Art from './Components/Art'


gsap.registerPlugin(ScrollTrigger,SplitText)


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      
      
      <CocktailSection/>

      <About/>
      <Art/>

      <div className='h-screen bg-red-200'></div>
    </main>
  )
}

export default App
