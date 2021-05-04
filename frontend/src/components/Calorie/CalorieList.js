import React from 'react'

const CalorieList = ({calories, listLoading}) => {
    console.log('Component Calories', calories)
    return (
        <table>
            <thead>
                <tr>
                    <td>Calorie</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {calories.length !== 0 && !listLoading && 
                    calories.map(cal => (
                        <tr key={cal._id}>
                            <td>{cal.calorie}</td>
                            <td>{cal.date_of}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default CalorieList
