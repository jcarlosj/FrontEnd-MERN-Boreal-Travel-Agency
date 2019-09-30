import React from 'react'
import "../public/styles/carrusel.css"
import "../public/scripts/scriptsHoteles/carrusel"
import "../App.css"

function HotelIslandia() {
    return (
        <div style={{"marginTop":"30px"}}>
        <section class="details-card">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/islandia/fachada2-hotel.jpg")} alt="FACAHADA" width="100%"/>
                      
                        </div>
                       
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/islandia/holl2.jpg")} alt="HALL" width="100%"/>
                           
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
                            <img src={require("../public/imagenes/hoteles/islandia/habitacion4.jpg")} alt="room" width="100%"/>
                         
                        </div>
                       
                        </div>
                    </div>
                </div>
            
        </div>
    
        </section>
        </div>
       
    )
}

export default HotelIslandia