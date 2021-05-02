import React from 'react'

const WeightList = ({weights, listLoading}) => {
    return (
        <div>
            <h3>Weights Data</h3>
            <table>
                <thead>
                    <tr>
                        <th>Weight</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {weights.length !== 0 && !listLoading && (
                        weights.map(data => (
                            <tr key={data._id}>
                                <td>{data.weight}</td>
                                <td>{data.date_of}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default WeightList
