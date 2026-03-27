import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ENV } from "../configs/env.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import AppError from "../utils/AppError.js";
import HttpStatus from "../constants/httpStatus.js";
import { successResponse } from "../utils/response.js";

const JWT_SECRET = ENV.JWT_SECRET || "your_token_secret";

const generateAccessToken = (user, exp) => {
    return jwt.sign({id: user._id, username: user.username}, JWT_SECRET, {expiresIn: exp});
}

const exp = '120s'

class UserController {

    register = asyncHandler( async(req, res) => {
        const {username, password, name, email} = req.body;
        const exitstingUser = await UserModel.findOne({email});

        if (exitstingUser) throw new AppError("Email already exists", HttpStatus.Forbidden);

        const handledPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ username, password: handledPassword, name, email});

        const accessToken = generateAccessToken(user, exp);
        await user.save();

        successResponse(res, {...user._doc, accessToken,}, "Register user successfully", HttpStatus.Created);
    });

    login = asyncHandler( async(req, res) => {
        const { email, password} = req.body;;
        const user = await UserModel.findOne({ email });

        if(!user) throw new Error("Invalid credentials", HttpStatus.NotFound);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid credentials", HttpStatus.NotFound);
        
        const accessToken = generateAccessToken(user, exp);
        
        successResponse(res, {...user._doc, accessToken,}, "login successfully!!", HttpStatus.Created);
    });
}

export default new UserController();