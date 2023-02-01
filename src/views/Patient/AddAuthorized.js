import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

function AuthAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/api/patient/add', data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus('dopisano pacjenta');
          
        } else {
          setResStatus('wystąpił błąd');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [resStatus, setResStatus] = useState('');

  console.log(errors);

  console.log(resStatus);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>
        <strong>dopisz osobę uprawnioną</strong>
      </h1>
      <br />

      <label>
        <b>1. numer PESEL</b>
      </label>
      <br />
      <input
        {...register('pesel', { required: true })}
        type="number"
      />
      <br />
      <label>
        <b>2. data urodzenia</b>
      </label>
      <br />
      <input
        {...register('data_urodzenia', { required: true })}
        type="date"
        
      />
      <br />
      :

      <hr />
      <input type="submit" />
      <h2>{resStatus}</h2>
    </form>

  );
}

export default AuthAdd;