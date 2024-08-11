import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from './components//Auth/LogInPage.jsx';
// import { Private } from './pages/private.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.js';
import { ProtectedrRoutes } from './components/ProtectedRoutes.jsx';
import LoadingPage from './components/LoadingPage.jsx';
import MainPage from './pages/MainPage.jsx';
import "./index.css"

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user);
        setIsFetching(false); 
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, [])

  if(isFetching){
    return <LoadingPage></LoadingPage>
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<LogInPage user={user}></LogInPage>}></Route>
      <Route path='/homepage' element={
        <ProtectedrRoutes user={user}>
            <MainPage></MainPage>
        </ProtectedrRoutes>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
