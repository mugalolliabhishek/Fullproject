const User=require("../model/user");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const createAccount=async(req,res)=>{
 try{
     const {name,email,password}=req.body;
     const haspassword=await bcrypt.hash(password,10);

     const userdata= await User.create({
        name,email,password:haspassword
     }) 
       const hashpassword=await bcrypt.compare(password,userdata.password)
      if(!hashpassword){
        throw new Error("invalid password")
      }


     const checkuser=await User.find({email})
     if (checkuser){
      return res.send("user is already login")
     }



  res.json({
    message:"Account created successfully",
    userdata
  })
 }
 catch(e){
res.send(e)
 }
}

const login=async (req,res) => {
  try {
    const {email,password}=req.body;
    const userdata = await User.findOne({email});
    if(!userdata){
      throw new Error("User is not found");
    }

  
    const token=await jwt.sign(
      {id:userdata._id},
      process.env.secret_key,
      {expiresIn:"20d"
}
    )
    res.json({
      message:"welcome to Kle COllege ",
      userdata,
      token:token
    })

  } catch (error) {
    res.status(401).send({message:error.message});
  }

}


module.exports={createAccount,login};