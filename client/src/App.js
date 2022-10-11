import { useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductForm from './components/ProductForm'
import AllProducts from './components/AllProducts'
import OneProduct from './components/OneProduct'
import UpdateForm from './components/UpdateForm'
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
          <Route path="/product/:id" element={<OneProduct/>}/>
          <Route path="/product/edit/:id" element={<UpdateForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
