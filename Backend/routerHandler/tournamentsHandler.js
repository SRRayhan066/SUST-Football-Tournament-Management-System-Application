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


router.get('/allTournament',checkLogin,async(req,res)=>{
    try{
        const sql = "SELECT * FROM tournament_tbl";
        db.query(sql,(err,result)=>{
            if(err) return res.status(500).json("Failed to get all tournament");
            return res.status(200).json({
                message : "Successfully get all tournament",
                data : result
            })
        })
    }catch(error){
        console.log(error);
        res.status(500).json('Error occured to get all tournament');
    }
})


router.put('/updateATournament',checkLogin,async(req,res)=>{
    try{
        const sql = "UPDATE tournament_tbl SET startDate=?,endDate=? WHERE tournamentId=?";
        const values = [
            req.body.startDate,
            req.body.endDate,
            req.body.tournamentId
        ]
        db.query(sql,values,(err,result)=>{
            if(err) return res.status(500).json('Error occured to update');
            return res.status(200).json({
                message : 'Successfully updated',
                data : result
            })
        })
    }catch(error){
        console.log(error);
        res.status(500).json('Error occured while updating')
    }
})


router.delete('/deleteATournament',checkLogin,async(req,res)=>{
    try{
        const sql = "DELETE FROM tournament_tbl WHERE tournamentId=?";
        const values = [req.body.tournamentId];

        db.query(sql,values,(err,result)=>{
            if(err) return res.status(500).json('Error occured while deleting');
            return res.status(200).json({
                message : "Successfully deleted",
                data : result
            })
        })
    }catch(error){
        console.log(error);
    }
})


module.exports = router;