import React from 'react'

function CarruselComidas() {
    return (
       
        
            <div class="container">
                <div class="slider-productos">
                    <div id="carousel">
                            <div class="hideLeft">
                                    <img src={require("../public/imagenes/hoteles/suecia/gravad_lax.jpg")}/>
                                    <div class="info">
                                        <h3 class="title text-center">NUESTRAS COMIDAS SUECIA</h3>
                                        
                                    </div>
                                </div>

                        <div class="hideLeft">
                            <img src={require("../public/imagenes/hoteles/suecia/Strommingslador.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">Strömmingslådor</h3>
                               
                            </div>
                            
                        </div>

                        <div class="prevLeftSecond">
                            <img src={require("../public/imagenes/hoteles/suecia/raggmunk .jpg")}/>
                                <div class="info">
                                    <h3 class="title text-center">Raggmunk</h3>
                                   
                                </div>
                        </div>

                        <div class="prev">
                            <img src={require("../public/imagenes/hoteles/suecia/gravad_lax.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">Gravad lax</h3>
                               iv>
                        </div>

                        <div class="hideLeft">
                            <img src={require("../public/imagenes/hoteles/suecia/fondo-comida.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">NUESTRAS COMIDAS ISLANDIA</h3>
                            </div>
                        </div>

                        <div class="selected">
                            <img src={require("../public/imagenes/hoteles/islandia/kaestur hakarl.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">kæstur hákarl</h3>
                              
                            </div>
                        </div>

                        <div class="next">
                            <img src={require("../public/imagenes/hoteles/islandia/Plokkfiskur1.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">Plokkfiskur</h3>
                               
                            </div>
                        </div>

                        <div class="nextRightSecond">
                            <img src={require("../public/imagenes/hoteles/islandia/Kjötsúpa.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">Kjötsúpa</h3>
                         
                            </div>
                        </div>
                        
                        <div class="hideLeft">
                            <img src={require("../public/imagenes/hoteles/islandia/fondo-comida.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">NUESTRAS COMIDAS DINAMARCA</h3>
                                
                            </div>
                        </div>
                        <div class="nextRightSecond">
                            <img src={require("../public/imagenes/hoteles/dinamarca/Smørrebrød1.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">Smørrebrød</h3>
                                        
                            </div>
                        </div>
                        
                        <div class="nextRightSecond">
                            <img src={require("../public/imagenes/hoteles/dinamarca/Flæskesteg1.jpg")}/>
                                <div class="info">
                                    <h3 class="title text-center">FlÆskesteg - Asado de cerdo</h3>
    
                                </div>
                            </div>


                            
                        <div class="nextRightSecond">
                            <img src={require("../public/imagenes/hoteles/dinamarca/Hvid labskovs1.jpg")}/>
                            <div class="info">
                                <h3 class="title text-center">Hvid labskovs - estofado de ternera con patatas, laurel y pimienta receta::</h3>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default CarruselComidas; 
