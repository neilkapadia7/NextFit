import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userSignIn} from '../actions/authActions'
import Weight from '../components/Weight/Weight';
import Calorie from '../components/Calorie/Calorie';

const Home = (props) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user)
    const {loading, isLoggedIn, userInfo} = user;

    useEffect(() => {
        if(!userInfo) {
            props.history.push('/');
        }
    }, [userInfo]);

    return(
        <>
            <h1>You're Logged In</h1>
            <Weight />     
            <Calorie />     
        </>
    )
}

export default Home
