import React, { useContext } from 'react'
import './Cart.css'
import { storeContent } from '../../components/content/Storecontent'
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list,  removeFromCart,getTotalCart,url} = useContext(storeContent);

  const navigate = useNavigate()




  return (
    <div className='cart'>

      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qunaity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                         <div className='cart-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt="image"/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className="cross" onClick={()=> removeFromCart(item._id)}>X</p>


              </div>
              <hr/>
              
              </div>
     
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery free</p>
              <p>${getTotalCart()===0?0:2}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCart()===0?0:getTotalCart()+2}</b>
            </div>
           
          </div>
          <button onClick ={()=>navigate('/order')}>Proced To CHECKOUT</button>
        </div>

<div className="cart-promocode">
  <div>
    <p>If You Have a promo code Enter it here</p>
    <div className="cart-promocode-input">
      <input type="text" placeholder="Promo code" />
      <button>Submit</button>
    </div>

  </div>
</div>
      </div>
    </div>
  )
}

export default Cart