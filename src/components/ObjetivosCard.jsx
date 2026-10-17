// src/components/ObjetivosCard.jsx
import React from 'react';

function ObjetivosCard({ competencia, indicadorLogro }) {
    return (
        <div style={{ border: '1px solid #3c3f42', borderLeft: '5px solid #b5dff3', padding: '15px', borderRadius: '6px', background: '#f5f5f5', margin: '15px 0' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '1.1em' }}>🎯 Competencia: {competencia}</h3>
            <p style={{ margin: 0, fontSize: '0.9em', color: '#91a1e9' }}>Indicador de Logro: {indicadorLogro}</p>
        </div>
    );
}

export default ObjetivosCard;


