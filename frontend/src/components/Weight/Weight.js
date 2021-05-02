import React, {useEffect} from 'react'
import WeightForm from './WeightForm'
import WeightList from './WeightList'
import {useDispatch, useSelector} from 'react-redux'
import {getWeightInit} from '../../actions/weightActions'

const Weight = () => {
    const dispatch = useDispatch()

    const weight = useSelector(state => state.weight);
    const {weights, listLoading} = weight;

    useEffect(() => {
        dispatch(getWeightInit())
    }, [])

    return (
        <>
            <WeightForm />   
            <WeightList weights={weights} listLoading={listLoading}/>  
        </>
    )
}

export default Weight
