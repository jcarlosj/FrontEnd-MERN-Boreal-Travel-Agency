import React from 'react'
import "../public/styles/carrusel.css"
import "../public/scripts/scriptsHoteles/carrusel"
function HotelIslandia() {
    return (

        <section class="details-card">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/dinamarca/fachada2-hotel.jpg")} alt="FACAHADA"/>
                      
                        </div>
                       
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/dinamarca/holl2.jpg")} alt="HALL"/>
                           
                        </div>
                        <div class="card-desc">
                            <h3>Islandia</h3>
                         
                                <a href="#" class="btn-card">Ver más</a>   
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/dinamarca/habitacion4.jpg")} alt="room"/>
                         
                        </div>
                       
                        </div>
                    </div>
                </div>
            
        </div>
    
        </section>
       
    )
}

export default HotelIslandia