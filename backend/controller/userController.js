import User from '../models/userModel.js'
import Weight from '../models/weightModel.js'
import Calorie from '../models/caloieModel.js'
import asyncHandler from 'express-async-handler'; 
import {generateToken} from '../util/generateToken.js';

/**
    @route POST api/users
    @description Register User
*/ 
export const registerUser = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body;

    const userExist = await User.findOne({email});

    if(userExist) {
        res.status(400);
        throw new Error('User Already Exists');
    } 

    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

        await Weight.create({userId: user._id});
        await Calorie.create({userId: user._id});
    }

    else {
        res.status(400)
        throw new Error('Invalid User Data');
    }

});

/**
    @route POST api/users/Login
    @description Login User
*/ 
export const loginUser  = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user) {
        res.status(404);
        res.json({message: 'Invalid Email ID'});
        throw new Error('Invalid Email ID')
    } 

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }

    else {
        res.status(401)
        res.json({message: 'Invalid Password'});
        throw new Error('Invalid Password');    
    }
})

/**
    @route GET api/users/profile
    @description Get user details
*/ 
export const getUserProfile = async (req, res) => {
    res.json({
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    })
};

/**
    @route PUT api/users/profile
    @description Update User Details
    @access Private
*/ 
export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password) {
            user.password = req.body.password
        }

        await user.save()

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(404);
        throw new Error('User not found');
    }
});