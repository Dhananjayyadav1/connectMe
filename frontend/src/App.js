import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { fetchUser } from './utils/fetchUser';

const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User = fetchUser();

    if (!User) navigate('/login');
  }, []);
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
