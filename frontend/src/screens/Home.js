import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {userSignIn} from '../actions/authActions'

const Home = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userSignIn(props.location.search.split('code=').pop().split('&')[0]))
        console.log(props.location.search.split('code=').pop().split('&')[0])
    }, []);

    return (
        <div>
            Home Logged In User
        </div>
    )
}

export default Home
