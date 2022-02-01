import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const roles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} rol no valido'
}

const userSchema = new Schema({
    //userId: String,
    userName: {type: String, required: [true, 'Name required']},
    userLastName: {type: String, required: [true, 'Last name required']},
    userEmail:{
        type: String, 
        required: [true, 'Email required'],
        unique: true
    },
    userPassword: {type: String, required: [true, 'Password required']},
    role:{type: String, default:'USER', enum: roles},
    active : {type: Boolean, default: true}

});

userSchema.plugin(uniqueValidator , {message: 'Error, expected {} unique'});

userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj; 
}

const User = mongoose.model('User', userSchema);
export default User