import React from "react";
import axios from "axios";
import "./ClientsView.css";
import Moment from "react-moment";
import { useEffect, useState } from "react";
import "moment-timezone";

import { useParams } from "react-router-dom";

const ClientView = (props) => {
  const [clientOne, setClientOne] = useState("");


  let { nip } = useParams();

  const getClient = (props) => {
    axios
      .get("http://localhost:5000/api/client/nip/" + nip)
      .then((req) => {
        setClientOne(req.data);
        console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div>
      <h1>{clientOne?.nazwa_firmy} </h1>
      <h3>NIP: {clientOne?.nip} </h3>
      <p>
        adres:
        {clientOne?.adres?.kod_pocztowy} {clientOne?.adres?.miasto}
      </p>
      <p>
        ul.
        {clientOne?.adres?.ulica} {clientOne?.adres?.nr_domu} /
        {clientOne?.adres?.nr_lokalu}
      </p>
      <p>    wyślij wiadomość na adres {clientOne?.adres?.adres_email}</p>
      <button>
      
        <a href="mailto:{clientOne?.adres?.adres_email}?subject=Wiadomość od użytkownika systemu MERN2M">
          Wyślij e-mail
        </a>
     
      </button>
      <p>opiekun klienta: {clientOne?.opiekun}</p>

      <h2> zdarzenia</h2>

      <table>
        <thead>
          <tr>
            <th>data kontaktu</th>
            <th>forma kontaktu </th>
            <th>notatka</th>
            <th>data następnego kontaktu</th>
            <th>opcje</th>
          </tr>
        </thead>
        <tbody>
          {clientOne?.contacts?.map((contact) => {
            return (
              <tr key={contact._id}>
                <td>
                  {" "}
                  <Moment
                    parse="YYYY-MM-DD-T-hh:mm:ss.0100"
                    format="YYYY-MM-DD"
                  >
                    {contact?.data_kontaktu}
                  </Moment>
                </td>
                <td>{contact?.forma_kontaktu}</td>
                <td>{contact?.notatka}</td>
                <td>
                  <Moment
                    parse="YYYY-MM-DD-T-hh:mm:ss.0100"
                    format="YYYY-MM-DD"
                  >
                    {contact?.data_nastepnego_kontaktu}
                  </Moment>
                </td>
                <td>opcje</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClientView;
