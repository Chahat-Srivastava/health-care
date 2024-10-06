import './App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx' 


function App() {


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
