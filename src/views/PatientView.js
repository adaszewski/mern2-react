import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import { useNavigate, useParams } from "react-router-dom";
import AddAuthorized from "../components/AddAuthorized";
import AnkietaIadl from "../components/AnkietaIadl";
import AnkietaAmts from "../components/AnkietaAmts";
import AnkietaBarthel from "../components/AnkietaBarthel";
import AnkietaKatza from "../components/AnkietaKatza";

function PatientView(props) {
  const [patientOne, setPatientOne] = useState("");
  const [amtsexam, setAmtsExam] = useState(false);
  const [iadlexam, setIadlExam] = useState(false);
  const [barthelexam, setBarthelExam] = useState(false);
  const [katzexam, setKatzExam] = useState(false);
  const [authorizedadd, setAuthAdd] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const getPatient = (props) => {
    axios
      .get(`http://localhost:5000/api/patient/${id}`)
      .then((req) => {
        if (req.data.error) {
          navigate("/patient/all");
        }
        setPatientOne(req.data);
           })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPatient();
  }, []);

  return (
    <div>
      <h1>{patientOne?.pesel}</h1>

      <p>
        <Moment parse="YYYY-MM-DD-T-hh:mm:ss.0100" format="YYYY-MM-DD">
          {patientOne?.data_urodzenia}
        </Moment>
      </p>
      <button
        onClick={() => {
          setAuthAdd(true);
        }}
      >
        dodaj osobę upoważnioną
      </button> {authorizedadd ? ( <button
              onClick={() => {
                setAuthAdd(false);
              }}
            >
              rezygnacja
            </button>
            ) : (
              ""
            )}
      

      <AddAuthorized
        patientOne={patientOne}
        authorizedadd={authorizedadd}
        setAuthAdd={setAuthAdd}
      />

      <h6> ocena stanu pacjenta</h6>
      <table>
        <th>indeks</th>
        <th>wynik</th>
        <th>data ostatniego badania</th>
        <th>ogólna kwalifikacja</th>
        <th>opcje</th>
        <th></th>

        <tr>
          <td>Indeks Katza</td>
          <td>4</td>
          <td>2023-02-01</td>
          <td>stan średni</td>
          <td>
            {" "}
            <button
              onClick={() => {
                setKatzExam(true);
              }}
            >
              dodaj badanie
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                setKatzExam(false);
              }}
            >
              rezygnacja
            </button>
          </td>
        </tr>
        <tr>
          <td> Indeks Barthel</td>
          <td>6</td>
          <td>2023-01-21</td>
          <td>ciezko</td>
          <td>
            {" "}
            <button
              name="submit"
              onClick={() => {
                setBarthelExam(true);
              }}
            >
              dodaj badanie
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                setBarthelExam(false);
              }}
            >
              rezygnacja
            </button>
          </td>
        </tr>
        <tr>
          <td>Indeks IADL</td>
          <td>8</td>
          <td>2023-01-21</td>
          <td>ciezko</td>
          <td>
            <button
              name="submit"
              onClick={() => {
                setIadlExam(true);
              }}
            >
              dodaj badanie
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                setIadlExam(false);
              }}
            >
              rezygnacja
            </button>
          </td>
        </tr>
        <tr>
          <td>Indeks AMTS</td>
          <td>8</td>
          <td>2023-01-21</td>
          <td>ciezko</td>
          <td>
            <button
              onClick={() => {
                setAmtsExam(true);
              }}
            >
              dodaj badanie
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                setAmtsExam(false);
              }}
            >
              rezygnacja
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <hr />

      <AnkietaAmts
        patientOne={patientOne}
        amtsexam={amtsexam}
        setAmtsExam={setAmtsExam}
      />
      <AnkietaIadl
        patientOne={patientOne}
        iadlexam={iadlexam}
        setIadlExam={setIadlExam}
      />
      <AnkietaBarthel
        patientOne={patientOne}
        barthelexam={barthelexam}
        setBarthelExam={setBarthelExam}
      />
      <AnkietaKatza
        patientOne={patientOne}
        katzexam={katzexam}
        setKatzExam={setKatzExam}
      />

    </div>
  );
}

export default PatientView;
