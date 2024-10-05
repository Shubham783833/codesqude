const joi = require('joi');
const UserModel = require('../Models/user')

const signupValidation = (req, res, next)=>{
    const schema = Joi.object({
        Firstname: Joi.string().min(3).max(20).required(),
        Lastname: Joi.string().min(3).max(20).required(),
        Email: Joi.string().email().required(),
        Password: Joi.string().min(8).max(20).required(),
        ConfirmPassword: Joi.string().min(8).max(20).required(),
        phone: Joi.number().min(10).max(10).required(),

    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
           .json({message:"bad request",error})
        }
        next();
}
const loginValidation = (req, res, next)=>{
    const schema = Joi.object({
        Email: Joi.string().email().required(),
        Password: Joi.string().min(8).max(20).required(),
        
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
           .json({message:"bad request",error})
        }
        next();
    }        

module.exports ={
    signupValidation,
    loginValidation
}    