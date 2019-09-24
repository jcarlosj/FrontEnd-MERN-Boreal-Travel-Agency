import React from 'react'
import "../public/styles/menu-superior.css"
import "../public/styles/slider.css"
import "../public/styles/filosofiaBoreal.css"
import "../public/styles/gridStandard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function TextUnderCards() {
    return (
        <div className="mainGrid">
            <section className="row section-concepto my-5">
                
                <div className="contenedorPrincipal">
                    <div className="col-md-2 concepto-magico mb-4 whiteBackground">
                        <div>                    
                        <h1 style={{"fontSize":"22px"}}> BOREAL ES LO QUE <br/> NECESITAS, PARA <br/> VIVIR EXPERIENCIAS <br/> NÓRDICAS
                        </h1>
                        </div>
                        <br/>
                        <div>
                            <img src={require("../public/imagenes/home/conocerMasExperienciasNordicasBoton.PNG")} width="100%"/> 
                        </div>
                        
                    </div>
                        <div className="conceptoFilosofiaBackground insidePadding">                        
                            <div className="col-md-5 ">
                                <h1 style={{"color": "white"}}>CONCEPTO & FILOSOFÍA</h1>
                                <p style={{"color": "white", "fontSize":"13px "}}>Nuestro mundo está lleno de paisajes con una belleza <br/> en diferentes lugares, y para eso
                                    la Agencia de viajes <br/> Boreal, te invita a explorar los países Nórdicos
                                    a <br/> través de nuestro viajes, hoteles y paquetes turísticos,<br/> donde podrás adaptar tus
                                    requerimientos
                                    turísticos dependiendo del número de días a estar en cada <br/>lugar, o la temporada de año. Te
                                    ofrecemos
                                    la satisfacción <br/> de viajar en vuelo directo sin escalas, con <br/> un servicio que garantiza
                                    la calidad.
                                    <br/> Además, la Agencia de viajes Boreal cuenta con altos <br/> estándares en la
                                    mitigación del impacto del turismo masivo, <br/> gracias a las políticas verdes por un saludable<br/>
                                    ambiente. Ven y disfruta tus momentos junto a <br/>nosotros. </p>
                                <h5 style={{"color": "white"}}>Moments of happines at puro beach</h5> 
                            </div>

                            <div className="col-md-5 insidePadding">
                                <h1 style={{"color": "white"}}>MOMENTOS DE FELICIDAD E HISTORIA NORDICA PARA TODOS LOS SENTIDOS</h1>
                                <p style={{"color": "white","fontSize":"16px" }}>La garantía inolvidable de momentos ofrecidos mediante <br/> los paquetes, te llenaran
                                    de satisfacción a tus cinco sentidos. </p>
                                <p style={{"color": "white","fontSize":"16px"}}> Un lugar donde el cliente puede llenar de disfrute <br/>y la experiencia en los paisajes nórdicos. </p>

                                <a href="#"><img src={require("../public/imagenes/home/reservaYaBoton.PNG")} width="50%"/> </a>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default TextUnderCards
