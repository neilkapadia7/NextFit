import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addCalorieInit} from '../../actions/calorieAction'
import Moment from 'moment'

const CalorieForm = () => {
    const dispatch = useDispatch();

    const [calorie, setCalorie] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const date_of = Moment().format('DD-MM-YYYY')
        dispatch(
            addCalorieInit({
                calorie: parseFloat(calorie).toFixed(2),
                date_of
            })
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='number' placeholder='Add Calories' value={calorie} onChange={(e) => setCalorie(e.target.value)} /> Cal
                <input type='submit' />
            </form>
        </div>
    )
}

export default CalorieForm
