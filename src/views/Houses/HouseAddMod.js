import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function HouseAddMod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/api/house/add', data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus('Successful Registration!');
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
      <label> nazwa</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('nazwa', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      {errors.nazwa && <span>To pole jest wymagane</span>}
      {errors.nazwa && <span>To pole jest wymagane</span>}

      <br />
      <label>kod pocztowy</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('kod_pocztowy', {
          required: true,
          max: 5,
          min: 5,
          maxLength: 79,
        })}
      />
      <br />
      <label> województwo</label>
      <select {...register('wojewodztwo', { required: true })}>
        <option value="dolnośląskie">dolnośląskie</option>
        <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
        <option value="lubelskie">lubelskie</option>
        <option value="lubuskie">lubuskie</option>
        <option value="łódzkie">łódzkie</option>
        <option value="małopolskie">małopolskie</option>
        <option value="mazowieckie">mazowieckie</option>
        <option value="opolskie">opolskie</option>
        <option value="podkarpackie">podkarpackie</option>
        <option value="podlaskie">podlaskie</option>
        <option value="pomorskie">pomorskie</option>
        <option value="śląskie">śląskie</option>
        <option value="świętokrzyskie">świętokrzyskie</option>
        <option value="warmińsko-mazurskie">warmińsko</option>
        <option value="wielkopolskie">wielkopolskie</option>
        <option value="zachodniopomorskie">zachodniopomorskie</option>
      </select>

      <label>poczta</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('poczta', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      <br />
      <label>ulica / miejscowość</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('lokalizacja', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      <br />
      <label> numer lokalu</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('nr_lokalu', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      <br />
      <label> numer telefonu - 1</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('telefon_1', {
          required: true,
          max: 9,
          min: 9,
          maxLength: 9,
        })}
      />
      <br />
      <label> numer telefonu - 2</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('telefon_2', {
          required: true,
          max: 9,
          min: 9,
          maxLength: 9,
        })}
      />
      <br />
      <label> adres e-mail</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('e_mail', { required: false, pattern: /^\S+@\S+$/i })}
      />
      <br />
      <label> strona wwww</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('www', {
          required: true, max: 20, min: 3, maxLength: 79,
        })}
      />
      <br />
      <label> rodzaj działalności</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('rodzaj_działalności', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      <br />
      <label> liczba miejsc</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('liczba_miejsc', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      <br />
      <label> numer decyzji Organu</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('nr_zgody', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      <br />
      <label> rodzaj zezwolenia</label>
      <input
        type="text"
        placeholder="Nazwa firmy"
        {...register('rodzaj_zezwolenia', {
          required: true,
          max: 20,
          min: 3,
          maxLength: 79,
        })}
      />
      <br />
      <label> Organ Rejestrowy</label>

      <select {...register('organ_rejestrowy', { required: true })}>
        <option value="Wojewoda Dolnośląski">Dolnośląski</option>
        <option value="Wojewoda Kujawsko-Pomorski">Kujawsko-Pomorski</option>
        <option value="Wojewoda Lubelski">Lubelski</option>
        <option value="Wojewoda Lubuski">Lubuski</option>
        <option value="Wojewoda Łódzki">Łódzki</option>
        <option value="Wojewoda Małopolski">Małopolski</option>
        <option value="Wojewoda Mazowiecki">Mazowiecki</option>
        <option value="Wojewoda Opolski">Opolski</option>
        <option value="Wojewoda Podkarpacki">Podkarpacki</option>
        <option value="Wojewoda Podlaski">Podlaski</option>
        <option value="Wojewoda Pomorski">Pomorski</option>
        <option value="Wojewoda Śląski">Śląski</option>
        <option value="Wojewoda Świętokrzyski">Świętokrzyski</option>
        <option value="Wojewoda Warmińsko-Mazurski">Warmińsko-Mazurski</option>
        <option value="Wojewoda Wielkopolski">Wielkopolski</option>
        <option value="Wojewoda Zachodniopomorski">Zachodniopomorski</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default HouseAddMod;
