import React, { useContext, useEffect } from 'react'
import axios from 'axios'

import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { storeContent } from '../../components/content/Storecontent';

export const Verify = () => {
const [searchParams , setSearchParams] = useSearchParams();

const success = searchParams.get('success');
const orderId = searchParams.get('orderId');
const {url} = useContext(storeContent)
const navigate =useNavigate()

const verifyPayment = async ()=> {
    const response = await axios.post(url+'/api/order/verify',{success,orderId})
if (response.data.success) {
    navigate('/myorders')

    
}
else{
    navigate('/')
}

}

useEffect(()=>{
    verifyPayment()

},[])
// console.log(success,orderId)


  return (
    <div className='verify'>
<div className="spinner"></div>
    </div>
  )
}
