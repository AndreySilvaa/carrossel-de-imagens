import React, {useState} from 'react'
import './Carosel.css'
import { dataCarousel } from '../helpers/CarouselData'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Carosel = ({item, setItem, category}) => {
    

  return (
    
    <div className='carosel' style={{backgroundImage: `url(${dataCarousel[category][item].img})`}}>
        <div className='carosel-inner'>
            <div className='left'><FaArrowLeft style={{cursor: 'pointer'}} onClick={() => item > 0 && setItem(item-1)}/></div>
            <h1 className='title'><span>{dataCarousel[category][item].Title}</span></h1>
            <div className='rigth'><FaArrowRight style={{cursor: 'pointer'}} onClick={() => item < dataCarousel[category].length-1 && setItem(item+1)}/></div>
            <div className='div-points'>
              {dataCarousel[category].map((obj, i) => (
                <div key={i} className={item === i ? ('marked-point') : ('point')} onClick={() => setItem(i)}></div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Carosel