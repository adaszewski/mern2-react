import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import AppRoutes from './components/AppRoutes';
import MainNav from './components/MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  
  console.log(process.env.API_HOST);
  axios.defaults.baseURL = 'http://localhost:5000/api';
  axios.defaults.headers.common['x-auth-token'] = user ? user.jwt : '';
  return (
    <Container>
      <MainNav user={user?.user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser}/>
     
    </Container>
  );
}

export default App;
