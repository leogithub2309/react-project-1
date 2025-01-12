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

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empleado' element={<FormComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
