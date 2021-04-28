import jwt from 'jsonwebtoken';

export const createRefreshToken = async (id, tokenVersion) => {
    await User.findByIdAndUpdate({id}, {$inc: {tokenVersion: 1}});

    const token = jwt.sign({
            id, tokenVersion
        }, 
        process.env.JWT_REFRESH, 
        {expiresIn: '7d'}
    );
}

export const createAcessToken = (id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '40m'});
}
