import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

export const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {   
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log(decoded.id);

            req.user = await User.findOne({id: decoded.id})

            console.log(req.user);

            next();

        } catch (err) {
            if(!token) {
                res.status(401);
                res.json({message: 'No Token'})
                throw new Error('No Token')   
            }

            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed')
        }
    }

    if(!req.headers.authorization) {
        res.status(401);
        res.json({message: 'No Authorization Token'})
        throw new Error('Not authorized')
    }

    if(!token) {
        res.status(401);
        throw new Error('No Token')
    }

});