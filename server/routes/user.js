const express = require('express')
const router = express.Router()

const upload = require('../Configuration/multer')

const userController = require('../Controller/usercontroller')

const jwt = require('jsonwebtoken')



const verifyToken = (req,res,next)=>{

console.log(req.headers);
        
    const token = req.headers.token.split(' ')[1]

    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{

            console.log(decode);

            if(err) {
               
                  return res.json(
                    {
                        isLoggedIn:false,
                        message:"Authentication Failed"
                    }
                  )
            }
        
           req.user={}
           req.user.id= decode._id,
           req.user.name=decode.name
           next()

        })        
    }
    else{

        res.json({isLoggedIn:false,message:'No Valid Token'})
    }
}



// --------------user signup------------------ 

router.post('/signup',userController.signUp)



// --------------user login------------------ 

router.post('/login',userController.logIn)



// -----------incubation application--------------  

router.post('/application',[verifyToken,upload.single('logo')],userController.incubationApplication)




// router.post('/application',verifyToken,userController.incubationApplication)







module.exports = router