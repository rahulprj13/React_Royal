import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import GetApi from "./GetApi";

const PostApi = () => {

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {

    const userData = {
      name: data.name,
      age: Number(data.age),   // number me convert
      email: data.email,
      password: data.password,
      isActive: data.isActive ? true : false
    };

    console.log("Sending Data:", userData);

    try {

      const response = await axios.post("https://node5.onrender.com/user/user/",userData);

      alert("User Added Successfully");
      console.log(response.data);

    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post Api</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <br />
        Name: <input type="text" {...register("name")} />
        <br /><br />

        Age: <input type="number" {...register("age")} />
        <br /><br />

        Email: <input type="email" {...register("email")} />
        <br /><br />

        Password: <input type="password" {...register("password")} />
        <br /><br />

        IsActive: <input type="checkbox" {...register("isActive")} />
        <br /><br />

        <button type="submit">Add User</button>
      </form>

      <GetApi />
    </div>
  );
};

export default PostApi;



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