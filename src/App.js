import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Authprovider from './Components/Authprovider';
import Login from './Components/LoginPage/Login';
import NavBar from './Components/Headers/NavBar';
import LoginHeader from './Components/Headers/LoginHeader';
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
         <Authprovider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/nav" element={<NavBar />} />
              <Route path="/loginheader" element={<LoginHeader />} /> 
            </Routes> 
          </Authprovider>
          
      </Router>
    </div>
  );
}

export default App;
