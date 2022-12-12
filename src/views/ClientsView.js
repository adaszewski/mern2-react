import React from "react";
import axios from "axios";
import "./ClientsView.css";
import { useEffect, useState } from "react";
import "moment-timezone";

const ClientsView = (props) => {
  const [clients, setClients] = useState([]);
  const [searchForm, setSearchForm]= useState({nip: ""})

  useEffect(() => {
    setSearchForm({ nip: "" });
  }, []);

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

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/client/del/" + id)
      .then((req) => {
        let reqData = req.data;
        console.log(reqData);
        props.getClients();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateOne = (id) => {
    axios
      .put("http://localhost:5000/api/client/update/" + id)
      .then((req) => {
        let reqData = req.data;
        console.log(reqData);
        props.getClients();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setSearchForm({
      ...searchForm,
      [name]: target.value,
    });
  }

  const handleSearchByNip = (e) => {
    e.preventDefault();
   

    let newSearch = {
      nip: "",
    };
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nazwa firmy</th>
            <th>NIP <br/>
            <form onSubmit={handleSearchByNip}>
      
        <input
          onChange={handleInputChange}
          id="nazwa_firmy"
          type="text"
          name="nip"
          placeholder="wyszukaj firmy po NIP"
          
        /> <button> szukaj</button></form>
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
                    onClick={() => handleDelete(client._id)}
                  >
                    usuń
                  </button>
                  <button name="submit" onClick={() => updateOne(client._id)}>modyfikuj</button>
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
