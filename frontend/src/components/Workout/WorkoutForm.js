import React, {useState, useEffect} from 'react'
import WorkoutInfoForm from './WorkoutInfoForm'
import Moment from 'moment'
import {useDispatch} from 'react-redux'
import {addWorkoutInit} from '../../actions/workoutActions'

const WorkoutForm = () => {
    const [workoutType, setWorkoutType] = useState('');
    const [workoutInfo, setWorkoutInfo] = useState([]);
    const [index, setIndex] = useState(-1);

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(workoutType === '' || workoutInfo.length < 1) {
            alert('Please Add Workout Type and Workouts')
        }
        else {
            dispatch(
                addWorkoutInit({
                    workoutType,
                    workoutInfo,
                    date_of: Moment().format('DD-MM-YYYY')
                })
            )

            setWorkoutInfo([])
            setWorkoutType('')
            setIndex(-1)
        }
    }

    const handleChange = (e, i) => {
        setWorkoutInfo([
            ...workoutInfo.slice(0,i),
            {
                ...workoutInfo[i],
                [e.target.name]: e.target.value
            },
            ...workoutInfo.slice(i+1, workoutInfo.length)
        ])
    }

    const addNewWorkoutInfo = () => {
        const newObject = {
            index: index+1,
            exercise: '',
            max_weight: '',
            rep_range: ''
        }

        setWorkoutInfo([...workoutInfo, newObject])

        setIndex(index+1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Workout Type' value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}/>
            {workoutInfo.map(info => 
                <WorkoutInfoForm index={info.index} handleChange={handleChange} value={info} key={info.index}/>
            )}
            
            <button onClick={() => addNewWorkoutInfo()}>Add Button</button>
            <input type='submit' />
        </form>
    )
}

export default WorkoutForm
