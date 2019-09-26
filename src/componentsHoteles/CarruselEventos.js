import React from 'react'
import "../App.css"
function CarruselEventos() {
    return (

        <div class="container">
          
          <div id="demo" class="carousel slide" data-ride="carousel">
        
          <ul class="carousel-indicators mb-0 pb-0">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
        
          <div class="carousel-inner no-padding my-5">
            <div class="carousel-item active">
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top" height="70px" src="imagenes/shows_suecia/show_fiesta_walpurguis.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p>Fiesta Walpurgis - 30 abril - 1 mayo
                    Noche de Walpurgis (o Walpurgisnacht en alemán) es una festividad celebrada entre el 30
                    de abril y el 1 de mayo en grandes regiones de Europa Central y el Norte.</p>
                <p>Es la noche del 30 de abril cuando cuenta la leyenda que se celebra uno de los sabbath o reuniones
                     de brujas más importantes del año: Es la espeluznante noche de Walpurgis que Goethe,
                      el insigne escritor alemán, nos relata con todo lujo de detalle en su «Fausto»,
                       una de sus obras más destacadas. 
                       </p>
                
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top rounded-bottom" height="70px" src="imagenes/shows_suecia/show_midsommar.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p>  Midsommar – Junio
                        La celebración del Midsommar en Suecia o la fiesta del solsticio de verano,
                         es una tradición que los suecos viven tan o más intensamente que el Día Nacional.
                         Se celebra el viernes anterior al de San Juan – 24 de junio, este año. 
                         Según la tradición las mujeres se visten con los trajes regionales. 
                         Los niños salen a buscar flores por el campo y las niñas y mujeres se adornan el
                          cabello con estas flores haciendo coronas que simbolizan la buena suerte.
                        </p>
                
        
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top rounded-bottom" height="70px" src="imagenes/shows_suecia/show_semana_medieval.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p> 
                        Semana Medieval – Julio
                        Visby, una villa medieval muy bien conservada, situada en la isla de Gotland, 
                        celebra cada año la Semana Medieval. Durante este festival la ciudad se viste
                         de época, el objetivo es conmemorar con una serie de actos los tiempos de su fundación.
                        En el festival es posible también degustar la auténtica comida sueca, decenas de puestos ofrecen platos para llevar y cientos de productos artesanales.
                        
                        </p>
                
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top" height="70px" src="imagenes/shows_suecia/show_festival_libelula.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p>     Festival de la libélula – Julio
                        Tiene lugar los últimos días de agosto en Ekehagens Forntidsby, y ofrece espectáculos musicales,
                         representaciones teatrales, exposiciones y conferencias. En cualquier caso, el principal encanto 
                         de esta población radica en sus increíbles paisajes.
                        
                        </p>
        
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top" height="70px" src="imagenes/shows_suecia/show_lucia_fiesta.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p>
                        Santa Lucia Fiesta de Luces – Diciembre
                        El 13 de diciembre es un día muy especial en Suecia y en parte de la órbita escandinava ya 
                        que, este día es la celebración de Santa Lucía que es, una hermosa tradición llena de magia, 
                        misticismo y luz donde se recuerda a una santa mártir de Sicilia llamada precisamente, Lucia 
                        y que está catalogada como una ceremonia importante en la cultura sueca.
                        
                </p>
        
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top"   src="imagenes/shows_suecia/show_navidad.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p>     Navidad
                        Cada año Estocolmo se encarga de decorar la ciudad con miles de bombillas que iluminan el cielo 
                        de Estocolmo a partir de mediados o finales de noviembre.
                        Darte un paseo por Gamla Stan al estilo sueco incluye hacer paradas para hacer un fika 
                        (no olvides tomarte mis bollitos de cardámomo recomendados en Estocolmo) en algunas de las 
                        cafeterías más conocidas como Chockladkoppen.	
                        </p>
        
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top"  src="imagenes/shows_islandia/Þorrablot.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p>Þorrablót - Mes de Thor / Enero – Febrero
                        La segunda quincena de enero y la primera de febrero es tiempo en Islandia para celebrar el 
                        antiguo Mes de Thor o fiesta de Thorrablöt. La comida y la bebida son las protagonistas de 
                        todos los eventos de esta fiesta, que tiene sus raíces en la tradición vikinga. Los platos 
                        antes mencionados (el tiburón fermentado bajo tierra o la cabeza de cordero) son habituales
                         en las mesas, y estas fechas son las más indicadas para probarlos. 
                        </p>
        
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4">
                {/* <a href="#" onclick={abc(this)} class="slider_info"> */}
                  <img class="img-fluid card-img-top" src="imagenes/shows_islandia/menningarnott.jpg"/>
                  <div class="card-img-overlay t_img">
                    <span class="float-left text-uppercase">article</span>
                    <span class="float-right text-uppercase">2345 views</span>
                  </div>
                {/* </a> */}
                <p>
                        Menningarnótt - Noche de cultura islandesa
                        La noche cultural Islandia, Menningarnótt en islandés, es una fiesta que se celebra en Reykjavik un
                         sábado de la tercera semana de cada agosto. Es otra excusa perfecta para visitar Islandia.
                        La tradición se inició en el 2005 y su popularidad y presupuesto han ido creciendo cada año gracias
                         al entusiasmo del Ayuntamiento y la envergadura de los patrocinadores. 
                        </p>
        
              </div>
            
          </div>
        
                         <a class="carousel-control-prev" href="#demo" data-slide="prev">
                          <span class="carousel-control-prev-icon sp"></span>
                        </a>
                             <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon sp"></span>
                        </a> 
            </div>
        </div>
        </div>

      
    )
}

export default CarruselEventos
