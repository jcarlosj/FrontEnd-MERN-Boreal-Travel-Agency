import React from 'react'
import "../public/styles/slider.css"
import "../public/styles/gridStandard.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
    return (
        <div className="mainGrid">
            <div className="col-12">
                    <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
                       
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-2" data-slide-to="1"></li>
                            <li data-target="#carousel-example-2" data-slide-to="2"></li>
                        </ol>
                       
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="view">
                                    <img className="d-block w-100" src={require("../public/imagenes/imagen-slider1-borrador.png")}
                                        alt="First slide"/>
                                    <div className="mask rgba-black-light"></div>
                                </div>
                                <div className="carousel-caption">
                                    <h1 className="h1-responsive">Light mask</h1>
                                    <p>First text</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="view">
                                    <img className="d-block w-100" src={require("../public/imagenes/imagen-prueba-slider.png")}
                                        alt="Second slide"/>
                                    <div className="mask rgba-black-strong"></div>
                                </div>
                                <div className="carousel-caption">
                                    <h1 className="h1-responsive">Strong mask</h1>
                                    <p>Secondary text</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="view">
                                    <img className="d-block w-100" src={require("../public/imagenes/imagen-prueba-slider2.png")}
                                        alt="Third slide"/>
                                    <div className="mask rgba-black-slight"></div>
                                </div>
                                <div className="carousel-caption">
                                    <h1 className="h1-responsive">Slight mask</h1>
                                    <p>Third text</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>            
                <section className="row justify-content-center section-atracciones mt-5">
                <div className="col-md-10 text-center">
                    <p>
                        Dependiendo de la temporada del año, tu podrás disfrutar diferentes atracciones turísticas, que
                        te ofrecemos en nuestros paquetes
                        variados como a castillos, catedrales, museos, motos de nieve, tures en bicicleta, glaciares,
                        avistamiento de ballenas,
                        visita a volcanes, lagos, entre muchos más planes que varían de acuerdo a la temporada del año.
                        Desde la conciencia ecológica que marca la diferencia de nuestra agencia de viajes Boreal, cada
                        paquete está enmarcado a lugares
                        donde ya hay estándares de sustentabilidad.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Slider
