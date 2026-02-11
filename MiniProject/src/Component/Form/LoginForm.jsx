import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {

  const { register, handleSubmit } = useForm();
  const [userdata, setUserData] = useState({})
  const [isset, setIsset] = useState(false)

  const onSubmit = (data) => {
    console.log(data);
    setUserData(data)
    setIsset(true)
  };

  return (
    <div style={{textAlign:"center"}}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        Email:
        <input type="email" {...register("email")} />
        <br /><br />

        Password:
        <input type="password" {...register("password")} />
        <br /><br />

        Remember Me
        <input type="checkbox" {...register("remember")} />
        <br /><br />

        <button>Login</button>
      </form>
      {
        isset == true && <>
            <h1>output</h1>
            <h4>email:{userdata.email}</h4>
            <h4>password:{userdata.password}</h4>

            <h4>remember:{userdata.remember ? "yes" : "no"}</h4>

        </>
      }
    </div>
  );
};

export default LoginForm