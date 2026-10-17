import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
    return (
        <div style={{ maxWidth: '700px', margin: '20px auto', padding: '20px', fontFamily: 'Segoe UI' }}>
            <HeaderClase tituloTema="DECALOGO DE LA COMUNICACIÓN WEB" nombreDocente="María Antonieta Beatriz Cux Morales" horario="Lunes a Viernes de 8:00 a 8:30AM" />
            <ObjetivosCard competencia="Construir interfaces modulares" indicadorLogro="Utiliza props correctamente" />
            <ActividadItem tituloActividad="DECALOGO" duracion="30 min" etapaDidactica="CONSTRUCCIÓN" />
        </div>
    );
}

export default App;

