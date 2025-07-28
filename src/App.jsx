import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './pages/articles';
import Home from './pages/home';
import Contact from './pages/contact';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
