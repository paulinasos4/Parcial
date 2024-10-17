import React from 'react';

const Mascota = ({ mascota, onViewDetails }) => {
  return (
    <div className="mascota" onClick={() => onViewDetails(mascota)}>
      <img src={mascota.photo} alt={mascota.name} style={{ width: '150px', height: '150px' }} />
    </div>
    )
}

