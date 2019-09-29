import React from 'react'
import "../public/styles/carrusel.css"
import "../public/scripts/scriptsHoteles/carrusel"
import "../App.css"

function HotelSuecia() {
    return (
        <div className='App'>
        <section class="details-card">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/suecia/fachada1-hotel.jpg")} alt="FACHADA"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/suecia/holl1.jpg")} alt="HALL"/>
                           
                        </div>
                        <div class="card-desc">
                            <h3>Suecia</h3>
                            <a href="#" class="btn-card">Ver más</a>   
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-content">
                        <div class="card-img">
                            <img src={require("../public/imagenes/hoteles/suecia/habitacion1.jpg")} alt="ROOM"/>
                         
                        </div>
                        </div>
                </div>
            </div>
        </div>
        </section>
        </div>
       
    )
}

export default HotelSuecia
