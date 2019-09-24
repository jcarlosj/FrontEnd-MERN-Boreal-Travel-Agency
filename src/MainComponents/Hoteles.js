import React from 'react'
import "../App.css"
import Slider from "../components/Slider";
import Formulario from "../componentsHoteles/Formulario";
import ImagenConTexto from "../componentsHoteles/ImagenConTexto";
import CarruselKaren from "../componentsHoteles/CarruselKaren";
import Paquetes from "../componentsHoteles/Paquetes";
import Foooter from "../components/Foooter";


function Hoteles() {
    return (
        <div className="App">
             <div className="marginTopMainContainer"> 
                    <Slider/>
                    {/* <Formulario/> 
                    <ImagenConTexto/> 
                    <CarruselKaren/> 
                    <Paquetes/> 
                    <Foooter/>  */}
             </div> 
       
        </div>
    )
}

export default Hoteles
