// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadFile from './components/UploadFile';
import ChatApp from './components/Chat';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/upload" element={<UploadFile />} />
            <Route path="/" element={<ChatApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
