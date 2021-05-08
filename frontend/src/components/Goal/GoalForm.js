import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addGoalInit} from '../../actions/goalActions'

const GoalForm = () => {
    const [goal, setGoal] = useState('');

    const dispacth = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispacth(addGoalInit(goal));
        setGoal('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add Goal' value={goal} onChange={(e) => setGoal(e.target.value)} />
            <input type='submit' />
        </form>
    )
}

export default GoalForm
