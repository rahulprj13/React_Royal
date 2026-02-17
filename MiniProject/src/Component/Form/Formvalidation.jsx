import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const Formvalidation = () => {

    const { register, handleSubmit, formState: { errors },watch } = useForm({mode:"all"})

    const password = watch("password")
    // console.log(password);
    
    const [isset, setIsset] = useState(false)
    const [userdata, setUserData] = useState({})

    const validationSchema = {
        Namevalidate: {
            required: {
                value: true,
                message: "enter your name*"
            }
        },
        Emailvalidate: {
            required: {
                value: true,
                message: "please enter email*"
            }

        },
        passwordvalidate:{
            required:{
                value:true,
                message:"enter password"
            },
            pattern: {
                value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/,
                message:"not valid password"
            }
        },
        confpasswordvalidate:{
            required:{
                value:true,
                message:"enter confirmpassword"
            },
            validate:(params)=>{
                return params == password || "confirm password not match"
            }
        },
        Agevalidate: {
            required: {
                value: true,
                message: "please enter Age*"
            },
            min: {
                value: 18,
                message: "age must be 18"
            },
            max: {
                value: 60,
                message: "age should be not above 60"
            }

        },
        contactvalidate:{
            required:{
                value:true,
                message:"contact required*"
            },
            pattern:{
                value:/[7-9]{1}[0-9]{9}$/,
                message:"invalid contact"
            },
            maxLength:{
                value:10,
                message:"10 digit valid"
            }
        }

    }

   // Add these conditions above return()
    // const hasUpperCase = /[A-Z]/.test(password || "");
    // const hasLowerCase = /[a-z]/.test(password || "");
    // const hasNumber = /[0-9]/.test(password || "");
    // const hasSpecialChar = /[^A-Za-z0-9]/.test(password || "");

    const passwordRules = [
        {
            label:"at list one uppercase",
            test:/[A-Z]/.test(password || "")
        },
        {
            label:"at list one lowercase",
            test:/[a-z]/.test(password || "")
        },
        {
            label:"at list one number",
            test:/[0-9]/.test(password || "")
        },
        {
            label:"at list one special",
            test:/[^A-Za-z0-9]/.test(password || "")
        },
        {
            label: "minimum 8 characters",
            test: password?.length >= 8
        }
    ]

    const submitHandler = (data) => {
        // console.log(data)
        setUserData(data)
        setIsset(true)
    }

    const error = {
        color: "red"
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Form Validation Component</h1>
            <form action="" onSubmit={handleSubmit(submitHandler)}>

                Name: <input type="text" placeholder='enter your name' {...register('name', validationSchema.Namevalidate)} />
                <p style={error}>{errors.name && errors.name.message}</p><br />

                email: <input type="email" placeholder='enter your email' {...register('email', validationSchema.Emailvalidate)}  />
                <p style={error}>{errors.email && errors.email.message}</p><br />

                password: <input type="password" placeholder='enter password' {...register("password",validationSchema.passwordvalidate)} onFocus={setIsset}/>
                <p style={error}>{errors.password?.message}</p>
                {isset &&(                
                    <ul>
                        {passwordRules.map((rule) =>{
                            return <h5 style={{color:rule.test?"green":"black"}} >{rule.label}</h5>
                        })}    
                    </ul>
                )}


                confpassword: <input type="password" placeholder='enter confirmpassword' {...register("confpassword", validationSchema.confpasswordvalidate)} />
                <p style={error}>{errors.confpassword?.message}</p>

                age: <input type="number" {...register('age', validationSchema.Agevalidate)} />
                <p style={error}>{errors.age?.message} </p><br />

                Contact: <input type="text" {...register("contact",validationSchema.contactvalidate)}/>
                <p style={error}>{errors.contact?.message} </p><br />
                
                <button type='submit'>Submit</button>
              

            </form>

            {isset &&
                <div>
                    <h3>{userdata.name}</h3>
                    <h3>{userdata.email}</h3>
                    <h3>{userdata.age}</h3>
                    <h3>{userdata.contact}</h3>
                </div>

            }
        </div>
    )
}

export default Formvalidation
