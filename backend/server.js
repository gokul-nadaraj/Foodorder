import express from "express"
import cors from  "cors"
import { connectDB } from "./config/db.js"
import foodrouter from "./routes/foodroute.js"
import userRouter from "./routes/userRoute.js"

import 'dotenv/config'
import cartRouter from "./routes/CartRoute.js"
import orderRouter from "./routes/orderRoute.js"








// app config

const app =express()
const port= process.env.PORT || 4000


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// Db connection

connectDB();

// api endpoints

app.use('/api/food',foodrouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('Api Working')

})

app.listen(port,()=>{
    console.log(`server started On http://localhost:${port}`)

})


// mongodb+srv://iamgokul03062001:<db_password>@cluster0.6bwgk.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0