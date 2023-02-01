import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'moment-timezone';
import { useParams, useNavigate } from 'react-router-dom';

function ClientsUserView(props) {
  const [clientsUser, setClientsUser] = useState([]);
  const navigate = useNavigate();

  const { opiekun } = useParams();

  const getClientsUser = (props) => {
    axios
      .get(`http://localhost:5000/api/client/opiekun/${opiekun}`)
      .then((req) => {
        setClientsUser(req.data);
        console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClientsUser();
  }, []);

  const getNip = (nip) => {
    navigate(`/client/opiekun/${opiekun}`);
  };

  return (
    <div>
      {opiekun}
      <table>
        <thead>
          <tr>
            <th>nazwa firmy</th>
            <th>
              NIP
              {' '}
              <br />
            </th>
            <th>dane adresowe</th>
            <th>opiekun</th>
            <th>opcje</th>
          </tr>
        </thead>
        <tbody>
          {clientsUser.map((client) => (
            <tr key={client._id}>
              <td>{client.nazwa_firmy}</td>
              <td>{client.nip}</td>
              <td>{client.adres.miasto}</td>
              <td>{client.opiekun}</td>

              <td>
                <button
                  name="submit"
                  onClick={() => {
                    getNip(client.nip);
                  }}
                >
                  pokaż klienta
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {' '}

      </table>
    </div>
  );
}

export default ClientsUserView;
