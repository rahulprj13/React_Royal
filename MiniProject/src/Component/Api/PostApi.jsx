import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
//
const PostApi = () => {

    const {register, handleSubmit} = useForm()

    // const adduser = async () => {

    //     const userobj = {
    //         name: "rahul",
    //         age: 34,
            // email: "rahul@gmail.com",
    //         password: "rahul1234",
    //         isActive: true
    //     }

    //     try {
    //         const res = await axios.post("https://node5.onrender.com/user/user/", userobj)
    //         console.log(res);
    //         console.log(res.data);
            
    //     }
    //     catch (err) {
    //         console.log(err);
    //         alert("something went wrong")
    //     }
    // }

    const submitHandler = async(data)=>{
        const res = await axios.post("https://node5.onrender.com/user/user/", data)
        console.log(res);
        console.log(res.data);
        console.log(data);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Post Api</h1>
            <form action="" onSubmit={handleSubmit(submitHandler)}>
                Name: <input type="text" placeholder='enter your name' {...register("name")}/><br />
                Age: <input type="number" placeholder='enter your age' {...register("age")}/><br />
                Email: <input type="email" placeholder='enter your email' {...register("email")}/><br />
                Password: <input type="password" placeholder='enter your password' {...register("password")}/><br />
                IsActive: <input type="checkbox" {...register("isActive")}/><br />
                <button type='submit'>adduser</button>
            </form>
        </div>
    )
}

export default PostApi
