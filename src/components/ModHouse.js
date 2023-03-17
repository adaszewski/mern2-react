import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function ModHouse(props) {
    const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .put("http://localhost:5000/api/house/update/" + id, data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("zmodyfikowano dom");
        } else {
          setResStatus("wystąpił błąd");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [resStatus, setResStatus] = useState("");

  return (
    <div>
      {props.housemod ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>
            <strong>Zmień dane placówki </strong>
          </h3>
          <br />
          <table>
            <tbody>
              <tr>
                <th>
                  <label> nazwa </label>
                </th>
                <th>
                  <input
                    {...register("nazwa", { required: true })}
                    type="string"
                    defaultValue={props.houseOne.nazwa}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>indeks opieki </label>
                </th>
                <th>
                  <input
                    {...register("kod_pocztowy", { required: true })}
                    type="number"
                    defaultValue={props.houseOne.kod_pocztowy}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>województwo </label>
                </th>
                <th>
                  <select {...register("wojewodztwo", { required: true })}>
                    <option value="dolnośląskie">dolnośląskie</option>
                    <option value="kujawsko-pomorskie">
                      kujawsko-pomorskie
                    </option>
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
                    <option value="warmińsko-mazurskie">
                      warmińsko- mazurskie
                    </option>
                    <option value="wielkopolskie">wielkopolskie</option>
                    <option value="zachodniopomorskie">
                      zachodniopomorskie
                    </option>
                    defaultValue={props.houseOne.wojewodztwo}
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <label>poczta </label>
                </th>

                <th>
                  <input
                    {...register("poczta", { required: true })}
                    type="string"
                    defaultValue={props.houseOne.poczta}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label> lokalizacja </label>
                </th>
                <th>
                  <input
                    {...register("lokalizacja", { required: true })}
                    type="string"
                    defaultValue={props.houseOne.lokalizacja}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>numer lokalu </label>
                </th>

                <th>
                  <input
                    {...register("nr_lokalu", { required: true })}
                    type="string"
                    defaultValue={props.houseOne.nr_lokalu}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>numer telefonu</label>
                </th>
                <th>
                  <input
                    {...register("telefon_1", { required: true })}
                    type="string"
                    defaultValue={props.houseOne.telefon_1}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>dodatkowy numer telefonu</label>
                </th>
                <th>
                  <input
                    {...register("telefon_2", { required: false })}
                    type="string"
                    defaultValue={props.houseOne.telefon_2}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>adres e-mail</label>
                </th>
                <th>
                  <input
                    {...register("e_mail", { required: false })}
                    type="string"
                    defaultValue={props.houseOne.e_mail}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>strona www</label>
                </th>
                <th>
                  <input
                    {...register("www", { required: false })}
                    type="string"
                    defaultValue={props.houseOne.www}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label> rodzaj działalności </label>
                </th>
                <th>
                  <select
                    {...register("rodzaj_działalnosci", { required: true })}
                  >
                    defaultValue={props.houseOne.e_mail}
                    <option value="gospodarcza">gospodarcza</option>
                    <option value="statutowa">statutowa</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <label> liczba miejsc </label>
                </th>
                <th>
                  <input
                    {...register("liczba_miejsc", { required: true })}
                    type="string"
                    defaultValue={props.houseOne.liczba_miejsc}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label> numer zgody </label>
                </th>
                <th>
                  <input
                    {...register("nr_zgody", { required: true })}
                    type="string"
                    defaultValue={props.houseOne.nr_zgody}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label>rodzaj zezwolenia</label>
                </th>
                <th>
                  <select
                    {...register("rodzaj_zezwolenia", { required: true })}
                  >
                    defaultValue={props.houseOne.rodzaj_zezwolenia}
                    <option value="bezterminowa">bezterminowa</option>
                    <option value="terminowa">terminowa</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <label> organ rejestrowy </label>
                </th>
                <th>
                  <select {...register("organ_rejestrowy", { required: true })}>
                  defaultValue={props.houseOne.organ_rejestrowy}
                    <option value="Wojewoda Dolnośląski">
                      Wojewoda Dolnośląski
                    </option>
                    <option value="Wojewoda Kujawsko-Pomorski">
                      Wojewoda Kujawsko-Pomorski
                    </option>
                    <option value="Wojewoda Lubelski">Wojewoda Lubelski</option>
                    <option value="Wojewoda Lubuski">Wojewoda Lubuski</option>
                    <option value="Wojewoda Łódzki">Wojewoda Łódzki</option>
                    <option value="Wojewoda Małopolski">
                      Wojewoda Małopolski
                    </option>
                    <option value="Wojewoda Mazowiecki">
                      Wojewoda Mazowiecki
                    </option>
                    <option value="Wojewoda Opolski">Wojewoda Opolski</option>
                    <option value="Wojewoda Podkarpacki">
                      Wojewoda Podkarpacki
                    </option>
                    <option value="Wojewoda Podlaski">Wojewoda Podlaski</option>
                    <option value="Wojewoda Pomorski">Wojewoda Pomorski</option>
                    <option value="Wojewoda Śląski">Wojewoda Śląski</option>
                    <option value="Wojewoda Świętokrzyski">
                      Wojewoda Świętokrzyski
                    </option>
                    <option value="Wojewoda Warmińsko-Mazurski">
                      Wojewoda Warmińsko- Mazurski
                    </option>
                    <option value="Wojewoda Wielkopolski">
                      Wojewoda Wielkopolski
                    </option>
                    <option value="Wojewoda Zachodniopomorski">
                      Wojewoda Zachodniopomorski
                    </option>
                  </select>
                </th>
              </tr>
            </tbody>
          </table>
          <input type="submit" />
          <button
            onClick={() => {
              props.setHouseMod(false);
            }}
          >
            rezygnuj z modyfikacji
          </button>
          <h2>{resStatus}</h2>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default ModHouse;
