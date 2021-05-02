import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userSignIn} from '../actions/authActions'

const Home = (props) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user)
    const {loading, isLoggedIn} = user;

    return(
        <>
            <h1>You're Logged In</h1>
        </>
    )
}

export default Home
