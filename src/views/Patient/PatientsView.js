import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'moment-timezone';
import { useNavigate } from 'react-router-dom';

function PatientsView(props) {
  const [patients, setPatients] = useState([]);

  const navigate = useNavigate();

  const getPatients = (props) => {
    axios
      .get('http://localhost:5000/api/patient/all')
      .then((req) => {
        setPatients(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPatients();
  }, []);

  const getId = (id) => {
    navigate(`/patient/${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nazwa domu</th>
            <th>
              NIP
              {' '}
              <br />
            </th>
            <th>dane adresowe</th>
            <th>opiekun</th>

          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.pesel}</td>

              <td>
                <button
                  name="submit"
                  onClick={() => {
                    getId(patient._id);
                  }}
                >
                  pokaż pacjenta
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientsView;
