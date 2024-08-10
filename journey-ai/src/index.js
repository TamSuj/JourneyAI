import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import GenerateMap from './components/GenerateMap.jsx';
import SavedPlanPage from './components/SavedPlanPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import GenerateDestinationPage from './components/GenerateDestinationPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="destination"element={<ProtectedRoute><GenerateMap /></ProtectedRoute>}/>
      <Route path="destination/:userId/:planId"element={<ProtectedRoute><GenerateDestinationPage /></ProtectedRoute>}/>
      <Route path="saved_plan_testing" element={<ProtectedRoute><SavedPlanPage /></ProtectedRoute>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
