import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetallesDeMascota = () => {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3005/api/pets/${id}`)
      .then(response => response.json())
      .then(data => setMascota(data));
  }, [id]);

  const manejarAdopcion = () => {
    fetch(`http://localhost:3005/api/pets/${id}`, { method: 'DELETE' })
      .then(() => navigate('/'));
  };

  if (!mascota) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{mascota.name}</h2>
      <p>Edad: {mascota.age}</p>
      <p>Tipo: {mascota.type}</p>
      <p>Descripción: {mascota.description}</p>
      <img src={mascota.photo} alt={mascota.name} />
      <button onClick={manejarAdopcion}>Adoptar</button>
      <button onClick={() => navigate('/')}>Volver a la lista</button>
    </div>
  );
};

export default DetallesDeMascota;