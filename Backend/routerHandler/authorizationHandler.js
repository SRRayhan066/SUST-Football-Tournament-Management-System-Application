const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const checkLogin = require('../middlewares/checkLogin');

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


router.post('/login',async(req,res)=>{
    try{
        const sql = "SELECT * FROM user_tbl WHERE email = ?" ;
        const values = [
            req.body.email
        ]
        db.query(sql,[values],async(err,result)=>{
            if(err) return res.json("Error occurerd");
            if(result.length>0){
                const isValid = await bcrypt.compare(req.body.password,result[0].password);
                if(isValid){
                    const token = jwt.sign({
                        email:result[0].email,
                        name:result[0].name
                    },process.env.JWT_SECRET,{
                        expiresIn:'1h'
                    });

                    return res.status(200).json({
                        authentication_token: token,
                        message : 'Successfully Login'
                    });
                }else{
                    return res.status(400).json("Login Failed");
                }
            }else return res.status(500).json("Login Failed");
        })
    }catch(error){
        console.log(error);
        res.status(500).json({error : 'Login Failed'});
    }
})


router.get('/info',checkLogin,async(req,res)=>{
    try{
        const sql = "SELECT * FROM user_tbl WHERE email = ?";
        const values = [req.email];
        db.query(sql,[values],async(err,result)=>{
            if(err) return res.json("Error occured");
            if(result.length>0){
                return res.json({
                    email : result[0].email,
                    role : result[0].role
                })
            }else return res.json("Failed");
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({error: 'Error for getting user information'});
    }
})

module.exports = router;
