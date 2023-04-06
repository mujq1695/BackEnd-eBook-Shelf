const express = require('express')
const router = express.Router()
const {getUsers,signUpUser,updateUser,deleteUser} = require('../controllers/userControllers')
const Goal = require('../models/usersModel')

router.get('/',(req,res)=>{
    
    console.log('Retrieved User Successfully')
});

router.get('/userDetails',getUsers);


router.post('/userSignup',signUpUser)

router.post('/userLogin',(req,res)=>{
    
   res.send('Retrieved User Successfully')
})

router.put('/userUpdate/:id',updateUser)

router.delete('/userDelete/:id',deleteUser)

module.exports = router;