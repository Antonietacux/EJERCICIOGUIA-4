// src/components/HeaderClase.jsx
import React from 'react';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
    return (
        <header style={{ background: '#3e7ed6', color: 'black', padding: '25px', borderRadius: '8px' }}>
            <h1 style={{ margin: '0 0 5px 0' }}>{tituloTema}</h1>
            <p style={{ margin: 10, fontSize: '0.9em', opacity: '0.9' }}> Docente: {nombreDocente}   </p>
            <p>horario: {horario}     </p>

        </header>
    );
}

export default HeaderClase;
