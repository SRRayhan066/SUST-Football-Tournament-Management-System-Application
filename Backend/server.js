const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const authorizationHandler = require('./routerHandler/authorizationHandler');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ftms"
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }else console.log('Successfully database connected');
})

app.use('/user',authorizationHandler);

// default error handler
const errorHandler = (err, req, res, next) =>{
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error : err});
}

app.use(errorHandler);

app.listen(8081,()=>{
    console.log('Connected to the server');
})