import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/User.types";

const userSchema = new Schema({
    handle: {
        type: String,
        require: true,
        trim: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
})
const User = mongoose.model<IUser>('User', userSchema)
export default User

