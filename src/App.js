import "./App.css";
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import News from './pages/News';
import Bookcase from "./pages/Bookcase";

import "./components/form.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/news" element={<News />} />
        <Route path="/bookcase" element={<Bookcase />} />
      </Route>
    </Routes>
  );
}

export default App;
