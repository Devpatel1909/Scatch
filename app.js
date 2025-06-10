const express= require('express')
const app=express()

const path= require("path")

const db=require('./config/mongoose-connection')

const ownersrouter=require('./routes/ownersrouter')
const productsrouter=require('./routes/productsrouter')
const usersrouter=require('./routes/usersrouter')

const cookiparser=require("cookie-parser")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookiparser())

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.use("/owners",ownersrouter)
app.use("/users",usersrouter)
app.use("/products",productsrouter)

app.listen(3000)