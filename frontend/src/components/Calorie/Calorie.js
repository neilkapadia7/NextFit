import React, {useEffect} from 'react'
import CalorieForm from "../Calorie/CalorieForm";
import CalorieList from "../Calorie/CalorieList";
import {getCalorieInit} from '../../actions/calorieAction'
import {useDispatch, useSelector} from 'react-redux'

const Calorie = () => {
    const dispatch = useDispatch();
    const calorie = useSelector(state =>  state.calorie);
    const {calories, loading, error, listLoading} = calorie;

    useEffect(() => {
        dispatch(getCalorieInit());
    }, [dispatch])

    return (
        <div>
            <h3>Calorie Data</h3>
            <CalorieForm />
            <CalorieList calories={calories} listLoading={listLoading}/>
        </div>
    )
}

export default Calorie
