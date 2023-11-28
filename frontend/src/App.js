import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/pages/Home';
import Projects from './features/pages/Projects';
import Bugs from './features/pages/Bugs';
import CreateBug from './features/pages/CreateBug';
import Profile from './features/pages/Profile';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bugs" element={<Bugs />} />
            <Route path="/create-bug" element={<CreateBug />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
