import React, {useEffect} from 'react'
import WorkoutForm from './WorkoutForm'
import {useSelector, useDispatch} from 'react-redux'
import {getWorkoutInit} from '../../actions/workoutActions'

const Workout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkoutInit())
    }, []);

    return (
        <div>
            <WorkoutForm />
        </div>
    )
}

export default Workout
