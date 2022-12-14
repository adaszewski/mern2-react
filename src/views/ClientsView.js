import React from "react";
import axios from "axios";
import "./ClientsView.css";
import { useEffect, useState } from "react";
import "moment-timezone";
import { useNavigate } from "react-router-dom";

const ClientsView = (props) => {
  const [clients, setClients] = useState([]);
  
  const navigate = useNavigate();

  const getClients = (props) => {
    axios
      .get("http://localhost:5000/api/client/all")
      .then((req) => {
        setClients(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClients();
  }, []);

  const getNip = (nip) => {
    navigate("/client/nip/" + nip);
  };

  return (
    <div>
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
          {clients.map((client) => {
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
        </tbody>
      </table>
    </div>
  );
};

export default ClientsView;
