import axios from "axios";
import Moment from "react-moment";
import { useEffect, useState } from "react";
import "moment-timezone";

const ContactsView = (props) => {
  const [contacts, setContacts] = useState([]);
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

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/contact/del/" + id)
      .then((req) => {
        let reqData = req.data;
        console.log(reqData);
        props.getContacts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nazwa firmy</th>
            <th>data</th>
            <th>forma</th>
            <th>notatka</th>
            <th> opiekun </th>
            <th>data następnego kontaktu</th>
            <th>opcje</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact._id}>
                <td> {contact.client.nazwa_firmy}</td>
                <td>
                  <Moment
                    parse="YYYY-MM-DD-T-hh:mm:ss.0100"
                    format="YYYY-MM-DD"
                  >
                    {contact.data_kontaktu}{" "}
                  </Moment>
                </td>
                <td>{contact.forma_kontaktu}</td>
                <td>{contact.notatka}</td>
                <td>{contact.opiekun}</td>

                <td>
                  {contact.data_nastepnego_kontaktu > contact.data_kontaktu ? (
                    <Moment
                      parse="YYYY-MM-DD-T-hh:mm:ss.0100"
                      format="YYYY-MM-DD"
                    >
                      {contact.data_nastepnego_kontaktu}
                    </Moment>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  <button name="submit">modyfikuj</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsView;
