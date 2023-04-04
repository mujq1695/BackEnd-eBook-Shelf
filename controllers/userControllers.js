const asyncHandler = require('express-async-handler')

const User = require('../models/usersModel');


const getUsers = asyncHandler(async(req, res)=>{
    const users = await User.find()
    res.status(200).json(users)
})

const signUpUser = asyncHandler(async(req, res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text")
    }else{
        const user = await User.create({
            text: req.body.text
        })
        res.status(200).json(user);
    }
})

const LogInUser = asyncHandler(async(req, res)=>{
    res.send("retrieved Data Successfully...")
})

const updateUser = asyncHandler(async(req, res)=>{
   const user = await User.findById(req.params.id);
   if(!user){
    res.status(400)
    throw new Error("User Not Found!");
   }else{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedUser);   
}

})
const deleteUser = asyncHandler(async(req, res)=>{
   const user = await User.findById(req.params.id);
   if(!user){
    res.status(400)
    throw new Error("User Not Found with this id")
   }else {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"User Deleted Successfully",id:req.params.id})
   }
})

module.exports = {
    getUsers,
    signUpUser,
    LogInUser,
    updateUser,
    deleteUser
}