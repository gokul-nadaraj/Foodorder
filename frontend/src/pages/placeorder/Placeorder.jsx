import React, { useContext,  useEffect,  useState } from 'react'
import './Placeorder.css'
import { storeContent } from '../../components/content/Storecontent'

import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
const Placeorder = () => {

  const {getTotalCart,token,food_list,cartItems,url}=useContext(storeContent)

const [data,setData] =useState({
  firstName:"",
  lastName:'',
  email:'',
  street:'',
  city:'',
  state:'',
  zipcode:'',
  country:'',
  phone:''

})

const Onchangehandler= (e)=>{
  const name = e.target.name;
  const value= e.target.value;
  setData(data=>({...data,[name]:value}))
}


const placeOrder = async(e)=>{
  e.preventDefault()

  let orderItems =[];
  food_list.map((item)=>{
    if (cartItems[item._id]) {

      let itemInfo =item;
      itemInfo['quantity'] = cartItems[item._id]
orderItems.push(itemInfo)
      
    }
  })
let orderData ={
  address:data,
  items:orderItems,
  amount:getTotalCart()+2,

}
let response = await axios.post(url + '/api/order/place', orderData, { headers: { token } });

console.log(response);
if (response.data.success) {
    const { session_url } = response.data;
    window.location.replace(session_url);
} else {
    console.log('error');
    alert('Error');
}


}

const navigate = useNavigate()

useEffect(()=>{

  if (!token) {
    navigate('/cart')

    
  }
else if(getTotalCart()===0)

{
navigate('/cart')
}

},[token])








  return (
 <form className='place-order' onSubmit={placeOrder}>

  <div className="place-order-left">
     <p className='title'> Delivery Information</p>
<div className="multi-fields">
  <input required type="text"  placeholder='First Name' name='firstName' onChange={Onchangehandler} value={data.firstName}/>
  <input required type="text" placeholder='Last name' name='lastName' onChange={Onchangehandler} value={data.lastName}/>

</div>
<input required  type="email"  placeholder='Email' name='email' onChange={Onchangehandler} value={data.email}/>
<input  required type="text" placeholder='Street' name='street' onChange={Onchangehandler} value={data.street}/>
<div className="multi-fields">
  <input  required type="text"  placeholder='City' name='city' onChange={Onchangehandler} value={data.city}/>
  <input required type="text" placeholder='State' name='state' onChange={Onchangehandler} value={data.state} />

</div>
<div className="multi-fields">
  <input  required type="text"  placeholder='Zip Code' name='zipcode' onChange={Onchangehandler} value={data.zipcode}/>
  <input required  type="text" placeholder='Country'  name='country' onChange={Onchangehandler} value={data.country}/>

</div>
<input required type='text' placeholder='phone'  name='phone' onChange={Onchangehandler} value={data.phone}/>
  </div>


  <div className="place-order-right">
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
          <button type='submit'>PROCCED TO PAYMENT</button>
        </div>



  </div>






 </form>
  )
}

export default Placeorder
