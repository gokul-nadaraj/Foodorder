import React, {useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../../assets/frontend_assets/assets'
import { storeContent } from '../content/Storecontent'

import axios from 'axios'


const Loginpopup = ({setShowLogin}) => {

const {url,setToken} =useContext(storeContent)

const [currstate,setCurrtstate]=useState("Login")
 const [data,setData] =useState({
    name:'',
    email:'',
    password:''
  })

  const onChangeHandler =(e)=>{

  const name=e.target.name
  const value =e.target.value

  setData(data=>({...data,[name]:value}))

  }

  const onLogin = async (e)=>{

    e.preventDefault()

    let newUrl= url;

    if(currstate==='Login'){
      newUrl += "/api/user/login"
    }
    else{
      newUrl +="/api/user/register"
    }
    const response = await axios.post(newUrl,data)

    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      setShowLogin(false)

      
    }
    else{
      alert(response.data.message)

    }
  }

 


  
  
  
  return (

<div className="login-popup">

<form onSubmit={onLogin} className="login-form-container">

<div className='login-popup-title'>

  <h2>{currstate}</h2>
  <img src={assets.cross_icon} alt="cross"  onClick={()=>setShowLogin(false)}/>
</div>

<div className="login-popup-inputs">

{currstate==="Login"?<></>: <input type="text" placeholder='Your Name ' required name='name' onChange={onChangeHandler}  value={data.name}/>}


 <input type="email" placeholder='Your Email ' required  name='email' onChange={onChangeHandler} value={data.email}/>
 <input type="password" placeholder='Your Password ' required name='password' onChange={onChangeHandler} value={data.password} />

</div>

<button type='Submit'>{currstate=== "sign Up"?"Create acoount":"login"}</button>

<div className="login-popup-condition">
  <input type="checkbox"  required/>
  <p>By continuing, I agre to the terms of use & Privacy Policy</p>

</div>
{currstate==="Login"?<p>Create New Account ?<span onClick={()=>setCurrtstate("Sign Up")}>Click here</span></p>:
  <p>Already Have a account ?<span onClick={()=>setCurrtstate("Login")}>login here</span></p>}



</form>
</div>


  )
}

export default Loginpopup
