import React from 'react'
import { cocktailLists, mockTailLists } from '../../Constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CocktailSection = () => {
 
 
 useGSAP(()=>{
  
    const paraTimeline=gsap.timeline({
        scrollTrigger:{
            trigger:'#cocktails',
            start:'top 30%',
            end:'bottom 80%',
            scrub:true
        }
    })


    paraTimeline.from('#c-left-leaf',{
        x:-100,
        y:100
    })

    paraTimeline.from('#c-right-leaf',{
        x:100,
        y:100
    })



 })
 
 
 
    return (
    <section className='noisy' id='cocktails'>

        <img src="/images/cocktail-left-leaf.png" alt="" id='c-left-leaf'/>
    <img src="/images/cocktail-right-leaf.png" alt="" id='c-right-leaf'/>


    <div className="list">
        <div className="popular">
            <h2>Most Popular Cocktails:</h2>

            <ul>
                {cocktailLists.map((cock)=>(
                    <li key={cock.name}>
                        <div className='md:me-28'>
                            <h3>{cock.name}</h3>
                            <p>{cock.detail}</p>

                        </div>
                        <span>{cock.price}</span>
                    </li>
                ))}
            </ul>
        </div>



        <div className="popular">
            <h2>Most Popular Mocktails:</h2>

            <ul>
                {mockTailLists.map((mock)=>(
                    <li key={mock.name}>
                        <div className='md:me-28'>
                            <h3>{mock.name}</h3>
                            <p>{mock.detail}</p>

                        </div>
                        <span>{mock.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>




    
    
    </section>
  )
}

export default CocktailSection
