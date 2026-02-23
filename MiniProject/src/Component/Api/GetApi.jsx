import axios from 'axios'
import { toast } from "react-toastify";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const GetApi = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [formdata, setFormdata] = useState([])
    const [issetdata, setIssetdata] = useState(false)

    const validationSchema = {
        EmailValidation:
        {
            required:{
                value:true,
                message:"please enter email*"
            }
        },
        PasswordValidation:{
            required:{
                value:true,
                message:"please enter password*"
            }
        }
    }

    const submitHndler = async (data) => {
         try{
      const res = await axios.post("https://node5.onrender.com/user/login",data)
      console.log("response...", res);
      console.log("response data...", res.data);

      if (res.status == 200) {
        toast.success("Login successfully")
        navigate("/");
      }
      
    }catch{
      console.log(errors);
      toast.error("Login failed. Please check your credentials.")
      
    }
};

  return (
    <div>
        <form action="" onSubmit={handleSubmit(submitHndler)}>

        <h1>Get Api</h1>
        emial: <input type="email" {...register("email", validationSchema.EmailValidation)} />
        <p style={{color:"red"}}>{errors.email?.message}</p>
        password: <input type="password" {...register("password", validationSchema.PasswordValidation)} />
        <p style={{color:"red"}}>{errors.password?.message}</p>

        <button type='submit'>submit</button>
        </form>

        {issetdata && <div>
             <h1>output</h1>
             <p>hello {formdata.email}!</p>
            </div>
        }

    </div>
  )
}

export default GetApi
