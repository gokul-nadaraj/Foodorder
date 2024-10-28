import { createContext, useEffect, useState } from "react";
import axios from 'axios'

 
export const  storeContent=createContext(null)


const StoreContextProvider =(props)=>{

    const [cartItems,setCartItems] =useState({})
    const [token,setToken] =useState({})

    const url ='https://foodorder-backend1.onrender.com'
    
const [food_list,setFoodlist]=useState([])






const addToCart = async (itemId)=>{
    if (!cartItems[itemId]) {

setCartItems((prev)=>({...prev,[itemId]:1}))


        
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }
// Assuming 'token' is already retrieved from localStorage or another source
const token = localStorage.getItem('token')?.replace(/"/g, '');

await axios.post(
    url + '/api/cart/add', 
    { itemId }, 
    {
        headers: {
            token: token // Pass token correctly as a header
        }
    }
)
.then(response => {
    console.log('Item added to cart:', response.data);
})
.catch(error => {
    console.error('Error adding item to cart:', error);
});




}

const removeFromCart =async (itemId)=>{

    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))


    if (token) {
        await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}})
        
    }


}


const getTotalCart=()=>{
    let totalAmount=0;
    for(const item in cartItems){

        if (cartItems[item]>0) {
            let itemInfo= food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price* cartItems[item];
    
            
        }
   
 
    }

return totalAmount;
}
const fetchfoodlist =async()=>{
    const response =await axios.get(url+'/api/food/list')
    setFoodlist(response.data.data)
}

const loadCartData = async (token) =>{
    const response =await axios.post(url+'/api/cart/get',{},{headers:{token}});

    setCartItems(response.data.cartData)
}






useEffect(()=>{

    async function localdata() {

        await fetchfoodlist()
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
            await loadCartData(localStorage.getItem("token"))
            
        }
    
        
    }

localdata();

},[])













const contextValue={

    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCart,
    url,
    token,
    setToken

};

return (

    <storeContent.Provider value={contextValue}>

{props.children}

    </storeContent.Provider>
       


)

}

export default StoreContextProvider;
