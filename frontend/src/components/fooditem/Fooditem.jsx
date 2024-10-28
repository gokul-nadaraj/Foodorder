import React, { useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../../assets/frontend_assets/assets'
import { storeContent } from '../content/Storecontent'

const Fooditem = ({id,name,price,description,image}) => {


const {cartItems,addToCart,removeFromCart,url}=useContext(storeContent)

  return (
    <div className='food-item'>

        <div className='food-item-img-container'>


            <img src={url +"/images/"+image} className='food-item-image' alt="image"/>
        

        {!cartItems[id] ? <img src={assets.add_icon_white} alt='' className='add'  onClick={()=>addToCart(id)}/>
        :<div className='food-item-counter'>
        
        <img src={assets.remove_icon_red} alt="image" onClick={()=>removeFromCart(id)} />
        <p>{cartItems[id]}</p>
        <img src={assets.add_icon_green}alt="image" onClick={()=>addToCart(id) }/>
        </div>
}
</div>

<div className="food-item-info">

    <div className="food-item-name-rating">
        <p>{name}</p>

        <img src={assets.rating_starts} alt="image" />

    </div>
    <p className="food-item-desc">{description}</p>

<p className="food-item-price">${price}</p>



</div>

  </div>
  )
}

export default Fooditem