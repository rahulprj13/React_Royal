import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoginForm from './LoginForm'
import EventForm from './EventForm'
import FeedbackForm from './FeedbackForm'

const FormHandling = () => {

    const { register, handleSubmit } = useForm()
    const [userdata, setUserData]= useState({})
    const [issetdata, setIssetdata] = useState(false)

    const submitHnadler=(data)=>{
        console.log(data);
        setUserData(data)
        setIssetdata(true)
        
    }

    return (
        <div style={{ textAlign: "center" }}>
            <form action="" onSubmit={handleSubmit(submitHnadler)}>
                Name:<input type="text" placeholder='enter name' {...register("name")} required/><br />
                Age:<input type="text" placeholder='enter age' {...register("age")} required/><br />
                Gender:<br /><input type="radio" value="male" {...register("gender")} />male<br />
                <input type="radio" value="female" {...register("gender")} />female<br />
                hobbies:
                cricket<input type='checkbox' value="cricket" {...register("hobbies")} />
                driving<input type="checkbox" value="driving" {...register("hobbies")} />
                travel<input type="checkbox" value="travel" {...register("hobbies")} />
                movies<input type="checkbox" value="movies" {...register("hobbies")} /><br/>

                country: <select {...register("country")} >
                    <option >INDIA</option>
                    <option >USA</option>
                    <option >CANADA</option>
                    <option >RUSSIA</option>
                </select><br/>
                <button type='submit'>submit</button>
            </form>

            {issetdata == true && <div> 
                    <h1>output</h1>
                    <h3>name:{userdata.name}</h3>
                    <h3>age:{userdata.age}</h3>
                    <h3>gender:{userdata.gender}</h3>
                    <h3>country:{userdata.country}</h3>
                    <h3><li>hobbies:{userdata.hobbies }</li> </h3>
                </div>
            }
            <LoginForm/>
            <br/>
            <br/>
            <EventForm/>
            <br/>
            <FeedbackForm/>
        </div>
    )
}

export default FormHandling
