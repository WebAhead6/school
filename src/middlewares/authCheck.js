const jwt = require('jsonwebtoken')


const authCheck = (req ,res, next) => {
    
    if (req.cookies.access_token) {

        jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                //if he is not logged in set username to be null and signedIn to be false, after all that run the next method to go to the next middleware or controller.

                res.locals.username = null;
                res.locals.signedIn = false;
                next()

                return 
            }
           
            //if everything is fine and valid, set the username to the username that was stored in the cookie and set signedIn to true using res.locals.
            res.locals.username = decoded.email;
            res.locals.signedIn = true;
            next()

        })


    } else {
        // run the next method to go to the next middleware or controller.
        res.locals.username = null;
        res.locals.signedIn = false;
        next()
    }
}

module.exports = authCheck