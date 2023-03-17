import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddBed(props) {
  const { id } = useParams();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/bed/add/" + id, data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("dopisano łóżko");
          props.getRoom();
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
      {props.bedadd ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>
            <strong>dopisz łózko do pokoju </strong>
          </h3>
          <br />

          <label>
            <b>1. numer łóżka</b>
          </label>
          <br />
          <input
            {...register("numer_lozka", { required: true })}
            type="string"
          />
          <br />
          <label>
            <b>2. indeks opieki</b>
          </label>
          <br />
          <input
            {...register("indeks_opieki", { required: true })}
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

export default AddBed;
