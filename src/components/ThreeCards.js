import React from 'react'
import "../public/styles/menu-superior.css"
import "../public/styles/slider.css"
import "../public/styles/tarjetas-default.css"
import "../public/styles/tarjetas-styles.css"
import "../public/styles/gridStandard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../public/scripts/scriptsHome/threeCards/efectos"
// import "../public/scripts/scriptsHome/threeCards/tarjetas"


function ThreeCards() {
    return (
        <div className="mainGrid backgroundImageConstelacionUno">
            <section className="row justify-content-center">
                <h2 style={{"color":"white"}}>DESTINOS         POPULARES</h2> 
                <ul className="tarjetas grid cs-style-1 col-12">
                    <li style={{"textAlign":"center"}}>
                    <h1 style={{"color":"white"}}>Islandia</h1>
                        <figure>
                        <a href="https://www.visitnorway.es/que-ver-en-noruega/este-de-noruega/oslo/" target="_blank">
                            <img src={require("../public/imagenes/skogafoss.jpg")} alt="img3"/>
                            <figcaption className="card-fuente">
                                <h3>Islandia</h3>
                                <span>skogafoss</span>
                               Más
                                    información
                            </figcaption>
                        </a>
                        </figure>
                    </li>
                    <li style={{"textAlign":"center"}}>
                    <h1 style={{"color":"white"}}>Dinamarca</h1>
                        <figure>
                        <a href="https://denmark.dk/" target="_blank">
                            <img src={require("../public/imagenes/legoland.jpg")} alt="Lego land en dinamarca"/>
                            <figcaption className="card-fuente">
                                <h3>Dinamarca</h3>
                                <span>Legoland</span>
                                Más
                                    información
                            </figcaption>
                            </a>
                        </figure>
                        
                    </li>
                    <li style={{"textAlign":"center"}}>
                    <h1 style={{"color":"white"}}>Suecia</h1>
                        <figure>
                        <a href="https://www.swedenabroad.se/es/embajada/colombia-bogot%C3%A1/" target="_blank">
                            <img src={require("../public/imagenes/malmoe_noche.jpg")} alt="malmoe de noche en suecia"/>
                            <figcaption className="card-fuente">
                                <h3>Suecia</h3>
                                <span>Malmoe de noche</span>
                                Más
                                    información
                            </figcaption>
                            </a>
                        </figure>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default ThreeCards
