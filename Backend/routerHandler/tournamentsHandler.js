const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const checkLogin = require('../middlewares/checkLogin');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ftms"
});

router.post('/addTournament',checkLogin,async(req,res)=>{
    try{
        const sql = "INSERT INTO tournament_tbl (`tournamentId`, `tournamentName`, `startDate`, `endDate`) VALUES (?)";
        const values = [
            req.body.tournamentId,
            req.body.tournamentName,
            req.body.startDate,
            req.body.endDate
        ]
        db.query(sql,[values],(err,result)=>{
            if(err) return res.status(500).json("Failed to add tournament");
            return res.status(200).json({
                message : "Successfully tournament added",
                data : result
            })
        })
    }catch(error){
        console.log(error);
        res.status(500).json("Error occured to add tournament");
    }
});


module.exports = router;