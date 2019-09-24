import React from 'react'
import "../public/styles/menu-superior.css"
import "../public/styles/slider.css"
import "../public/styles/tarjetas-default.css"
import "../public/styles/tarjetas-styles.css"
import "../public/styles/gridStandard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function TextUnderCards() {
    return (
        <div className="mainGrid">
            <section className="row section-concepto my-5">
                <div className="col-md-2 concepto-magico mb-4">
                    <div>
                        Siente la magia
                    </div>
                    <div>
                        con Boreal
                    </div>
                </div>
                <div className="col-md-5">
                    <h1>CONCEPTO & FILOSOFÍA</h1>
                    <p>Nuestro mundo está lleno de paisajes con una belleza en diferentes lugares, y para eso
                        la Agencia de viajes Boreal, te invita a explorar los países Nórdicos
                        a través de nuestro viajes, hoteles y paquetes turísticos, donde podrás adaptar tus
                        requerimientos
                        turísticos dependiendo del número de días a estar en cada lugar, o la temporada de año. Te
                        ofrecemos
                        la satisfacción de viajar en vuelo directo sin escalas, con un servicio que garantiza
                        la calidad. Además, la Agencia de viajes Boreal cuenta con altos estándares en la
                        mitigación del impacto del turismo masivo, gracias a las políticas verdes por un saludable
                        ambiente. Ven y disfruta tus momentos junto a nosotros. </p>
                </div>
                <div className="col-md-5">
                    <h1>MOMENTOS DE FELICIDAD E HISTORIA NORDICA PARA TODOS LOS SENTIDOS</h1>
                    <p>La garantía inolvidable de momentos ofrecidos mediante los paquetes, te llenaran
                        de satisfacción a tus cinco sentidos. Un lugar donde el cliente puede llenar de disfrute
                        y la experiencia en los paisajes nórdicos. </p>
                </div>
            </section>
        </div>
    )
}

export default TextUnderCards
