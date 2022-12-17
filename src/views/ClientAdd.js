import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ClientAdd = (props) => {
  const [clientForm, setClientForm] = useState({
    nazwa_firmy: "",
    nip: "",
    adres: {
      kod_pocztowy: "",
      miasto: "",
      ulica: "",
      nr_domu: "",
      nr_lokalu: "",
      adres_email: "",
      nr_telefonu: "",
    },
    opiekun: "",
  });

  const [errors, setErrors] = useState({
    nazwa_firmy: "",
    nip: "",
    adres: {
      kod_pocztowy: "",
      miasto: "",
      ulica: "",
      nr_domu: "",
      nr_lokalu: "",
      adres_email: "",
      nr_telefonu: "",
    },
    opiekun: "",
  });

  useEffect(() => {
    setClientForm({
      nazwa_firmy: "",
      nip: "",
      adres: {
        kod_pocztowy: "",
        miasto: "",
        ulica: "",
        nr_domu: "",
        nr_lokalu: "",
        adres_email: "",
        nr_telefonu: "",
      },
      opiekun: "",
    });
  }, []);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setClientForm({
      ...clientForm,
      [name]: target.value,
    });
  };

  const validate = () => {
    let validError = {
      nazwa_firmy: false,
      nip: false,
      adres: {
        kod_pocztowy: false,
        miasto: false,
        ulica: false,
        nr_domu: false,
        nr_lokalu: false,
        adres_email: false,
        nr_telefonu: false,
      },
      opiekun: false,
    };
    if (clientForm.nazwa_firmy.trim().length < 3) {
      validError.nazwa_firmy = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          nazwa_firmy: "Pole nazwa firmy powinno zawierać minimum 3 znaki",
        };
      });
    } else if (!/[a-zA-Z]+$/.test(clientForm.nazwa_firmy.trim())) {
      validError.nazwa_firmy = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          nazwa_firmy: "Pole imię może zawierać tylko litery",
        };
      });
    } else {
      validError.nazwa_firmy = false;
      setErrors((prevErrors) => {
        return { ...prevErrors, nazwa_firmy: "" };
      });
    }

    return !validError.nazwa_firmy;
  };

  const handleSubmitNewClient = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    let newClient = {
      nazwa_firmy: "",
      nip: "",
      adres: {
        kod_pocztowy: "",
        miasto: "",
        ulica: "",
        nr_domu: "",
        nr_lokalu: "",
        adres_email: "",
        nr_telefonu: "",
      },
      opiekun: "",
    };

    axios
      .post("http://localhost:5000/api/client/add", newClient)
      .then((req) => {
        let reqData = req.data;
        setClientForm({
          nazwa_firmy: "",
          nip: "",
          adres: {
            kod_pocztowy: "",
            miasto: "",
            ulica: "",
            nr_domu: "",
            nr_lokalu: "",
            adres_email: "",
            nr_telefonu: "",
          },
          opiekun: "",
        });
        console.log(reqData);
    
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
       
      <Form onSubmit={handleSubmitNewClient}>
        <h2>Dopisz nowego klienta</h2>
        <label>nazwa firmy</label>{" "}
        <input
          onChange={handleInputChange}
          id="nazwa_firmy"
          type="text"
          name="nazwa_firmy"
          placeholder="Wpisz nazwę firmy"
          value={clientForm.nazwa_firmy}
        />
        <br></br>
        <label>nip</label>{" "}
        <input
          onChange={handleInputChange}
          id="nip"
          type="text"
          name="nip"
          placeholder="Wpisz NIP - 10 cyfr bez innych znaków"
          value={clientForm.nip}
        />
        <br />
        <label>adres.kod_pocztowy</label>{" "}
        <input
          onChange={handleInputChange}
          id="adres.kod_pocztowy"
          type="text"
          name="adres.kod_pocztowy"
          placeholder="wpisz kod pocztowy- 6 cyfr bez innych znaków"
          value={clientForm.adres.kod_pocztowy}
        />
        <br></br>
        <label>adres.miasto</label>{" "}
        <input
          onChange={handleInputChange}
          id="adres.miasto"
          type="text"
          name="adres.miasto"
          placeholder="Wpisz miasto"
          value={clientForm.adres.miasto}
        />
        <br></br>
        <label>adres.ulica</label>{" "}
        <input
          onChange={handleInputChange}
          id="adres.ulica"
          type="text"
          name="adres.ulica"
          placeholder="wpisz ulicę"
          value={clientForm.adres.ulica}
        />
        <br></br>
        <label>adres.nr_domu</label>{" "}
        <input
          onChange={handleInputChange}
          id="adres.nr_domu"
          type="text"
          name="adres.nr_domu"
          placeholder="wpisz numer domu"
          value={clientForm.adres.nr_domu}
        />
        <br></br>
        <label>adres.nr_lokalu</label>{" "}
        <input
          onChange={handleInputChange}
          id="adres.nr_lokalu"
          type="text"
          name="adres.nr_lokalu"
          placeholder="wpisz numer lokalu"
          value={clientForm.adres.nr_lokalu}
        />
        <br></br>
        <label>adres_email</label>{" "}
        <input
          onChange={handleInputChange}
          id="adres.adres_email"
          type="text"
          name="adres.adres_email"
          placeholder="adres.adres_email"
          value={clientForm.adres.adres_email}
        />
        <br></br>
        <label>numer telefonu</label>{" "}
        <input
          onChange={handleInputChange}
          id="adres.nr_telefonu"
          type="text"
          name="adres.nr_telefonu"
          placeholder="adres.nr_telefonu"
          value={clientForm.adresnr_telefonu}
        />
        <br></br>
        <label>opiekun</label>{" "}
        <input
          onChange={handleInputChange}
          id="opiekun"
          type="text"
          name="opiekun"
          placeholder="opiekun"
          value={clientForm.opiekun}
        />
        <br></br>
        <button formAction="submit" > dodaj </button>
        <br />
      </Form>
      

      <p> {errors.nazwa_firmy} </p>
    </div>
  );
};

export default ClientAdd;
