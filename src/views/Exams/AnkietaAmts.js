import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { useParams } from "react-router-dom";

function AnkietaAmts() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/api/amts/add/' + id, data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus('dodano badanie');
        } else {
          setResStatus('error');
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
        <strong> Skrócony test sprawności umysłowej wg  Hodgkinsona</strong>
      </h1>
      <br />
     <label>Pacjent o numerze PESEL:<b></b></label>


      <label>
        <b>data badania:</b>
      </label>
      <input
        {...register('date_of_examination', { required: true })}
        type="date"
      />
      <br />
      <label>
        <b>1. Ile ma Pani / Pan lat?</b>
      </label>
      <br />
      <input
        {...register('amts1', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts1', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />

      <label>
        <b>2. Która jest godzina ? (dokładnośc do godziny)</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts2', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts2', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />

      <label>
        <b>3. Adres, który powiem proszę powtórzyć i zapamiętać: ul. Sienkiewicza 23 przez 6 </b>
      </label>
      <br />
      <br />
      <input
        {...register('amts3', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts3', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />

      <label>
        <b>4. Który mamy rok?</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts4', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts4', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />
      <label>
        <b>5. Jaki jest Pani / Pana adres zamieszkania?</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts5', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts5', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />
      <label>
        <b>6. Kiedy się Pani / Pan urodził(a)?</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts6', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts6', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />
      <label>
        <b>7. W którym roku rozpoczęła się II wojna światowa?</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts7', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts7', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />
      <label>
        <b>8. Jak się nazywa obecny prezydent RP?</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts8', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts8', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />

      <br />
      <hr />
      <label>
        <b>9. Proszę policzyć wstecz od 20 do 1</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts9', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts9', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />

      <br />
      <hr />
      <label>
        <b>10. Proszę powtórzyć adres, który Pani /Pan miał(a) zapamiętać w trzecim pytaniu</b>
      </label>
      <br />
      <br />
      <input
        {...register('amts10', { required: true })}
        type="radio"
        value="1"
      />
      <label> poprawna odpowiedź</label>
      <br />
      <input
        {...register('amts10', { required: true })}
        type="radio"
        value="0"
      />
      <label> odpowiedź błędna </label>
      <br />

      <br />
      <hr />
      <input type="submit" />
    </form>

  );
}

export default AnkietaAmts;
