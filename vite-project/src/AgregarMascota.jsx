import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AgregarMascota = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const NuevaMascota = { 
      name, 
      age, 
      type, 
      description, 
      characteristics: characteristics.split(','), 
      photo 
    };

    fetch('http:localhost:3005/api/pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(NuevaMascota),
    })
    .then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <option value="Cachorro">cachorro</option>
        <option value="adulto">adulto</option>
        <option value="senior">senior</option>
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="text" value={characteristics} onChange={(e) => setCharacteristics(e.target.value)} placeholder="Characteristics (comma separated)" />
      <input type="url" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo" />
      <button type="submit">Agregar Mascota</button>
    </form>
  );
};

export default AgregarMascota;


