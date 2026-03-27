import express from "express";

import UserController from "../controllers/userController.js";
import { successResponse } from "../utils/response.js";
import HttpStatus from "../constants/httpStatus.js";

import UsersValidation from "../validations/userValidation.js";

import validate from "../middlewares/validateHandler.js";

const router = express.Router();

router.post('/login', validate(UsersValidation.login), UserController.login);
router.post('/register', validate(UsersValidation.create), UserController.register);
router.get('/', function(req, res){
    successResponse(res, undefined, "user api is running", HttpStatus.Ok);
})

export default router;