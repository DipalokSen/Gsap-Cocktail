import {React,useState,useRef} from 'react'
import { sliderLists } from '../../Constant'

const Menu = () => {
  
  const [currentIndex, setcurrentIndex] = useState(0);

  const contentRef = useRef();
  
  const gottoSlide=(index)=>{
 
     
    const totalIndex=sliderLists.length

    const newIndex=(index+totalIndex)%totalIndex


    setcurrentIndex(newIndex)





  }

  const getCocktailAt =(index)=>{

    return sliderLists[(currentIndex+index+sliderLists.length)%sliderLists.length]
  }

  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);
  const prevCocktail = getCocktailAt(-1);
    return (
    <section id='menu' aria-labelledby='menu-heading'>
     <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' className='overflow-hidden'/>
     <img src="/images/slider-right-leaf.png" alt="left-leaf" id='m-right-leaf' className='overflow-hidden'/>

    <h2 id='menu-heading' className='sr-only'>
        cock menu
   </h2>
   <nav className='cocktail-tabs' aria-label='cocktail navigation'>
    {sliderLists.map((cocktail,index)=>{
        const isActive=index===currentIndex
        return(
            <button key={cocktail.id} className={`${isActive?'text-white border-white':'text-white/50 border-white/50'} `} onClick={()=>gottoSlide(index)}>
                {cocktail.name}
            </button>
        )
    })}


   </nav>

   <div className="content">
    <div className='arrows'>
        <button className='text-left' onClick={()=>gottoSlide(currentIndex-1)}>
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden={true}/>
        </button>

        <button className='text-left' onClick={()=>gottoSlide(currentIndex+1)}>
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden={true}/>
        </button>
    </div>

    <div className='cocktail'>
        <img src={currentCocktail.image} alt="" className="object-contain" />
    </div>

    <div className="recipe">
        <div ref={contentRef}>
            <p className=''>Recipe For:</p>
            <p id="title">{currentCocktail.name}</p>
        </div>

        <div className='details'>
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
        </div>
    </div>
   </div>
    </section>
  )
}

export default Menu
