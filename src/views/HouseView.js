import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AddRoom from "../components/AddRoom";
import ModHouse from "../components/ModHouse";

function HouseView(props) {
  const [houseOne, setHouseOne] = useState("");
  const [roomadd, setRoomAdd] = useState(false);
  const [housemod, setHouseMod] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const getHouses = (props) => {
    axios
      .get(`http://localhost:5000/api/house/${id}`)
      .then((req) => {
        if (req.data.error) {
          navigate("/house/all");
        }
        setHouseOne(req.data);
        // console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getHouses();
  }, []);

  const delRoom = (id) => {
    axios
      .delete(`http://localhost:5000/api/room/del/` + id)
      .then((req) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const getId = (id) => {
    navigate(`/room/${id}`);
  };

  return (
    
    <div>
      <ModHouse
        houseOne={houseOne}
        housemod={housemod}
        setHouseMod={setHouseMod}
      />
     {!housemod ? (
        <p>a</p>
             ) : (
        ""
      )
}

      <h3>{houseOne?.nazwa}</h3>
      <p>adres:</p>
      <p>
        {houseOne?.kod_pocztowy} {houseOne?.poczta}
      </p>
      <p>
        {houseOne?.lokalizacja} {houseOne?.nr_lokalu}
      </p>
      <p>
        liczba miejsc:
        {houseOne?.liczba_miejsc}
      </p>
      <p>
        kontakt:
        {houseOne?.telefon_1}
        {houseOne?.telefon_2}
      
      {houseOne?.www}
      {houseOne?.www}
      {houseOne?.www}
      </p>
      {houseOne?.www}
      <button
        onClick={() => {
          setHouseMod(true);
        }}> modyfikuj dane  </button>
      <hr />   
     
      <h2> Pokoje</h2>
      <button
        onClick={() => {
          setRoomAdd(true);
        }}
      > dodaj pokój </button>


 {housemod && roomadd ? (
      
        <button
          onClick={() => {
            setRoomAdd(false);
          }}
        >
          rezygnacja
        </button>
      ) : (
        ""
      )}


      <AddRoom houseOne={houseOne} roomadd={roomadd} setRoomAdd={setRoomAdd} />
   
      <table>
        <thead>
          <tr>
            <th>oznaczenie pokoju</th>
            <th>standard</th>
            <th>miejsca</th>
          </tr>
        </thead>

        <tbody>
          {houseOne.rooms?.map((room) => (
            <tr key={room._id}>
              <td>
                {room.numer_oznaczenie}
                <br />
              </td>
              <td>
                {room.standard}
                <br />
              </td>
              <td>
                {room.liczba_lozek}
                <br />
              </td>
              <td>
                <button
                  onClick={() => {
                    getId(room._id);
                  }}
                >
                  szczegóły
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    delRoom(room._id);
                  }}
                >
                  usuń pokój
                </button>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
      
    </div>
  );
}

export default HouseView;
