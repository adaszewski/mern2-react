import { Routes, Route, Navigate } from "react-router-dom";
import ClientAdd from "../views/ClientAdd";
import LoginView from "../views/LoginView";
import ClientView from "../views/ClientView";
import ClientsView from "../views/ClientsView";
import ContactsView from "../views/ContactsView";
import ClientSearch from "../views/ClientSearch";
import ClientsCitiesView from "../views/ClientsCitiesView";

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
              getClient={props.getClient}
              client={props.client}
              setClient={props.setClient}
            />
          </ProtectedRoute>
        }
      />
            <Route
        path="/clients/search"
        element={
          <ProtectedRoute>
            <ClientSearch />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client/nip/:nip"
        element={
          <ProtectedRoute>
            <ClientView
             
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
