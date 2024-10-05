const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/user");



const signup = async (req, res) => {
    try {
        const { Firstname,Lastname,Password,Confirmpassword,Gender,Email,Phoneno,Location,Enquire } = req.body;
        const user = await UserModel.findOne({email});
        if (user) {
            return res.status(409)
            .json({ message: 'Email already exists',sucess:false });
        }
         const userModel = new UserModel({Firstname,Lastname,Password,Confirmpassword,Gender,Email,Phoneno,Location,Enquire});
         userModel.password = await bcrypt.hash(password, 10);
         await userModel.save();
         res.status(201)
            .json({ 
                message: "Singup successfully" ,
                success: true
            })
            } catch (err) {
                res.status(500)
                .json({ message: "Internal server error", 
                success: false 
            });
             }

}

const login = async (req, res) => {
    try {
        const {email, password } = req.body;
        const user = await UserModel.findOne({email});
        const errorMs = 'Auth Failed email or password is wrong';
        if (user) {
            return res.status(403)
            .json({ message: errorMs,sucess:false });
        }
         const ispassEqual = await bcrypt.compare(password,user.password);
         if (!ispassEqual) {
            return res.status(403)
            .json({ message: errorMs,sucess:false });
         }
         const jwtToken = jwt.sign (
            {email:user.email, _id: user._id},
            process.env.JWT_SECRET,
            { expiresIn:'24'}
        )      
         res.status(200)
            .json({ 
                message: "Login successfully" ,
                success: true,
                jwtToken,
                email,
                password
                
            })
            } catch (err) {
                res.status(500)
                .json({ message: "Internal server error", 
                success: false 
            });
             }

}
module.exports = {
    signup,
    login
}