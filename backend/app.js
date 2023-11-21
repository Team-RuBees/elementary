const express = require("express")
const collection = require ("./database")
const cors = require ("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/signup", cors(), (req, res)=>{

})

app.post("/signup", cors(), async (req, res)=>{
    const{name, email, password} = req.body

    const data ={
        name: name,
        email:email,
        password:password
    }
    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("Email already used")
        } else {
            res.json("Welcome!")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("Not exist")
    }
    
})

app.listen(3000, ()=>{
    console.log("port connected 3000")
})