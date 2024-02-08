const express = require("express")
const collection = require ("./database")
const cors = require ("cors")
const app = express()
const signupRouter = require ("./routers/signup_router")
const bodyParser = require('body-parser');
const loginRouter = require('./routers/login_router')

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.listen(3000, ()=>{
    console.log("port connected 3000")
})