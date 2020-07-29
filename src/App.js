import React, { Fragment,useState,useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario"

function App() {
  const [busqueda, setBusqueda] = useState({
      ciudad: "",
      pais: "",
    });
    const {ciudad,pais}=busqueda;
    useEffect(()=>{
      console.log(ciudad);
      console.log(pais)
    },[ciudad,pais]);
    const[consulta,setConsulta]=useState(false)
    return (
    
    <Fragment>
      
      <Header titulo={"Clima React"} />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12"><Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsulta={setConsulta}/></div>
            <div className="col m4 s12"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
