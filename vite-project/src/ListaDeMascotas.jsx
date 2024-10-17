import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ListaDeMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3005/api/pets/')
      .then(response => response.json())
      .then(data => setMascotas(data));
  }, []);

  const handleAddPet = () => {
    navigate('/agregar');
  }

  return (
    <>
    <button onClick={() => handleAddPet()}>Agregar Mascota</button>
    <div className='container-pets-list'>
      {mascotas.map(mascota => (
        <div key={mascota.id}>
          <img src={mascota.photo} alt={mascota.name} />
          <h3>{mascota.name}</h3>
          <p>Edad: {mascota.age}</p>
          <Link to={`/mascota/${mascota.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default ListaDeMascotas;

