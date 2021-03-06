import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userSignIn} from '../actions/authActions'

const Redirect = (props) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user)
    const {loading, isLoggedIn} = user;



    useEffect(() => {
        dispatch(userSignIn(props.location.search.split('code=').pop().split('&')[0]))
    
    }, [dispatch, props.location]);
   
    useEffect(() => {
        if(!loading  && isLoggedIn) {
            props.history.push('/home')
        }
    }, [loading, props.history, isLoggedIn])

    return(
        <>
            {loading ? (<h1>Loading</h1>) : null}
        </>
    )
}

export default Redirect
