/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import HouseAddMod from '../views/Houses/HouseAddMod';
import LoginView from "../views/LoginView";
import HouseView from "../views/Houses/HouseView";
import HousesView from "../views/Houses/HousesView";
import ContactsView from "../views/ContactsView";
import ClientSearchNip from "../views/ClientSearchNip";
import ClientSearchCity from "../views/ClientSearchCity";
import ClientSearchManager from "../views/ClientSearchManager";
import ClientsCitiesView from "../views/ClientsCitiesView";
import ClientsUserView from "../views/ClientUserView";
import ContactAdd from "../views/ContactAdd";
import AnkietaKatza from "../views/Exams/AnkietaKatza";
import AnkietaBarthel from "../views/Exams/AnkietaBarthel";
import AnkietaBarthelEx from "../views/Exams/AnkietBarthelEx";
import AnkietaIadl from "../views/Exams/AnkietaIadl";
import PatientsView from "../views/Patient/PatientsView";
import PatientView from "../views/Patient/PatientView";
import PatientAdd from "../views/Patient/PatientAdd";
import AnkietaAmts from "../views/Exams/AnkietaAmts";

function AppRoutes(props) {
  function ProtectedRoute({ children }) {
    const token = props.user?.jwt || null;

    if (!token) {
      return <Navigate to="/" replace />;
    }
    return children;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginView user={props.user} setUser={props.setUser} />}
      />
      <Route
        path="/patient/barthelexexam-add/:id"
        element={
          <ProtectedRoute>
            <AnkietaBarthelEx
              patientOne={props.patientOne}
              setPatientOne={props.setPatientOne}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/katzexam-add/:id"
        element={
          <ProtectedRoute>
            <AnkietaKatza
              patientOne={props.patientOne}
              setPatientOne={props.setPatientOne}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="patient/iadlexam-add/:id"
        element={
          <ProtectedRoute>
            <AnkietaIadl
              // patientOne={props.patientOne}
              // setPatientOne={props.setPatientOne}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/amtsexam-add/:id"
        element={
          <ProtectedRoute>
            <AnkietaAmts
              // patientOne={props.patientOne}
              // setPatientOne={props.setPatientOne}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/barthelexam-add/:id"
        element={
          <ProtectedRoute>
              <PatientView  />          <AnkietaBarthel />

     
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/houses"
        element={
          <ProtectedRoute>
            <HousesView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/house/:id"
        element={
          <ProtectedRoute>
            <HouseView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patients"
        element={
          <ProtectedRoute>
            <PatientsView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-patient"
        element={
          <ProtectedRoute>
            <PatientAdd />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/:id"
        element={
          <ProtectedRoute>
            <PatientView
              patientOne={props.patientOne}
              setPatientOne={props.setPatientOne}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/clients/search/nip"
        element={
          <ProtectedRoute>
            <ClientSearchNip />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clients/search/miasto"
        element={
          <ProtectedRoute>
            <ClientSearchCity />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clients/search/opiekun"
        element={
          <ProtectedRoute>
            <ClientSearchManager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client/nip/:nip"
        element={
          <ProtectedRoute>
            <HouseView
              getClient={props.getClient}
              client={props.client}
              setClient={props.setClient}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client/add-contact/:id"
        element={
          <ProtectedRoute>
            <ContactAdd
              getClient={props.getClient}
              client={props.client}
              setClient={props.setClient}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/client/miasto/:miasto"
        element={
          <ProtectedRoute>
            <ClientsCitiesView
              getClientsCity={props.getClientsCity}
              clientCity={props.clientCity}
              setClientCity={props.setClientCity}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/client/opiekun/:opiekun"
        element={
          <ProtectedRoute>
            <ClientsUserView
              getClientsCity={props.getClientsCity}
              clientCity={props.clientCity}
              setClientCity={props.setClientCity}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contacts"
        element={
          <ProtectedRoute>
            <ContactsView />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
