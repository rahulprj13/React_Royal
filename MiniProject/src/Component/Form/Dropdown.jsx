
import React from 'react'
import { useState } from 'react'

const Dropdown = () => {

    const [country, setCountry] = useState("")
    const [state, setState] = useState("")

    const data =[
        {country:"India", states:["Gujarat", "Maharashtra", "Rajasthan", "Punjab"]},
        {country:"USA", states:["California", "Texas", "Florida"]},
        {country:"Canada", states:["Ontario", "Quebec", "Alberta"]}
    ]

    // const handleCountryChange=(e)=>{
    //     setCountry(e.target.value)
    //     setState("")
    // }

  return (
    <div style={{textAlign:"center"}}>
        <h2>Country State Dropdown</h2>

        <select value={country} onChange={(e) =>setCountry(e.target.value)}>
            <option value="">---select country---</option>
            {data.map((d)=>{
                return <option key={d.id}>{d.country}</option>
            })}
        </select>
        <br/><br/>

        <select value={state} onChange={(e)=>setState(e.target.value)} disabled={!country}>
            <option value="">---select state---</option>
            {country && data.map((d)=>{
                if(d.country === country){
                    return d.states.map((s)=>{
                        return <option key={s.id}>{s}</option>
                    })
                }
            })}
        </select>

        <br/><br/>
        <h2>country:{country}</h2>
        <h2>state:{state}</h2>
    </div>
  )
}

export default Dropdown
