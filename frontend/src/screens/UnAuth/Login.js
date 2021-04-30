import React, {useEffect} from 'react'

import {Link} from 'react-router-dom'

const Login = () => {
    useEffect(() => {
        console.log(process.env.GOOGLE_CLIENT)
    })

    return (
        <div>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Login
