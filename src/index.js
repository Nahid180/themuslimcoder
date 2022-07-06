import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import About from './about';
import Contact from './Contact';
import Signup from './signup';
import Articles from './articles';
import Preloader from './preloader';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id/:title" element={<Articles />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loader" element={<Preloader />} />
        <Route path="/contact/:id" element={<Contact />} />
        
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

