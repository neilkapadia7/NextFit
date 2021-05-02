import User from '../models/userModel.js'
import Weight from '../models/weightModel.js'
import Calorie from '../models/caloieModel.js'
import asyncHandler from 'express-async-handler'; 
import {generateToken} from '../util/generateToken.js';
import {sendRefreshToken} from '../auth/sendRefreshToken.js';
import {createAcessToken, createRefreshToken} from '../auth/createToken.js'

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
    @route POST api/users/login
    @description Login User
*/ 
export const loginUser  = asyncHandler(async (req, res) => {
        
    try {

        const user = await User.findOne({id: req.body.id});
        
        if(user) {
            console.log('User Login!!!!!')

            res.status(200).json({
                _id: user._id,
                id: user.id,
                email: user.email,
                name: user.name,
                picture: user.picture,
                accessToken: createAcessToken(user._id)
            });
        }
        else {
            console.log('New User!!!!!')
            const newUser = new User(req.body);
            await newUser.save()

            await Weight.create({userId: newUser._id});
            await Calorie.create({userId: newUser._id});

            res.status(200).json({
                _id: newUser._id,
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                picture: newUser.picture,
                accessToken: createAcessToken(newUser._id)
            });
        }
    } catch (err) {
        res.status(401).json({message: 'Server Error', err: err});
        console.log(err)
    }
        
})

/**
    @route GET api/users/profile
    @description Get user details
*/ 
export const getUserProfile = async (req, res) => {
    res.json({
        _id: req.user._id,
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        picture: req.user.picture
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