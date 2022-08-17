import {Router} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

const authRouter = Router();

authRouter.post("/login", async (req, res) => {
    try{
        const {password, username} = req.body;
        const user = (await User.find({username}))[0];
    
        if (bcrypt.compareSync(password, user.passwordHashed)){
            const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60*60*24})
            res.json({token, id:user._id})
        }
        else{
            res.send("Credenciales incorrectas.")
        }
    }catch(e){
        res.status(400).send(e)
    }
})
authRouter.post("/register",async (req, res) => {
    try{
        const {username, password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(password, salt);
        const newUser = new User({username, passwordHashed, assets: []});
        await newUser.save();
        const token = jwt.sign({id: newUser._id}, process.env.SECRET, {expiresIn: 60*60*24})
        res.json({token, id:newUser._id})
    }
    catch(e){
        res.send("Auth...")
    }
})

export default authRouter;