import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">

<div className="footer-content" >
    <div className="footer-content-left">

        <img src={assets.cookfoot} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem optio quos, tenetur voluptatem aliquam in libero natus odio nesciunt at!</p>


<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="facebook icon" />
    <img src={assets.linkedin_icon} alt="linkedin icon" />
    <img src={assets.twitter_icon} alt="twitter icon"  />
</div>



    </div>
    <div className="footer-content-center">


<h2>Company</h2>

<ul>
    <li>Home</li>
    <li>AboutUs</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>

    </div>

<div className="footer-content-right">

    <h2>GET IN TOUCH</h2>
<ul>
    <li>6379138492</li>
    <li>Iamgokul03062001@gmail.com</li>
    
</ul>
</div>

</div>


<hr/>
<p className='footer-copyright'>Copyright 2024 @ Tomato.com -All Right Reserved</p>
    </div>
  )
}

export default Footer