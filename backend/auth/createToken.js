import jwt from 'jsonwebtoken';

export const createRefreshToken = (id, tokenVersion) => {
    await User.findByIdAndUpdate({id}, {$inc: {tokenVersion: 1}});

    const token = jwt.sign({
            id, tokenVersion
        }, 
        process.env.JWT_REFRESH, 
        {expiresIn: '7d'}
    );
}

export const createRefreshToken = (id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '40m'});
}
