import React from 'react'
import './Appdownload.css'
import { assets } from '../../../assets/frontend_assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download'id="app-download">

<p>For Better Experince Download <br /> Tomato App</p>

<div className='app-download-platforms'>

    <img src={assets.play_store} alt="playstore-icon" />
    <img src={assets.app_store} alt="Appstore-icon" />
</div>


    </div>
  )
}

export default Appdownload