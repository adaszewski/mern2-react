import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function AnkietaKatza(props) {
  
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/katz/add/" + id, useForm)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("Dodano badanie");
        } else {
          setResStatus("Wystąpił błąd");
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <label> Kąpiel</label>
      <br />
      <input
        {...register("katz1", { required: true })}
        type="radio"
        value="6"
      />
      <label>
       6- Całkowita samodzielność, nie potrzebuje pomocy (nawet jeżeli potrzebuje
        pomocy przy wchodzeniu lub wychodzeniu z wanny)
      </label>
      <br />
      <input
        {...register("katz1", { required: true })}
        type="radio"
        value="4"
      />
      <label>4- Niewielka pomoc, np. przy myciu niektórych części ciała </label>{" "}
      <br />
      <input
        {...register("katz1", { required: true })}
        type="radio"
        value="2"
      />{" "}
      <label>2- Znaczna pomoc – potrzebuje pomocy przy kąpieli</label>
      <br />
      <hr />
      <br />
      <label> Ubieranie się </label>
      <select {...register("katz2", { required: true })}>
        type="radio" value="6"
        <option value="6">
          Całkowita samodzielność – dobór odzieży, ubieranie się bez pomocy
        </option>
        <option value="4">
          Częściowa pomoc – samodzielne dobieranie odzieży, ale potrzebna pomoc
          przy suwakach i guzikach
        </option>
        <option value="2">
          Brak samodzielności – potrzebna pomoc przy przygotowaniu odzieży i
          ubieraniu się{" "}
        </option>
      </select>
      <hr />
      {errors.katz2 && <span>To pole jest wymagane</span>}
      <label> Toaleta </label>
      <select {...register("katz3", { required: true })}>
        <option value="6">
          Całkowita samodzielność – pacjent sam chodzi do łazienki, załatwia
          potrzeby fizjologiczne, porządkuje odzież (może używać laski,
          balkonika, wózka inwalidzkiego; może w nocy używać basenu i opróżniać
          go rano)
        </option>
        <option value="4">
          Potrzebuje pomocy – w toalecie, podmywaniu się, porządkowaniu odzieży
          lub w korzystaniu z basenu
        </option>
        <option value="2">
          Niezdolny do samodzielnego dbania o toaletę i załatwiania potrzeb
          fizjologicznych{" "}
        </option>
      </select>
      {errors.katz3 && <span>To pole jest wymagane</span>}
      <label> Kontrolowanie zwieraczy </label>
      <select {...register("katz4", { required: true })}>
        <option value="6">Całkowite kontrolowanie zwieraczy</option>
        <option value="4">
          Częściowy brak kontroli – przypadki braku kontroli zdarzają się „od
          czasu do czasu”
        </option>
        <option value="2">
          Całkowity brak kontroli lub konieczność założenia cewnika{" "}
        </option>
      </select>
      {errors.katz4 && <span>To pole jest wymagane</span>}
      <label> Spożywanie posiłków </label>
      <select {...register("katz5", { required: true })}>
        <option value="6">Całkowita samodzielność – je bez pomocy</option>
        <option value="4">
          Częściowa pomoc, np. krojenie mięsa, smarowanie masłem chleba
        </option>
        <option value="2">
          o Brak samodzielności – potrzeba karmienia lub konieczność założenia
          sondy{" "}
        </option>
      </select>
      {errors.katz5 && <span>To pole jest wymagane</span>}
      <label> Poruszanie się</label>
      <select {...register("katz6", { required: true })}>
        <option value="6">
          Całkowita samodzielność (kładzenie się i wstawanie z łóżka oraz
          siadanie i wstawanie z krzesła bez pomocy lub za pomocą laski)
        </option>
        <option value="4">
          kładzenie się i wstawanie z łóżka bądź krzesła tylko przy pomocy{" "}
        </option>
        <option value="2">stałe przebywanie w łóżku </option>
      </select>
      {errors.katz6 && <span>To pole jest wymagane</span>}
      <input type="submit" />
      {resStatus}
    </form>
  );
}

export default AnkietaKatza;
