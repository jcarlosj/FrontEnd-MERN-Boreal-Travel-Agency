import React from 'react'
import "../public/styles/menu-superior.css"
import "../public/styles/slider.css"
import "../public/styles/tarjetas-default.css"
import "../public/styles/tarjetas-styles.css"
import "../public/styles/gridStandard.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function ThreeCards() {
    return (
        <div className="mainGrid">
            <section className="row justify-content-center">

                <ul className="tarjetas grid cs-style-1 col-12">
                    <li>
                        <figure>
                            <img src={require("../public/imagenes/skogafoss.jpg")} alt="img3"/>
                            <figcaption className="card-fuente">
                                <h3>Islandia</h3>
                                <span>skogafoss</span>
                                <a href="https://www.visitnorway.es/que-ver-en-noruega/este-de-noruega/oslo/">Más
                                    información</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={require("../public/imagenes/legoland.jpg")} alt="Lego land en dinamarca"/>
                            <figcaption className="card-fuente">
                                <h3>Dinamarca</h3>
                                <span>Legoland</span>
                                <a href="https://www.visitnorway.es/que-ver-en-noruega/este-de-noruega/oslo/">Más
                                    información</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={require("../public/imagenes/malmoe_noche.jpg")} alt="malmoe de noche en suecia"/>
                            <figcaption className="card-fuente">
                                <h3>Suecia</h3>
                                <span>Malmoe de noche</span>
                                <a href="https://www.visitnorway.es/que-ver-en-noruega/este-de-noruega/oslo/">Más
                                    información</a>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default ThreeCards
