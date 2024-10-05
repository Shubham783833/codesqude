const { signup, login } = require('../Conteroller/AuthController');
const { signupValidation, loginValidation } = require('../Midelware/AuthValidation');


const router = require('express').Router();

router.post('/login', (req , res) => {
    res.send('login success');
});

router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signup );


module.exports = router;