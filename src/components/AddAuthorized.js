import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function AuthAdd(props) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/authorized/add/" + id, data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("dopisano osobę uprawnioną");
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
      {props.authorizedadd ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>
            <strong>dopisz osobę uprawnioną </strong>
          </h3>
          <br />

          <label>
            <b>1. numer PESEL</b>
          </label>
          <br />
          <input {...register("pesel", { required: true })} type="number" />
          <br />
          <label>
            <b>2. numer telefonu</b>
          </label>
          <br />
          <input
            {...register("numer_telefonu", { required: true })}
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

export default AuthAdd;
