import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { storeContent } from '../content/Storecontent'

const Navbar = ({setShowLogin}) => {

const [menu,setMenu]=useState("menu")

const {getTotalCart,token,setToken}=useContext(storeContent)

const navigate =useNavigate()


const logout =()=>{
  localStorage.removeItem('token')
setToken('');
navigate('/')


}








  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.cooknav} alt="logo" className='logo'/></Link>

       <ul className='navbar-menu'>

<Link to="/"  className={menu ==="home"?"active":""} onClick={()=>setMenu("home")}>Home</Link>
<a href="#explore-menu" className={menu ==="menu"?"active":""} onClick={()=>setMenu("menu")}>Menu</a>
<a href="#app-download" className={menu ==="mobile-app"?"active":""} onClick={()=>setMenu("mobile-app")}>Mobile-APP</a>
<a href="#footer"         className={menu ==="contact-us"?"active":""} onClick={()=>setMenu("contact-us")}>Contact-Us</a>

       </ul>

       <div className='navbar-right'>

     

        <div className='navabar-search-icon'>
<Link to="/cart"><img src={assets.basket_icon} alt="basket" /></Link>

<div className={getTotalCart ()===0?"":"dot"}></div>
   </div>

        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile'>
    
          <img src={assets.profile_icon} alt="image" />
          <ul className="nav-profile-dropdown">

            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="bagimage"/><p>orders</p></li>
<hr />
               <li onClick={logout}><img src={assets.logout_icon} alt="imagess"/><p>LogOut</p></li>


          </ul>
          
          
          </div>}


   </div>

  </div>
  )
}

export default Navbar