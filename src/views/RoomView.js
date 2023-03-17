import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddBed from "../components/AddBed";
import AddStay from "../components/AddStay";
import moment from "moment";
import "moment/locale/pl";
moment.locale("pl");

function RoomView(props) {
  const [roomOne, setRoomOne] = useState("");
  const [bedadd, setBedAdd] = useState(false);

  const [stayadd, setStayAdd] = useState({ isVisible: false, bedId: 0 });

  const { id } = useParams();

  const getRoom = (props) => {
    axios
      .get(`http://localhost:5000/api/room/${id}`)
      .then((req) => {
        setRoomOne(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRoom();
  }, []);

  const delBed = (id) => {
    axios
      .delete(`http://localhost:5000/api/bed/del/` + id)
      .then((req) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1> {roomOne?.house?.nazwa}</h1>
      <h1> lista łóżek w pokoju nr: {roomOne.numer_oznaczenie}</h1>

      <button
        onClick={() => {
          setBedAdd(true);
        }}
      >
        dodaj łóżko
      </button>
      <AddBed getRoom={getRoom} houseOne={props.houseOne} bedadd={bedadd} setBedAdd={setBedAdd} />
      <table>
        <thead>
          <tr>
            <th>numer </th>
            <th>indeks opieki</th>
            <th>początek pobytu</th>
            <th>zakończenie pobytu</th>
            <th>opcje</th>
          </tr>
        </thead>
        <tbody>
          {roomOne?.miejsca?.map((bed) => (
            <tr key={bed._id}>
              <td>{bed.numer_lozka}</td>
              {console.log(bed)}
              <td>{bed.indeks_opieki}</td>
              <td>
                {bed.data_rezerwacja
                  ? moment(bed.data_rezerwacja.poczatek).format("D MM YYYY")
                  : "dostepny"}
              </td>
              <td>
                {bed.data_rezerwacja
                  ? moment(bed.data_rezerwacja.koniec).format("D MM YYYY")
                  : "dostepny"}
              </td>

              <td>
                <button
                  onClick={() => {
                    delBed(bed._id);
                  }}
                >
                  {" "}
                  usuń łóżko{" "}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setStayAdd({ isVisible: true, bedId: bed._id });
                  }}
                >
                  dodaj rezerwację
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddStay
        houseOne={props.houseOne}
        addStay={() => {
          getRoom();
        }}
        stayadd={stayadd}
        setStayAdd={setStayAdd}
      />
    </div>
  );
}

export default RoomView;
