import React from 'react'
import querystring from 'querystring';

import {Link} from 'react-router-dom'

const Login = () => {
    const redirectURL = 'http://localhost:3000/redirect';
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
        redirect_uri: redirectURL,
        client_id: process.env.REACT_APP_GOOGLE_CLIENT,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/fitness.activity.read',
        'https://www.googleapis.com/auth/fitness.activity.write',
        'https://www.googleapis.com/auth/fitness.blood_pressure.read',
        'https://www.googleapis.com/auth/fitness.heart_rate.read'
        ].join(" ")
    };

    return (
        <div>
            <a href={`${rootUrl}?${querystring.stringify(options)}`}>Login</a>
        </div>
    )
}

export default Login
