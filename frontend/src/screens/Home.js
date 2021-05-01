import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userSignIn} from '../actions/authActions'

const Home = (props) => {
    const dispatch = useDispatch();

    const google = useSelector(state => state.google)
    const {loading, isLoggedIn} = google;

    return(
        <>
            <h1>You're Logged In</h1>
        </>
    )
}

export default Home
