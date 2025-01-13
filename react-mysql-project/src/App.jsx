import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Menu from './pages/Menu';
import FormComponent from './pages/Form';
import Lista from './pages/Lista';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empleado' element={<FormComponent />} />
          <Route path='/lista' element={<Lista />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
