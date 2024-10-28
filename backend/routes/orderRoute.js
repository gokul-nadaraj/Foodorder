import express from 'express'

import auth from '../middleware/auth.js'
import { listOrders, placeOrder, userOrders, verifyOrder ,updateStatus} from '../controller/orderController.js'
import authMiddleware from '../middleware/auth.js'

const orderRouter= express.Router()

orderRouter.post('/place',auth,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)






export default orderRouter