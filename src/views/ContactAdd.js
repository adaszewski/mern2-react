import React, { useState } from 'react';

import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

function ContactAdd(props) {
  const { id } = useParams();

  const { nazwa_firmy } = useParams();

  const [contactForm, setContactForm] = useState({
    data_kontaktu: '',
    forma_kontaktu: '',
    klient: '',
    notatka: '',
    data_nastepnego_kontaktu: '',
    opiekun: '',
  });

  const handleInputChange = (e) => {
    const { target } = e;
    const { name } = target;

    setContactForm({
      ...contactForm,
      [name]: target.value,
    });
  };
  const handleSubmitNewContact = (e) => {
    e.preventDefault();
    // if (!validate()) {
    //   return;
    // }

    // let newContact = {
    //     data_kontaktu: "",
    //     forma_kontaktu: "",
    //     klient: "",
    //     notatka: "",
    //     data_nastepnego_kontaktu: "",
    //     opiekun: "",
    // };

    axios
      .post(`http://localhost:5000/api/contact/add/${id}`, contactForm)
      .then((req) => {
        const reqData = req.data;
        setContactForm({
          data_kontaktu: '',
          forma_kontaktu: '',
          klient: '',
          notatka: '',
          data_nastepnego_kontaktu: '',
          opiekun: '',
        });
        console.log(reqData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {nazwa_firmy}
      <Form onSubmit={handleSubmitNewContact}>
        <h2>Dopisz nowe zdarzenie dla klienta</h2>
        <h1>
          {nazwa_firmy}
          {' '}
        </h1>

        <label>data kontaktu</label>
        {' '}
        <input
          onChange={handleInputChange}
          id="data_kontaktu"
          type="date"
          name="data_kontaktu"
          value={contactForm.data_kontaktu}
        />
        <br />

        <label> Forma kontaktu</label>
        <select id="forma_kontakt" type="text" name="forma_kontaktu" onChange={handleInputChange}>
          <option>- wybierz </option>
          <option>spotkanie </option>
          <option>telefon </option>
          <option>e-mail</option>
          <option>poczta </option>
          <option>inne </option>
        </select>
        <br />

        <label>notatka</label>
        {' '}
        <input
          onChange={handleInputChange}
          id="notatka"
          type="text"
          name="notatka"
          placeholder="Opisz zdarzenie"
          value={contactForm.notatka}
        />
        <br />
        <label>data następnego kontaktu</label>
        {' '}
        <input
          onChange={handleInputChange}
          id="data_nastepnego_kontaktu"
          type="date"
          name="data_nastepnego_kontaktu"
          value={contactForm.data_nastepnego_kontaktu}
        />
        <br />

        <button formAction="submit"> dodaj </button>
        <br />
      </Form>

    </div>
  );
}

export default ContactAdd;
