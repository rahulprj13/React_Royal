import React from 'react'
import EmployeeList from './EmployeeList'
import CardComponent from './CardComponent';

const Employee = () => {

    let name = "montu prajapati";

    var company={
        name:"tcs",
        people:30000,
        since:2000
    };

    var employee=[
        {id:1, age:23, name:"montu"},
        {id:2, age:22, name:"rahul"},
        {id:3, age:33, name:"raj"},
        {id:4, age:13, name:"yash"},
    ]
    
  return (
    <div style={{textAlign:"center"}}>
      <h1>employee</h1>
      <CardComponent title="advanture" desc="this is description"/>
      <EmployeeList name={name} company={company} employee={employee}/>
    </div>
  )
}

export default Employee
