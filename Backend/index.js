const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./route/AuthRouter');
const ProductRouter = require('./route/ProductRouter')
const UserModel = require('./Models/user')

require('dotenv').config();
require('./Models/db');


const PORT =process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products',ProductRouter);     

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})








// const mongoose = require("mongoose")
// const cors = require("cors")
// const mydatatype = require('./schimatype/schimatype')
// const port = process.env.PORT || 3001


// app.use(express.json())
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/FitGYM");

// app.post('/register',(req,res)=>{
//     mydatatype.create(req.body)
//     .then(FitGYM => res.json(FitGYM))
//     .catch(err => res.json(err))
// })
// app.listen(3001, ()=>{
//     console.log("server is running on port 3001")
// })



// 'Access-Control-Allow-Origin'
// let express = require('express');
// let myapp = express();
// const cors = require('cors');
// // require('dotenv').config();
// require('./database/connection');
// const myroot = require('./route/approot');
// // const port = process.env.PORT || 8600



// myapp.use(express.json());
// myapp.use(cors());
// myapp.use(myroot);






// myapp.listen(3001,()=>{
//     console.log('server is runing on port 3001');
// })

