import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/clima";
import Error from "./components/Error";
function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const { ciudad, pais } = busqueda;
  const [consulta, setConsulta] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    const consultaAPI = async () => {
      if (consulta) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=2e2becf15ab311f47c7cd361617b06e4`;
        const respuesta = await fetch(url);
        const resul = await respuesta.json();
        setResultado(resul);
        setConsulta(false);
      }
      if (resultado.cod === "404") {
        setError(true);
      } else {
        setError(false);
      }
    };
    consultaAPI();
  }, [consulta]);
  /* let componente;
 if(error){
   componente=<Error mensaje="No hay resultado intenta otra vez"/>

 }else{
   componente=<Clima resultado={resultado}/>
 }
 */
  return (
    <Fragment>
      <Header titulo={"Clima React"} />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m4 s12">
              {error ? (
                <Error msg="No hay resultado intenta otra vez" />
              ) : (
                <Clima resultado={resultado} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
