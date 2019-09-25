import React from 'react'
import '../App.css';
import "../public/styles/paquetes.css"
import Foooter from "../components/Foooter"
import PlanesDinamarca from "../planesComponentes/PlanesDinamarca"
import PlanesIslandia from "../planesComponentes/PlanesIslandia"
import PlanesSuecia from "../planesComponentes/PlanesSuecia"

function Paquetes() {
    return (
        <div className="App ">
            <div className="columnaEstructura">
                <div className="elements"><PlanesDinamarca/></div>
                <div className="elements"><PlanesIslandia/></div>
                <div className="elements"><PlanesSuecia/></div>
            </div>
            <Foooter/>
        </div>
    )
}

export default Paquetes
