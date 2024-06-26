const jwt = require('jsonwebtoken');

const checkLogin = (req,res,next) =>{
    const {authorization} = req.headers;
    try{
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const {email,name} = decoded;
        req.email = email;
        req.name = name;
        next(); 
    }catch{
        next('Authentication Failure');
    }
}

module.exports = checkLogin;