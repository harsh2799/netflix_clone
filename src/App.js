import React from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginScreen';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const user = "null";

  return (
    <div className="app">
      <Router>
        {
          !user ? (<LoginScreen />) : (

            <Routes>
                <Route exact path="/" element={<HomeScreen />} />              
            </Routes>
          )
        }
        
      </Router>
    </div>  
  );
}

export default App;
