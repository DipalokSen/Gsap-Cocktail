import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const videoref=useRef();

 const isMobile=useMediaQuery({maxWidth:767})
 useGSAP(()=>{

   const heroSplit= new SplitText('.title',{type:'chars,words'})
   const paragraphSplit= new SplitText('.subtitle',{type:'lines'})

   heroSplit.chars.forEach((char) => 
    char.classList.add('text-gradient')
   );


   gsap.from(heroSplit.chars,{
    yPercent:100,
    duration:1.8,
    ease:'expo.out',
    stagger:0.06

   })


gsap.from(paragraphSplit.lines,{
    opacity:0,
    yPercent:100,
    duration:1.8,
    stagger:0.05,
    ease:'expo.out',
    delay:1
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#hero",
        start:'top top',
        end:'bottom top',
        scrub:true
    }
}).to('.right-leaf',{y: 200}, 0)
.to('.left-leaf',{y: -200}, 0)


  const startValue=isMobile?'top 50%':'center 60%'
  const endValue= isMobile?'120% top':'bottom top'

  const tl=gsap.timeline({
    scrollTrigger:{
      trigger:"video",
      start:startValue,
      end:endValue,
      scrub:true,
      pin:true,
    }
  })

  videoref.current.onloadedmetadata=()=>{
    tl.to(videoref.current,{
        currentTime:videoref.current.duration
    })
  }

 },[])
 



 
    return (
    <>
    
    <section className='noisy' id='hero'>

        <h1 className='title'>MOJITO</h1> 

        <img src="images/hero-left-leaf.png" alt="" className='left-leaf'/>

        <img src="images/hero-right-leaf.png" alt="" className='right-leaf'/>


        <div className="body">
            <div className="content">
           <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic</p>
            <p className="subtitle">Sip The Spirit Of <br/>Summer </p>
           </div>

           <div className="view-cocktails">
            <p className="subtitle">
                Every Cocktail On our Menu Is a Blend Of Premium Ingridents, Creative, Flair, and Timeless Recipes - Desigend to delight your senses
            </p>
            <a href="#cocktails">view cocktails</a>
            
           </div>
            </div>
        </div>
    </section>
  <div className="video absolute inset-1">
    <video src="/videos/output.mp4"
    
    ref={videoref}
    playsInline
    muted
    preload='auto'
    
    />
    
  </div>
    </>
  )
}

export default Hero
