const ensureAuthenticated = require('../Midelware/auth');



const router = require('express').Router();

router.get('/',ensureAuthenticated, (req , res) => {
    console.log('---logged in user details---',req.user);
    res.status(200).json([
        {
            name:"mobile",
            price:1000
        },
        {
            name:"tv",
            price:2000
        }
    ])
});

module.exports = router;