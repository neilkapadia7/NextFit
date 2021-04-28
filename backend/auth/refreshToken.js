import jwt from 'jsonwebtoken';
import {sendRefreshToken} from './sendRefreshToken.js'
import {createRefreshToken} from './createToken.js'
import User from '../models/userModel.js';

export const refreshToken = async (req, res) => {
    if(req.cookies && req.cookies.refresh) {
        const token = req.cookies.refresh;

        if(!token) {
            return res.send({accessToken: '', ok: false});
        }

        let payload = null;
        try {
            payload = jwt.verify(token, process.env.JWT_REFRESH)
                    
            const user = await User.findOne({ id: payload.userId })

            console.log('USER:', user)
            if (!user) {
            return res.send({ ok: false, accessToken: '' })
            }

            if (user.tokenVersion !== payload.tokenVersion) {
                return res.send({ ok: false, accessToken: '' })
            }

            const newTokenVersion = user.tokenVersion + 1;

            await sendRefreshToken(res, createRefreshToken(user._id, newTokenVersion))

            return res.send({ ok: true, accessToken: createAccessToken(user._id) })

        } catch (err) {
            return res.send({ ok: false, accessToken: '' })
        }
    }
} 
