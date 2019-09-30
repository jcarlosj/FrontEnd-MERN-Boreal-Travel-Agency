import React from 'react'
import "../public/styles/carrusel.css"
import "../public/scripts/scriptsHoteles/carrusel"

function HotelDinamarca() {
    return (
        <div style={{"marginTop":"30px"}}>
        <section className="details-card">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card-content">
                        <div className="card-img">
                            <img src={require("../public/imagenes/hoteles/dinamarca/fachada3-hotel.jpg")} alt="FACHADA" width="100%"/>
                      
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-content">
                        <div className="card-img">
                            <img src={require("../public/imagenes/hoteles/dinamarca/holl4.jpg")} alt="HALL" width="100%"/>
                           
                        </div>
                        <div className="card-desc">
                            <h3>Dinamarca</h3>
                         
                                <a href="#" className="btn-card">Ver Más</a>   
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-content">
                        <div className="card-img">
                            <img src={require("../public/imagenes/hoteles/dinamarca/habitacion3.jpg")} alt="ROOM" width="100%"/>
                         
                        </div>
                       
                        </div>
                    </div>
                </div>
        
        </div>
    </section>
    </div>
      
    )
}

export default HotelDinamarca
