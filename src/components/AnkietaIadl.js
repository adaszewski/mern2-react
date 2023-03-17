import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

function AnkietaIadl(props) {
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/iadl/add/" + id, useForm)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("Successful Registration!");
        } else {
          setResStatus("error");
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
    {props.iadllexam? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>
        <strong> Ocena według skali IADL wg Lawtona</strong>
      </h1>
      <br />
      <label>
        Pacjent o numerze PESEL:<b>{props.patientOne?.pesel}</b>
      </label>
      <br></br>
      <label>
        <b>data badania:</b>
      </label>
      <input
        {...register("date_of_examination", { required: true })}
        type="date"
      />
      <br />
      <br />
      <label>
        <b>1. Użycie telefonu</b>
      </label>
      <br />
      <input
        {...register("iadl1", { required: true })}
        type="radio"
        value="1"
      />
      <label> przynajmniej odbiera</label>
      <br />
      <input
        {...register("iadl1", { required: true })}
        type="radio"
        value="0"
      />
      <label> nie korzysta </label>
      <br />
      <br />
      <label>
        <b>2. Zakupy codzienne</b>
      </label>
      <br />
      <input
        {...register("iadl2", { required: true })}
        type="radio"
        value="1"
      />
      <label> tak</label>
      <br />
      <input
        {...register("iadl2", { required: true })}
        type="radio"
        value="0"
      />
      <label> nie, lub z pomocą </label>
      <br />
      <br />
      <label>
        <b>3. Przygotowywanie posiłków</b>
      </label>
      <br />
      <input
        {...register("iadl3", { required: true })}
        type="radio"
        value="1"
      />
      <label> tak, samodzielnie</label>
      <br />
      <input
        {...register("iadl3", { required: true })}
        type="radio"
        value="0"
      />
      <label> nie, lub z pomocą </label>
      <br />
      <br />
      <label>
        <b>4. Codzienne porządki</b>
      </label>
      <br />
      <input
        {...register("iadl4", { required: true })}
        type="radio"
        value="1"
      />
      <label> tak, bez pomocy</label>
      <br />
      <input
        {...register("iadl4", { required: true })}
        type="radio"
        value="0"
      />
      <label> nie, lub z pomocą </label>
      <br />
      <br />
      <label>
        <b>5. Pranie</b>
      </label>
      <br />
      <input
        {...register("iadl5", { required: true })}
        type="radio"
        value="1"
      />
      <label> jeśli cokolwiek pierze</label>
      <br />
      <input
        {...register("iadl5", { required: true })}
        type="radio"
        value="0"
      />
      <label> nie, lub z pomocą </label>
      <br />
      <br />
      <label>
        <b>6. Środki transportu</b>
      </label>
      <br />
      <input
        {...register("iadl6", { required: true })}
        type="radio"
        value="1"
      />
      <label> samodzielnie korzysta</label>
      <br />
      <input
        {...register("iadl6", { required: true })}
        type="radio"
        value="0"
      />
      <label> wymaga pomocy</label>
      <br />
      <br />
      <label>
        <b>7. Własne leki</b>
      </label>
      <br />
      <input
        {...register("iadl7", { required: true })}
        type="radio"
        value="1"
      />
      <label> zażywa w sposób właściwy</label>
      <br />
      <input
        {...register("iadl7", { required: true })}
        type="radio"
        value="0"
      />
      <label> wymaga pomocy</label>
      <br />
      <br />
      <label>
        <b>8. Rozporządzanie swoimi pieniędzmi</b>
      </label>
      <br />{" "}
      <input
        {...register("iadl8", { required: true })}
        type="radio"
        value="1"
      />
      <label> Samodzielnie, podczas codziennych zakupów</label>
      <br />
      <input
        {...register("iadl8", { required: true })}
        type="radio"
        value="0"
      />
      <label> Nie posługuje się</label>
      <br />
      <br />
      <hr />
      <input type="submit" />
      <h2>{resStatus}</h2>
  
    </form>) :("")}
    </div>
  );
}

export default AnkietaIadl;
