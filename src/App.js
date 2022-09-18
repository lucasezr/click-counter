
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import {useState} from 'react';



function App() {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1)              // le asigno una funcion a una constante y luego le asigno esa constante al props pasado en onClick, es decir, cambio su valor para asignarle el
                                        // valor de una constante que retorna el valor de una funcion 
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'> 
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />

        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/>
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/> 
      </div>
    </div>
  );
}

export default App;
