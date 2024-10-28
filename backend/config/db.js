import mongoose from "mongoose";


 export const connectDB= async ()=>{

await mongoose.connect('mongodb+srv://iamgokul03062001:03062001@cluster0.6bwgk.mongodb.net/food-order').then(()=>
    console.log('Database Connected')
)


}