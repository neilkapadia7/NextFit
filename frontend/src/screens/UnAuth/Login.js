import React, {useEffect} from 'react'

const Login = () => {
    useEffect(() => {
        console.log(process.env.GOOGLE_CLIENT)
    })

    return (
        <div>
            <a href='http://localhost:5000/auth/google/url'>Login</a>
        </div>
    )
}

export default Login
