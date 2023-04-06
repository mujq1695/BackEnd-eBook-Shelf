const express = require('express')
const router = express.Router()
const {getUsers,signUpUser,updateUser,deleteUser,LogInUser} = require('../controllers/userControllers')
const Goal = require('../models/usersModel')

router.get('/',(req,res)=>{
    
    console.log('Retrieved User Successfully')
});

router.get('/userDetails',getUsers);

router.put('/userUpdate/:id',updateUser)

router.delete('/userDelete/:id',deleteUser)

router.post('/userSignup',signUpUser)

router.post('/userLogin',LogInUser)



module.exports = router;