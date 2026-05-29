const mongoose=require("mongoose");
const validator=require("validator");
const userScheme= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
                
            }
        }
    },
    password:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isStrongPassword(value)){
                  throw new Error("invalid password");
            }
        }
    },
     token: {
      type: String
   }
})
module.exports=mongoose.model("User",userScheme);