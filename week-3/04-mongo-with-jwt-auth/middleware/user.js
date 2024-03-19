const { User } = require('../db');
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
// Middleware for handling auth
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const tokenparts = token.split(" ");
    const jwtToken = tokenparts[1];
    
    try {
        const decodedData = jwt.verify(jwtToken, jwtPassword);
        req.decodedData = decodedData;
        User.findOne({
            username:decodedData.username
        }).then((value) => {
            if(value) {
                next();
            } else {
                res.status(404).send("User not found.");
            }
        });
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }

}

module.exports = userMiddleware;