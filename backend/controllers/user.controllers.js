import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res )=> {
    try{
        const users = await User.find();
        res.send(users);
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const postUser = async (req, res )=> {
    try{
        const {username, password} =  req.body;
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(password, salt);
        const newUser = new User({username, passwordHashed});
        await newUser.save();
        res.send("User created.");
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const putUser = async (req, res )=> {
    try{
        const {username, password} =  req.body;
        const {id} = req.params;
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(password, salt);
        await User.findByIdAndUpdate(id, {username, passwordHashed});
        res.send("User actualized.");
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const deleteUser = async (req, res )=> {
    try{
        const {id} = req.params;
        await User.findByIdAndDelete(id);
        res.send("User deleted.");
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const getUser = async (req, res )=> {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.send(user);
    }
    catch(e){
        res.status(401).send(e)
    }
}