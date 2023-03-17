import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'moment-timezone';
import { useNavigate, useParams } from 'react-router-dom';

function RoomsView(props) {
  const [roomshouse, setRoomsHouse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getRooms = (props) => {
    axios
      .get(`http://localhost:5000/api/room/${id}`)
      .then((req) => {
        setRoomsHouse(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRooms();
  }, []);

  const getId = (id) => {
    navigate(`/room/${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th >numer </th>
            <th> kondygnacja</th>
            <th>liczba miejsc</th>
         
          </tr>
        </thead>
        <tbody>
          {roomshouse.map((room) => (
            <tr key={room._id}>
              <td>
                {room.numer_oznaczenie}
              
                     </td>
              <td>
                {room.liczba_lozek}
             
              </td>

              <td>
                <button
                  name="szczegóły"
                  onClick={() => {
                    getId(room._id);
                  }}
                >
                  szczegóły
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomsView;
