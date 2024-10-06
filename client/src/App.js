import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home page component
import Login from './pages/Login';
import Register from './pages/Register'; // Import Register component
import GeneralDiseasePrediction from './pages/GeneralDiseasePrediction';
import ChronicDiseasePrediction from './pages/ChronicDiseasePrediction';
import DoctorNearMe from './pages/DoctorNearMe';
import FeaturesNav from './pages/FeaturesNav';
import { UserContext } from './context/UserContext';

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <div>
        {/* Show navigation bar if the user is logged in */}
        {user && <FeaturesNav />}

        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />
          
          {/* Login and Register Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Feature Routes */}
          <Route path="/features/general-disease-prediction" element={<GeneralDiseasePrediction />} />
          
          {/* Restrict Chronic Disease Prediction to doctors only */}
          <Route 
            path="/features/chronic-disease-prediction" 
            element={user && user.role === 'doctor' ? <ChronicDiseasePrediction /> : <Navigate to="/features/general-disease-prediction" />} 
          />
          
          <Route path="/features/doctor-near-me" element={<DoctorNearMe />} />
          
          {/* Default fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
