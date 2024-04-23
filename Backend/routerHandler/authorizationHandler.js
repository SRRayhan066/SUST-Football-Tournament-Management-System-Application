const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ftms"
})

router.post('/signup',async(req,res)=>{
    try{
        const sql = "INSERT INTO user_tbl (`email`,`password`,`name`,`role`,`dept`,`id`) VALUES (?)" ;
        const password = await bcrypt.hash(req.body.password,10);
        const values = [
            req.body.email,
            password,
            req.body.name,
            req.body.role,
            req.body.department,
            req.body.id
        ]
        db.query(sql,[values],(err,result)=>{
            if(err) return res.json({Message : 'Error in Node'});
            return res.json(result);
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({error : 'Error in hashing password'});
    }
    
})

module.exports = router;
