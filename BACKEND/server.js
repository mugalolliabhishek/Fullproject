const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8'])

const express=require("express");
const app=express()
const cors = require('cors')
require("dotenv").config()
const port=process.env.PORT || 5000;
const mongoose=require("mongoose");
const {createAccount, login}=require("./controllers/user")
const middleware=require("./middleware/auth");

app.use(cors())
app.use(express.json());

app.post("/signin",createAccount);
app.post("/login",login);

mongoose.connect(process.env.mongoose_url)
.then(()=>{ 
     app.listen(port,()=>{
    console.log(`server is running port number is ${port}`);
    console.log("mongoosedb connected")  
})
})
.catch((error)=>{
    console.log("mongoosedb not connected",error)
})