import React from 'react'
import SubEmployee from './SubEmployee'

const EmployeeList = (props) => {
    return (
        <div>
            <h1>EmployeeList</h1>
            <h2>{props.name}</h2>

            <h2>{props.company.name}</h2>
            <h2>{props.company.people}</h2>
            <h2>{props.company.since}</h2>

            <table style={{ textAlign: "center" }} className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>age</th>
                        <th>name</th>
                    </tr>
                </thead>

                <tbody>
                    {props.employee.map((emp) => {
                        return <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.age}</td>
                            <td>{emp.name}</td>
                        </tr>

                    })}
                </tbody>
            </table>
            <SubEmployee title={props.name}/>
        </div>
    )
}

export default EmployeeList
