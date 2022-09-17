import React, {useState} from 'react'
import { categoryData } from '../helpers/CategoryData'
import {FaThList} from "react-icons/fa";
import {FaTimes} from "react-icons/fa"


// CSS
import './SideBar.css'

const SideBar = ({item, setCategory, category}) => {
    const [navBar, setNavBar] = useState(true)
    
    function changeCarosel(i){
        setCategory(i)
        item(0)
    }

  return (
    <div className='sidebar' id={navBar ? ('') : ('hide')}>
        <div className='iconNav' onClick={() => setNavBar(!navBar)}>{navBar ? <FaTimes/> : <FaThList/>}</div>
        <div>
            <ul>
                {categoryData.map((item, i) => (
                    <li key={i} className='item' onClick={() => changeCarosel(i)} style={categoryData[category].name === item.name ? {backgroundColor: '#ff0000b5', boxShadow:'1px 1px 0px 0px gray', transform: 'translateY(5px)'} : {}}>
                        {console.log(categoryData[category].name, item.name)}
                        <div className='icon'>{item.icon}</div> <div className='itemName'>{item.name}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SideBar