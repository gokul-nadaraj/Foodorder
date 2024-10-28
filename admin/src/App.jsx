import React from 'react'
import Sidebar from './components/sidebar'
import Navbar from './components/Navabar/Navbar'
import { Routes,Route} from 'react-router-dom'
import Add from './pages/add/Add'
// import Order from './pages/orders/Order'
import List from './pages/list/List'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from './pages/orders/Orders'

const App = () => {

  const url= "http://localhost:4000"

  return (

    <div>
    <ToastContainer/>
   <Navbar/>
    <hr/>
    
    <div className='app-content'>
      <Sidebar/>
      <Routes>
<Route path="/add" element={<Add  url={url} />}/>
<Route path="/list" element={<List url={url} />}/>
<Route path="/order" element={<Orders url={url} />}/>

      </Routes>
    </div>
    
        </div>
  )
}

export default App