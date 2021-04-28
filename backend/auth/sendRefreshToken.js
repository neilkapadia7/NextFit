
export const sendRefreshToken = (res, token) => {
    res.cookie('refresh', token, {
        httpOnly: true,
        path: '/api/refresh_token'
    })
}