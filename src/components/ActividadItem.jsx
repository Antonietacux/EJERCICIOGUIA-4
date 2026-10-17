import React, { useState } from 'react';
import './ActividadItem.css';

export default function ActividadItem({ titulo, descripcion, tiempo }) {
  // Estado local para alternar entre pendiente (false) y completada (true)
  const [completada, setCompletada] = useState(false);

  const toggleEstado = () => {
    setCompletada(!completada);
  };

  return (
    <div className={`actividad-card ${completada ? 'completada' : 'pendiente'}`}>
      <div className="actividad-header">
        <span className="actividad-tiempo">⏱ {tiempo}</span>
        <span className={`estado-badge ${completada ? 'badge-completada' : 'badge-pendiente'}`}>
          {completada ? 'Completada' : 'Pendiente'}
        </span>
      </div>

      <h4 className="actividad-titulo">{titulo}</h4>
      <p className="actividad-descripcion">{descripcion}</p>

      <button 
        onClick={toggleEstado} 
        className={`btn-toggle ${completada ? 'btn-completada' : 'btn-pendiente'}`}
      >
        {completada ? '✓ Marcar como Pendiente' : 'Marcar como Completada'}
      </button>
    </div>
  );
}
