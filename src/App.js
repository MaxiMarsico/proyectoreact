<<<<<<< HEAD
import './App.css';
import navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <div>
        <navbar/>
      </div>
    </div>
=======
import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </Fragment>
>>>>>>> 089e1fb9e3c8392ee13790878141459accd18eea
  );
}

export default App;

