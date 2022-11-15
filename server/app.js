require('dotenv').config()

const express = require('express')

const app = express()


const cors = require('cors')
const PORT = process.env.PORT
const db = require('./Configuration/connection')

const userRoute = require('./routes/user')

const adminRoute = require('./routes/admin')

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    console.log(req.method,req.path);   
    next()
})


//--------------database connection---------------//

db.connect()


app.use('/',userRoute)
app.use('/admin',adminRoute)




app.listen(PORT,()=>console.log(`server started on ${PORT}`))


           