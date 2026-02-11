import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const EventForm = () => {

  const { register, handleSubmit } = useForm()

   const [userdata, setUserData] = useState({})
   const [isset, setIsset] = useState(false)
 
   const onSubmit = (data) => {
     console.log(data);
     setUserData(data)
     setIsset(true)
   };

  return (
    <div style={{textAlign:"center"}}>
      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        Name: <input {...register("name")} /><br /><br />

        Date: <input type="date" {...register("date")} /><br /><br />

        Time: <input type="time" {...register("time")} /><br /><br />

        Ticket Type:
        <select {...register("ticket")}>
          <option>Regular</option>
          <option>VIP</option>
        </select>
        <br /><br />

        Agree Terms
        <input type="checkbox" {...register("agree")} />
        <br /><br />

        <button>Register</button>
      </form>

       {
        isset == true && <>
            <h1>output</h1>
            <h4>name:{userdata.name}</h4>
            <h4>date:{userdata.date}</h4>
            <h4>time:{userdata.time}</h4>
            <h4>ticket type:{userdata.ticket}</h4>
            <h4>agree terms:{userdata.agree ? "yes" : "no"}</h4>

        </>
      }
    </div>
  );
};

export default EventForm;