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
import SavedPlanPage from './pages/SavedPlanPage.jsx';
import GenerateDestinationPage from './pages/GenerateDestinationPage.jsx';
import GenerateMap from './pages/GenerateMap.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [userUid, setUserUid] = useState('');
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user);
        setIsFetching(false);
        setUserUid(user.uid); 
        return;
      }
      setUser(null);
      setIsFetching(false);
      setUserUid(''); 
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
      <Route path='/destination' element={
        <ProtectedrRoutes user={user}>
            <GenerateMap></GenerateMap>
        </ProtectedrRoutes>
        }
      ></Route>
        <Route path='/saved_plans' element={
        <ProtectedrRoutes user={user}>
            <SavedPlanPage></SavedPlanPage>
        </ProtectedrRoutes>
        }
      ></Route>
      <Route path='/saved_plans/destination' element={
        <ProtectedrRoutes user={user}>
            <GenerateDestinationPage></GenerateDestinationPage>
        </ProtectedrRoutes>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
