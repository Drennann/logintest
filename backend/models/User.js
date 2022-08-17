import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        require: true
    },
    passwordHashed: {
        type: String,
        trim: true,
        require: true
    },
    assets:{
        type: [Object]
    }
})

export default mongoose.model("User", userSchema);