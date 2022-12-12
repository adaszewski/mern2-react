import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ClientsView from "./ClientsView";
import ContactsView from "./ContactsView";
import ClientAdd from "./ClientAdd";


const Home = (props) => {
  const [clients, setClients] = useState([]);
  // const [client, setClient] = useState([]);

  const [contacts, setContacts] = useState([]);
  

  // const getClient = (props) => {
  //  let nip = clients.nip
  //   axios
  //     .get("http://localhost:5000/api/client/"+nip)
  //     .then((req) => {
  //       setClient(req.data);
  //       console.log(req.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };



  // useEffect(() => {
  //   getClient();
  // }, );

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

  const getContacts = (props) => {
    axios
      .get("http://localhost:5000/api/contact/all")
      .then((req) => {
        setContacts(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="home">
 

      <ClientAdd
    
      />

      <ContactsView
        contacts={contacts}
        setContacts={setContacts}
        getContacts={getContacts}
       
      />
      <ClientsView 
        
        getClients={getClients}
        clients={clients}
        setClients={setClients}
      />
    </div>
  );
};

export default Home;
