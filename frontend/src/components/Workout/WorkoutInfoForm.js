import React from 'react'

const WorkoutInfoForm = (props) => {
    const {value, handleChange, index} = props;

    return (
        <>
            <input type='text' placeholder='Exercise' value={value.exercise} onChange={(e) => handleChange(e, index)} name='exercise' required/>
            <input type='number' placeholder='Max Weight' value={value.max_weight} onChange={(e) => handleChange(e ,index)} name='max_weight' required/>
            <input type='text' placeholder='Rep Range' value={value.rep_range} onChange={(e) => handleChange(e, index)} name='rep_range' required/>
        </>
    )
}

export default WorkoutInfoForm
