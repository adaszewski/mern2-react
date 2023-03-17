/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import HouseAddMod from '../views/Houses/HouseAddMod';
import LoginView from "../views/LoginView";
import HouseView from "../views/HouseView";
import HousesView from "../views/HousesView";
import PatientView from "../views/PatientView";
import PatientsView from "../views/PatientsView";
import PatientAdd from "../components/PatientAdd";
import RoomView from "../views/RoomView";
import AddStay from "../components/AddStay";

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
            <PatientView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/room/:id"
        element={
          <ProtectedRoute>
            <RoomView />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bed/:id"
        element={
          <ProtectedRoute>
            <AddStay />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
