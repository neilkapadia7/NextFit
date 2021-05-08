import React, {useEffect} from 'react'
import GoalForm from './GoalForm'
import {useSelector, useDispatch} from 'react-redux'
import {getGoalInit} from '../../actions/goalActions'

const Goal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGoalInit());
    }, []);

    return (
        <div>
            <GoalForm />
        </div>
    )
}

export default Goal
