import React, {useState} from 'react'
import Moment from 'moment'
import {useDispatch} from 'react-redux';
import {addWeightInit} from '../../actions/weightActions'

const WeightForm = () => {
    const dispatch = useDispatch()

    const [weight, setWeight] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const date_of = Moment().format('DD-MM-YYYY')
        dispatch(
            addWeightInit({
                calorie: parseFloat(weight).toFixed(2),
                date_of
            })
        )
    }

    return (
        <>
            <h2>Add Weights</h2>
            <form onSubmit={handleSubmit}>
                <input type='number' step='any' onChange={(e) => setWeight(e.target.value)} value={weight} placeholder='Add Weight'/>kgs   
                <input type='submit' /> 
            </form>     
        </>
    )
}

export default WeightForm
