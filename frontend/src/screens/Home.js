import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userSignIn} from '../actions/authActions'
import Weight from '../components/Weight/Weight';
import Calorie from '../components/Calorie/Calorie';
import Goal from '../components/Goal/Goal';
import Workout from '../components/Workout/Workout';
import {getMetricsForDays} from '../service/googleFit'


const Home = (props) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user)
    const {loading, isLoggedIn, userInfo} = user;

    useEffect(() => {
        if(!userInfo) {
            props.history.push('/');
        }

        getMetricsForDays(1,1)//
    }, [userInfo]);

    return(
        <>

            <Weight />     
            <Calorie />     
            <Goal />     
            <Workout />     
        </>
    )
}

export default Home
