import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'

export const createRefreshToken = (id) => {
    console.log('Refresh Triggered')

    const token = jwt.sign({
            id
        }, 
        process.env.JWT_REFRESH, 
        {expiresIn: '7d'}
    );

    console.log('Refresh Token ::: ',token)

    return token;
}

export const createAcessToken = (id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'});
    return token;
}
