import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import { useNavigate, useParams } from 'react-router-dom';

function PatientView(props) {
  const [patientOne, setPatientOne] = useState('');

  const navigate = useNavigate();

  const { id } = useParams();

  const getPatient = (props) => {
    axios
      .get(`http://localhost:5000/api/patient/${id}`)
      .then((req) => {
        if (req.data.error) {
          navigate('/patient/all');
        }
        setPatientOne(req.data);
        console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPatient();
  }, []);

  const getIdIadlExam = (id) => {
    navigate(`/patient/iadlexam-add/${id}`);
  };

  const getIdAmtsExam = (id) => {
    navigate(`/patient/amtsexam-add/${id}`);
  };

  const getIdBarthelExam = (id) => {
    navigate(`/patient/barthelexam-add/${id}`);
  };

  const getIdBarthelExExam = (id) => {
    navigate(`/patient/barthelexexam-add/${id}`);
  };

  const getIdKatzExam = (id) => {
    navigate(`/patient/katzexam-add/${id}`);
  };

  return (
  <div>
      <h1>{patientOne?.pesel}</h1>

      <p>
        <Moment parse="YYYY-MM-DD-T-hh:mm:ss.0100" format="YYYY-MM-DD">
          {patientOne?.data_urodzenia}
        </Moment>
      </p>

      <h2> ocena stanu pacjenta</h2>

      <h4>
        Indeks Katza: <button> pokaż badania </button>{" "}
        <button
          name="submit"
          onClick={() => {
            getIdKatzExam(patientOne._id);
          }}
        >
          dodaj badanie
        </button>
      </h4>
      <h4>
        Indeks Bathel:
        <button> pokaż badania </button>
        <button
          name="submit"
          onClick={() => {
            getIdBarthelExam(patientOne._id);
          }}
        >
          dodaj badanie
        </button>
      </h4>
      <h4>
        Indeks Barthel Rozszerzony: <button> pokaż badania </button>
        <button
          name="submit"
          onClick={() => {
            getIdBarthelExExam(patientOne._id);
          }}
        >
          dodaj badanie
        </button>
      </h4>
      <h4>
        Indeks IADL: <button> pokaż badania </button>
        <button
          name="submit"
          onClick={() => {
            getIdIadlExam(patientOne._id);
          }}
        >
          dodaj badanie
        </button>
      </h4>
      <h4>
        Indeks AMTS: <button> pokaż badania </button>{" "}
        <button
          name="submit"
          onClick={() => {
            getIdAmtsExam(patientOne._id);
          }}
        >
          dodaj badanie
        </button>
      </h4>

      <table>
        <thead>
          <tr>
            <th>data badania</th>
            <th>uzyskany wynik</th>
            <th>opcje</th>
          </tr>
        </thead>
        <tbody>
          {patientOne?.katzs?.map((katz) => (
            <tr key={katz._id}>
              <td>
                <Moment parse="YYYY-MM-DD-T-hh:mm:ss.0100" format="YYYY-MM-DD">
                  {katz?.date_of_examination}
                </Moment>
              </td>
              <td>{katz?.sum}</td>
              <td>opcje</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default PatientView;
