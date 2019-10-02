import React from 'react'
import '../App.css';
import "../public/styles/paquetes.css"
import "../public/styles/tarjetas-styles.css"
import "../public/styles/tarjetas-default.css"
import "../public/styles/planesjagd.css"
import "../public/scripts/scriptsPaquetes/tarjetas-efectos-home"
import "../public/scripts/scriptsPaquetes/tarjetas-home"
import "../public/styles/menu-superior.css"
import Foooter from "../components/Foooter"
import SingleElement from "../planesComponentes/SingleElement"

function Paquetes() {
    return (
        <div className="App ">
       
                <div> 
                    <img src={require("../public/imagenes/AURORA.jpg")} width="100%" /> 
                </div> 
                <div className="elements"><SingleElement/></div>
                <br/> <br/> <br/>  
            <Foooter/>
        </div>
    )
}

export default Paquetes
