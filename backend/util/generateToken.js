import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    const accessToken = generateAccessToken(id)
    const refreshToken = jwt.sign({id}, process.env.JWT_REFRESH, { expiresIn: '30d' })
    
    return ({accessToken: accessToken, refreshToken: refreshToken});
}

function generateAccessToken(id) {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}
// refresh token implementation to be done