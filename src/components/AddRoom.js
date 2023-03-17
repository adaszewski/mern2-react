import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddRoom(props) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/room/add/" + id, data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("dopisano pokój");
          window.location.href = "/house/" +id;
        } else {
          setResStatus("wystąpił błąd");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [resStatus, setResStatus] = useState("");

 

  console.log(errors);

  console.log(resStatus);

  return (
    <div>
      {props.roomadd ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>
            <strong>dopisz pokój </strong>
          </h3>
          <br />

          <label>
            <b>1. numer pokoju</b>
          </label>
          <br />
          <input {...register("numer_oznaczenie", { required: true })} type="string" />
          <br />
          <label>
            <b>2. standard</b>
          </label>
          <br />
          <input
            {...register("standard", { required: true })}
            type="number"
          />
          <br />
          <hr />
          <input type="submit" /> 
          <h2>{resStatus}</h2>
        </form>
      ) : (
        ""
      )}
      
   
    </div>
  );
}

export default AddRoom;
