import React from 'react'
import "../public/styles/miembroBoreal.css"

function MiembroBoreal() {
    return (
        <div className="elementsContainer">
            <div className="titleContainer">
                <h3>DISFRUTA DE TU TIEMPO EN VUELO VIAJANDO <br/> COMO MIEMBRO BOREAL</h3>
            </div>
            <div className="rowBoxes">
                <div className="boxes">
                    <img src={require("../public/imagenes/home/camaraLogo.png")} alt=""/>
                    <h5>Diversidad de planes <br/> Turísticos</h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/candadoLogo.png")} alt=""/>
                    <h5>Seguridad informática <br/> para tus datos</h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/monedasDineroLogo.png")} alt=""/>
                    <h5>Promociones y <br/> descuentos</h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/maletaViajeLogo.png")} alt=""/>
                    <h5>Maletas documentadas <br/> gratis</h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/personasConectadasLogo.png")} alt=""/>
                    <h5>Asesoría para <br/> tus viajes</h5>
                </div>
            
                <div className="boxes">
                    <img src={require("../public/imagenes/home/billetesLogo.png")} alt=""/>
                    <h5>Prioridad en <br/>check-in</h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/corbataLogo.png")} alt=""/>
                    <h5>Mesa <br/> ejercutiva</h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/martiniCoctelLogo.png")} alt=""/>
                    <h5>Cortesía en <br/> hoteles</h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/avionLogo.png")} alt=""/>
                    <h5>Reserva gratituta <br/> de vuelo </h5>
                </div>
                <div className="boxes">
                    <img src={require("../public/imagenes/home/audifonosLogo.png")} alt=""/>
                    <h5>Comodidad y <br/> entretenimiento</h5>
                </div>

            </div>
            <div className="buttonContainer"><a href=""> <img src={require("../public/imagenes/home/reservaYaBoton.PNG")} width="100%"/> </a></div>
        </div>
  
    )
}

export default MiembroBoreal
