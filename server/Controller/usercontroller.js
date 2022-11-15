
const userHelper = require('../Helpers/userhelper')

module.exports = {

    signUp:(req,res)=>{
       
        userHelper.doSignup(req.body).then((response)=>{
           
            res.json({message:'success'})

        }).catch((err)=>{
            
            res.json({err})
        })
         
    },

    logIn:(req,res)=>{

        
        console.log(req.body);

        userHelper.doLogin(req.body).then((user)=>{

               
            res.json(user)
        }).catch((err)=>{
            
            res.json({err})
        })
    },
    
    incubationApplication:(req,res)=>{

        console.log(req.body);
        console.log(req.headers);
        req.body.image = req.file.filename
     
        userHelper.applicationForIncubation(req.body).then((response)=>{
        res.json(response)
       })
     
     
         
    }




}