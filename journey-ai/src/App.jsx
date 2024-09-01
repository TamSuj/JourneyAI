import "./index.css";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.js';
import { ProtectedrRoutes } from './components/ProtectedRoutes.jsx';
import { useUser } from './UserContext.js';
import LoadingPage from './components/LoadingPage.jsx';
import MainPage from './pages/MainPage.jsx';
import SavedPlanPage from './pages/SavedPlanPage.jsx';
import GenerateDestinationPage from './pages/GenerateDestinationPage.js';
import GenerateMap from './pages/GenerateMap.js';
import LogInPage from './components/Auth/LogInPage.jsx';


function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const { setUserUid } = useUser(); // Destructure setUserUid from the context

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //If someone logged-in, we will set the userUid for the UserContext so all the component in the App has access to it
      if (user) {
        setUser(user);
        setIsFetching(false);
        setUserUid(user.uid); 
      } else {  // If not we just set null
        setUser(null);
        setIsFetching(false);
        setUserUid(null);
      }
    });

    return () => unsubscribe();
  }, [setUserUid]);   //Only update when there is a new loged-in user

  //If we still waiting for data of response,...etc turn on the Loading Page
  if (isFetching) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>  
      <Routes>
        <Route index path='/login' element={<LogInPage user={user} />} />
        <Route path='/' element={<MainPage />}/>
        <Route path='/destination' element={<GenerateMap/>} />

        {/* Protected Routes */}
        <Route path='/saved_plans' element={
          <ProtectedrRoutes user={user}>
            <SavedPlanPage />
          </ProtectedrRoutes>
        } />
        <Route path='/saved_plans/destination' element={
          <ProtectedrRoutes user={user}>
            <GenerateDestinationPage />
          </ProtectedrRoutes>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
