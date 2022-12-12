import { Routes, Route, Navigate } from "react-router-dom";
import ClientAdd from "../views/ClientAdd";
import Home from "../views/Home";
import LoginView from "../views/LoginView";
import ClientView from "../views/ClientView";
import ClientsView from "../views/ClientsView";
import ContactsView from "../views/ContactsView";

const AppRoutes = (props) => {
  const ProtectedRoute = ({ children }) => {
    const token = props.user?.jwt || null;

    if (!token) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginView user={props.user} setUser={props.setUser} />}
      />

      <Route
        path="/add-client"
        element={
          <ProtectedRoute>
            <ClientAdd />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clients"
        element={
          <ProtectedRoute>
            <ClientsView
              getClients={props.getClients}
              clients={props.clients}
              setClients={props.setClients}
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
};

export default AppRoutes;
