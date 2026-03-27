import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    _delete: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

const UsersModel = mongoose.model("Users", UsersSchema);

export default UsersModel;