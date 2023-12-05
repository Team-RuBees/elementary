const express =require('express')
const collection = require('../database')
const router = express.Router()

router.post('/', async(req, res)=>{
    const {email, password } = req.body

    try {
        const check = await collection.findOne({email:email})

        if (check) {
            res.json("User Confirmed")
            
        } else { 
            res.json("Email not registered")
        }
    } catch (error) {
        res.json("Email not registered")
    }
})

module.exports = router;