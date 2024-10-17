
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AgregarMascota from './AgregarMascota';
import ListaDeMascotas from './ListadeMascotas';
import './App.css';
import './index.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <ListaDeMascotas /> }/>
        <Route path="/agregar" element={<AgregarMascota /> }/>
      </Routes>
    </Router>
  );
};

export default App;
