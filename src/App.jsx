import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all'
import gsap from 'gsap'         
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


gsap.registerPlugin(ScrollTrigger,SplitText)


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App
