import React from 'react'
import "../App.css"
import Slider from "../components/Slider";
import Formulario from "../componentsHoteles/Formulario";
import HotelIslandia from  "../componentsHoteles/HotelIslandia"
import HotelDinamarca from  "../componentsHoteles/HotelDinamarca"
import HotelSuecia from  "../componentsHoteles/HotelSuecia"
// import CarruselComidas from "../componentsHoteles/CarruselComidas";
// import CarruselEventos from "../componentsHoteles/CarruselEventos";
import Foooter from "../components/Foooter";
import "../public/styles/paquetes.css"


function Hoteles() {
    return (
        <div className="App">
             <div className="marginTopMainContainer"> 
                <div className="elements"><Slider/></div>
                <div className="elements"><Formulario/></div> 
                <br/> <br/> <br/> 
                <div className="elements"><HotelIslandia/></div>
                <div className="elements"><HotelDinamarca/></div>                    
                <div className="elements"><HotelSuecia/></div>
                <br/> <br/> <br/>
             </div> 
             <Foooter/> 
        </div>
    )
}

export default Hoteles
