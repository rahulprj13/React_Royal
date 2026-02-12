import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
const Formvalidation = () => {

    const {register, handleSubmit,formState:{errors}} = useForm()
    const [isset, setIsset] = useState(false)
    const [userdata, setUserData] = useState({})

    const validationSchema={
        Namevalidate:{
            required:{
                value:true,
                message:"enter your name*"
            }
        },
        Emailvalidate:{
            required:{
                value:true,
                message:"please enter email*"
            }

        },
        Agevalidate:{
            required:{
                value:true,
                message:"please enter Age*"
            },
            min:{
                value:18,
                message:"age must be 18"
            },
            max:{
                value:60,
                message:"age should be not above 60"
            }

        }
    }

    const submitHandler = (data) =>{
        // console.log(data)
        setUserData(data)
        setIsset(true)
    }

    const error = {
        color:"red"
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Form Validation Component</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
      Name: <input type="text" placeholder='enter your name' {...register('name',validationSchema.Namevalidate)}/> 
      <p style={error}>{errors.name && errors.name.message}</p><br/>
      email: <input type="email" placeholder='enter your email' {...register('email',validationSchema.Emailvalidate)} />
      <p style={error}>{errors.email && errors.email.message}</p><br/>
      age: <input type="number" {...register('age',validationSchema.Agevalidate)} />
      <p style={error}>{errors.age?.message} </p>
      <br/><br/>
      <button type='submit'>Submit</button>
      </form>

      {isset==true && 
        <div>
            <h3>{userdata.name}</h3>
            <h3>{userdata.email}</h3>
            <h3>{userdata.age}</h3>
        </div>

      }
    </div>
  )
}

export default Formvalidation
