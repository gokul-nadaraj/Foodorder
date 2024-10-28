import jwt from 'jsonwebtoken'

const authMiddleware =async (req,res,next)=>{

        const token = req.headers.token?.replace(/"/g, ''); // Remove any extra quotes

console.log('Headers:', req.headers);


if (!token) {

    return res.json({success:false,message:"Not Authorized Login Again"})
    
}

try{
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token:', token_decode); // Check if the token is present and correct

req.body.userId =token_decode.id;
next();

}

catch (error){
    console.log(error)
    res.json({success:false,message:'Error'})

}


}







export default authMiddleware


// import jwt from 'jsonwebtoken';

// const authMiddleware = async (req, res, next) => {
//     try {
//         // Extract the token from the `token` header
//         const token = req.headers.token?.replace(/"/g, ''); // Remove any extra quotes

//         if (!token) {
//             console.log('Token missing');
//             return res.status(401).json({ success: false, message: 'Not Authorized, Login Again' });
//         }

//         console.log('Token:', token); // Log the token to check

//         // Verify the token
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//         // Attach userId to the request object
//         req.body.userId = token_decode.id;

//         // Proceed to the next middleware or route handler
//         next();
//     } catch (error) {
//         console.log('JWT Verification Error:', error);

//         if (error.name === 'TokenExpiredError') {
//             return res.status(401).json({ success: false, message: 'Token expired, please login again' });
//         }

//         if (error.name === 'JsonWebTokenError') {
//             return res.status(401).json({ success: false, message: 'Invalid token, please login again' });
//         }

//         return res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// };

// export default authMiddleware;
