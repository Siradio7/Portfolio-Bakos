import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbare from './components/Navbar';
import Footer from './components/Footer';


const routes = [
  { 
    path: "/", 
    component: <Home />
  },
  { 
    path: "/about", 
    component: <About /> 
  },
  { 
    path: "/project", 
    component: <Project /> 
  },
  { 
    path: "/contact", 
    component: <Contact /> 
  },
];

const App = () => {
  return (
    <Router>
    <Navbare />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
