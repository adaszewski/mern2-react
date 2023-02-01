import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import { useNavigate, useParams } from 'react-router-dom';

function ClientView(props) {
  const [houseOne, setHouseOne] = useState('');

  const navigate = useNavigate();

  const { id } = useParams();

  const getHouses = (props) => {
    axios
      .get(`http://localhost:5000/api/house/${id}`)
      .then((req) => {
        if (req.data.error) {
          navigate('/house/all');
        }
        setHouseOne(req.data);
        console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <div>
      <h1>
        {houseOne?.nazwa_firmy}
        {' '}
      </h1>
      <h3>
        nazwa:
        {houseOne?.nazwa}
      </h3>
      <p>
        adres:
        <br />
        <hr />
        {houseOne?.kod_pocztowy}
        {' '}
        {houseOne?.poczta}
      </p>
      <p>

        {houseOne?.lokalizacja}
        {' '}
        {houseOne?.nr_lokalu}
        {houseOne?.adres?.nr_lokalu}
      </p>

      <p>
        liczba miejsc:
        {houseOne?.liczba_miejsc}
      </p>
      <hr />
      <i className="bi bi-webcam" />
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
          {houseOne?.contacts?.map((contact) => (
            <tr key={contact._id}>
              <td>
                {' '}
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
          ))}
        </tbody>
      </table>
      <hr />

      <table>
        <thead>
          <tr>
            <th>nazwa pliku</th>
            <th>pobierz </th>

          </tr>
        </thead>
        <tbody>
          {houseOne?.files?.map((contact) => (
            <tr key={contact._id}>
              <td>
                {' '}
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientView;
