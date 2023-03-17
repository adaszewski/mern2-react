import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddHouse from "../components/AddHouse";

function HousesView(props) {
  const [houses, setHouses] = useState([]);
  const [houseadd, setHouseAdd] = useState(false);

  const navigate = useNavigate();

  const getHouses = (props) => {
    axios
      .get("http://localhost:5000/api/house/all")
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

  const delHouse = (id) => {
    axios
      .delete(`http://localhost:5000/api/house/del/` + id)
      .then((req) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const getId = (id) => {
    navigate(`/house/${id}`);
  };

  return (
    <div>
      <button
        onClick={() => {
          setHouseAdd(true);
        }}
      >
        dodaj placówkę
      </button>
      <AddHouse houseadd={houseadd} setHouseAdd={setHouseAdd} />
      {!houseadd ? (
      <table>
        <thead>
          <tr>
            <th>nazwa domu</th>
            <th>dane adresowe</th>
            <th>opcje</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house._id}>
              <td>
                {house.nazwa}
                <br />
                liczba miejsc w domu:
                {house.liczba_miejsc}
              </td>
              <td>
                {house.kod_pocztowy}
                {house.poczta}
              </td>

              <td>
                <button
                  name="submit"
                  onClick={() => {
                    getId(house._id);
                  }}
                >
                  pokaż szczegóły
                </button>
                <button
                  name="submit"
                  onClick={() => {
                    delHouse(house._id);
                  }}
                >
                  usuń placówkę
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default HousesView;
