import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'moment-timezone';
import { useNavigate } from 'react-router-dom';

function HousesView(props) {
  const [houses, setHouses] = useState([]);

  const navigate = useNavigate();

  const getHouses = (props) => {
    axios
      .get('http://localhost:5000/api/house/all')
      .then((req) => {
        setHouses(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getHouses();
  }, []);

  const getId = (id) => {
    navigate(`/house/${id}`);
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
          {houses.map((house) => (
            <tr key={house._id}>
              <td>
                {house.nazwa}
                <br />
                liczba miejsc w domu:
                {' '}
                {house.liczba_miejsc}
              </td>
              <td>
                {house.kod_pocztowy}
                {' '}
                {house.poczta}
              </td>

              <td>
                <button
                  name="submit"
                  onClick={() => {
                    getId(house._id);
                  }}
                >
                  pokaż klienta
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HousesView;
