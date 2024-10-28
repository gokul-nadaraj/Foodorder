import React from 'react'
import  './Exploremenu.css'

import { menu_list } from '../../../assets/frontend_assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">

<h1>Explore Our Menu</h1>
<p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafetd with the finest ingredients and culinary experise.Our mission is to satisfy Your cravings and elevate your dining experience ,one delicious meal at a time</p>
<div className="explore-menu-list">

    {menu_list.map((item,index)=>{
        return(
            <div key={index} className='explore-menu-list-item' onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
<img src={item.menu_image} alt="menu" className={category === item.menu_name?"active":""}/>
<p>{item.menu_name}</p>

                </div>
        )
    })}
</div>
<hr/>
    </div>
  )
}

export default Exploremenu