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
// import PlanesDinamarca from "../planesComponentes/PlanesDinamarca"
// import PlanesIslandia from "../planesComponentes/PlanesIslandia"
// import PlanesSuecia from "../planesComponentes/PlanesSuecia"
import SingleElement from "../planesComponentes/SingleElement"

function Paquetes() {
    return (
        <div className="App ">
            <div className="columnaEstructura">
                {/* <div className="elements"><PlanesDinamarca/></div>
                <div className="elements"><PlanesIslandia/></div>
                <div className="elements"><PlanesSuecia/></div> */}
                <div className="elements"><SingleElement/></div>
            </div>
            <Foooter/>
        </div>
    )
}

export default Paquetes