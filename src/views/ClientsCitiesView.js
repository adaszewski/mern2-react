import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "moment-timezone";
import { useParams, useNavigate } from "react-router-dom";

const ClientsCitiesView = (props) => {
  const [clientsCity, setClientsCity] = useState([]);
  const navigate = useNavigate();

  let { miasto } = useParams();

  const getClientsCity = (props) => {
    axios
      .get("http://localhost:5000/api/client/miasto/" + miasto)
      .then((req) => {
        setClientsCity(req.data);
        console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClientsCity();
  }, []);

  const getNip = (nip) => {
    navigate("/client/nip/" + nip);
  };


  return (
    <div>
      {miasto}
      <table>
        <thead>
          <tr>
            <th>nazwa firmy</th>
            <th>
              NIP <br />
            </th>
            <th>dane adresowe</th>
            <th>opiekun</th>
            <th>opcje</th>
          </tr>
        </thead>
        <tbody>
          {clientsCity.map((client) => {
            return (
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
            );
          })}
        </tbody>{" "}
        
      </table>
    </div>
  );
};

export default ClientsCitiesView;
