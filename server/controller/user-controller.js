import User from "../model/userSchema.js"


export const userSignup = async(req,res) =>{
    try{
        const exist = await User.findOne({username:req.body.username})
        if(exist){
            alert("user already exist")
            return res.status(401).json({message:"username already exist"})
        }

         const user = req.body ;
         const newUser = new User(user)
         console.log(newUser +" this is userd data");
         await newUser.save();
         res.status(200).json({message:user})
        //  alert("registration successfully!!!")
    }
    catch (err){
        res.status(500).json({message: error.message})
    }
}
export  const userLogin = async(req,res) =>{
    try{
        const username = req.body.username;
        const password = req.body.password;

    

         const userExist = await User.findOne({username:username,password:password}) 

         if(userExist){
            // alert(username +  " successfully login")
            // return res.status(200).json(`${username} login successfull`)
            return res.status(200).json({data:user})
         }else{
            return res.status(401).json(`invalid login`)
         }
    }
    catch (err){
        res.status(500).json("error",err.message)
    }
}
