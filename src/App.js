import './App.css';
import React, { useEffect, useState } from 'react';
import songsData from './assets/songs.json';
import Searcher from './components/SearchBox';
import FilteredList from './components/FilteredList';


function App() {

  const [canciones, setCanciones] = useState([]);
  const [cancionesOriginales, setCancionesOriginales] = useState([]);
  const [mensaje, setMensaje] = useState('');


  useEffect(() => {
    setCanciones(songsData)
    setCancionesOriginales(songsData);
  }, []);

  const recibirDatosDelHijo = (valor) => {
    if (valor === '') {
      resetData()
      return;
    }
    valor = valor.toLowerCase()
    let resultados = cancionesOriginales.filter(objeto => {
      return Object.values(objeto).some(valorPropiedad => {
        return valorPropiedad.toString().toLowerCase().includes(valor);
      });
    });

    setCanciones(resultados)
    setMensaje(valor);
  };

  const resetData = () => {
    setCanciones(cancionesOriginales);
    setMensaje('');
    return;
  }


  return (
    <div className="App">
      {mensaje && <p class="p-buscando">Buscando: {mensaje}</p>}
      <Searcher class="search" enviarDatosalPadre={recibirDatosDelHijo} resetData={resetData} />
      <div class="tableFilter">
        <FilteredList class="filter" canciones={canciones} />
      </div>
    </div >
  );
}

export default App;
