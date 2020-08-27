const jwt = require('jsonwebtoken')


const authenticateStartTrack = (req ,res, next) => {

     let startAuth = Date.now()
     console.log('startAuth',startAuth);

     res.redirect("/")
 
}


const authenticateEndTrack = (req ,res, next) => {

    let endAuth = Date.now()
    console.log('endAuth',endAuth);

    res.redirect("/")
}


module.exports = {authenticateStartTrack,authenticateEndTrack}