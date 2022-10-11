import { useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductForm from './components/ProductForm'
import AllProducts from './components/AllProducts'
import OneProduct from './components/OneProduct'
import NavBar from './components/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ProductForm/>}/>
          <Route path="/all" element={<AllProducts/>}/>
          <Route path="/:id" element={<OneProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
