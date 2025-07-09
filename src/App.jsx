import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all'
import gsap from 'gsap'         


gsap.registerPlugin(ScrollTrigger,SplitText)


const App = () => {
  return (
    <div className='flex-center'>
      <h1 className='text-3xl'>hello Gpasp</h1>
    </div>
  )
}

export default App
