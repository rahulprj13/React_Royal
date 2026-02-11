import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FeedbackForm = () => {

  const { register, handleSubmit } = useForm();
  const [userdata, setUserdata] = useState({})
  const [isset, setIsset] = useState(false)

  const onSubmit = (data) => {
    console.log(data);
    setUserdata(data)
    setIsset(true)
  };

  return (
    <div style={{textAlign:"center"}}>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        Username: <input {...register("username")} /><br /><br />

        Rating:
        <input type="range" min="1" max="5" {...register("rating")} />
        <br /><br />

        Comments:
        <textarea {...register("comments")} />
        <br /><br />

        Recommend Us?
        Yes <input type="radio" value="Yes" {...register("recommend")} />
        No <input type="radio" value="No" {...register("recommend")} />
        <br /><br />

        <button>Send Feedback</button>
      </form>
      {
        isset == true && <>
          <h2>Feedback Details</h2>
          <p><strong>Username:</strong> {userdata.username}</p>
          <p><strong>Rating:</strong> {userdata.rating}</p>
          <p><strong>Comments:</strong> {userdata.comments}</p>
          <p><strong>Recommend Us:</strong> {userdata.recommend}</p>
        </>
      }
    </div>
  );
};

export default FeedbackForm;