import React from 'react'
import '../App.css';
import "../public/styles/paquetes.css"
import "../public/styles/tarjetas-styles.css"
import "../public/styles/tarjetas-default.css"
import "../public/styles/planesjagd.css"
import "../public/scripts/scriptsPaquetes/tarjetas-efectos-home"
import "../public/scripts/scriptsPaquetes/tarjetas-home"
import "../public/styles/menu-superior.css"

function SingleElement() {
    return (
  
    <div>
        <header class="menu-superior w-100">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#"><img class="logo-nav" src="imagenes/logotipo-boreal-blanco.png"
                    alt="logo-boreal"/></a>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icono-nav"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item ">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">AEROLÍNEA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOTELES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PAQUETES</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link " href="#">MIS TIQUETES</a>
                    </li>
                </ul>
                <a class="my-2 my-sm-0 mr-4" href="/login.html"><svg class="icono-nav"
                        xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg></a>
                <a class="my-2 my-sm-0" href="/registro.html"><svg class="icono-nav" xmlns="http://www.w3.org/2000/svg"
                        width="46" height="46" viewBox="0 0 24 24">
                        <path
                            d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-1.946 11.333v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z" />
                    </svg></a>

            </div>
        </nav>
    </header>

    <main>
        <section class="imagen-superior">
            <img src="imagenes/imagen-header-borrador.png" alt="paisaje"/>
        </section>
        <section class="container">
            <section class="row justify-content-center">
                <ul class="tarjetas grid cs-style-1 col-12">
                    <li>
                        <figure>
                            <img src="imagenes/skogafoss.jpg" alt="img3"/>
                            <figcaption class="card-fuente">
                                <h3>Islandia</h3>
                                <span>skogafoss</span>
                                <a href="https://www.visitnorway.es/que-ver-en-noruega/este-de-noruega/oslo/">Más
                                    información</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="imagenes/legoland.jpg" alt="Lego land en dinamarca"/>
                            <figcaption class="card-fuente">
                                <h3>Dinamarca</h3>
                                <span>Legoland</span>
                                <a href="https://www.visitnorway.es/que-ver-en-noruega/este-de-noruega/oslo/">Más
                                    información</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="imagenes/malmoe_noche.jpg" alt="malmoe de noche en suecia"/>
                            <figcaption class="card-fuente">
                                <h3>Suecia</h3>
                                <span>Malmoe de noche</span>
                                <a href="https://www.visitnorway.es/que-ver-en-noruega/este-de-noruega/oslo/">Más
                                    información</a>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            <section class="row justify-content-center section-atracciones mt-5">
                <div class="col-md-10 text-center">
                    <h1>
                        LISTADO PLANES TURISTICOS EN DINAMARCA
                    </h1>
                </div>
            </section>
            <section class="row section-concepto my-5">                               
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 1
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>“LEGOLAND Billund”</h1>
                    <p> Los parques se destinan para familias con niños pequeños (de 11 años o menos), y
                            aunque las
                            atracciones incluyen una serie de montañas rusas, las montañas rusas no son tan
                            numerosas o.......
                    </p>
                </div>
                <div class="col-md-3">

                    <button class="button" data-modal="modal1">Consulta aquí</button>

                    <div class="modal" id="modal1">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “LEGOLAND Billund”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>Legoland es una cadena de parques temáticos familiares, que se centra
                                        principalmente
                                        en el
                                        juguete Lego. $179.783 x persona + niño</p>
                                    <p>Los parques se destinan para familias con niños pequeños (de 11 años o menos), y
                                        aunque las
                                        atracciones incluyen una serie de montañas rusas, las montañas rusas no son tan
                                        numerosas o
                                        extremas como las de otros parques, y hay un mayor énfasis en las atracciones.
                                        Adecuado para
                                        niños más pequeños. Los parques de Legoland se dividen en varias áreas, que son
                                        consistentes
                                        entre los parques de la cadena. Por ejemplo, incluyen una Lego miniland, una
                                        aldea
                                        modelo
                                        que incluye modelos de monumentos y escenas de todo el mundo, hechos de millones
                                        de
                                        ladrillos genuinos de Lego. Además de la réplica de animales y paisajes de
                                        diferentes partes del
                                        mundo.</p>
                                    <a href="https://www.legoland.dk/en/">
                                        <h3> https://www.legoland.dk/en/</h3>
                                    </a>
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/legoland1.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Dinamarca</h3>
                                                        <span>Legoland</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/legoland2.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Juega</h3>
                                                        <span>Legoland</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/legoland3.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Disfruta</h3>
                                                        <span>Legoland</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">

                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row section-concepto my-5">
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 2
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>“Tivoli PLUS”</h1>
                    <p> Tivoli, también conocido como Tivoli Gardens, es un parque de diversiones y atracciones
                            mecánicas, además es un jardín de recreo en Copenhague, Dinamarca, con amplias zonas
                            verdes. El parque abrió el 15 de agosto de 1843.......
                    </p>
                </div>
                <div class="col-md-3">
                    <button class="button" data-modal="modal2">Consulta aquí</button>

                    <div class="modal" id="modal2">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “Tivoli PLUS”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>Boleto de viajes ilimitados de 1 día a los jardines de “Tivoli PLUS”, $146.306 x persona + niño</p>
                                    <p>
                                            
                                            Tivoli, también conocido como Tivoli Gardens, es un parque de diversiones y atracciones
                                            mecánicas, además es un jardín de recreo en Copenhague, Dinamarca, con amplias zonas
                                            verdes. El parque abrió el 15 de agosto de 1843 y es el segundo parque de atracciones en
                                            funcionamiento más antiguo del mundo, después de Dyrehavsbakken en la cercana
                                            Klampenborg.
                                            Con más de 4 millones de visitantes por año. Tivoli es el parque temático más visitado de
                                            Escandinavia. Se encuentra directamente en el centro de Copenhague, al lado de la estación
                                            central de trenes de la ciudad.</p>
                                    <a href="https://www.tivoligardens.com">
                                        <h3> https://www.tivoligardens.com</h3>
                                    </a>
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/tivoli garden.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Ven</h3>
                                                        <span>En familia</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/tivoli garden1.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Al Verde</h3>
                                                        <span>Paz interior</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/tivoligarden2.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Con Naturaleza</h3>
                                                        <span>Aire puro</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">

                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row section-concepto my-5">
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 3
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>“Kronborg Castle.”</h1>
                    <p> Kronborg es un castillo y fortaleza en la ciudad de Helsingør, Dinamarca. Inmortalizado como
                            Elsinore en la obra de William Shakespeare Hamlet, Kronborg es uno de los castillos
                            renacentistas........
                    </p>
                </div>
                <div class="col-md-3">

                    <button class="button" data-modal="modal3">Consulta aquí</button>

                    <div class="modal" id="modal3">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “Kronborg Castle.”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>Excursión privada de 5 horas al “Castillo de Hamlet” desde Copenhague, $ 1.342.282 (4
                                            personas)</p>
                                    <p>
                                            Kronborg es un castillo y fortaleza en la ciudad de Helsingør, Dinamarca. Inmortalizado como
                                            Elsinore en la obra de William Shakespeare Hamlet, Kronborg es uno de los castillos
                                            renacentistas más importantes del norte de Europa y ha sido agregado a la lista de sitios del
                                            Patrimonio Mundial de la UNESCO (2000).
                                            
                                            
                                            Kronborg es conocido por muchos como Elsinore, el escenario de la famosa tragedia de
                                            William Shakespeare, Hamlet, Príncipe de Dinamarca, aunque. Elsinore es en realidad el
                                            nombre anglicizado de la ciudad circundante de Helsingør. Hamlet se realizó en el castillo por
                                            primera vez para conmemorar el 200 aniversario de la muerte de William Shakespeare, con un
                                            elenco formado por soldados de la guarnición del castillo. El escenario estaba en la torre del
                                            telégrafo en la esquina suroeste del castillo.
                                            El castillo está situado en el extremo noreste de la isla de Zelanda. Fue de importancia
                                            estratégica de mantener una fortificación costera en este lugar al mando de una de las pocas
                                            salidas del Mar Báltico..</p>
                                    <a href="https://kongeligeslotte.dk">
                                        <h3> https://kongeligeslotte.dk</h3>
                                    </a>
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Kronborg castle.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Revive</h3>
                                                        <span>Tu pasión</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Kronborgcatle1.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>En</h3>
                                                        <span>Kronborg Castle.</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Kronborgcastle2.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Con</h3>
                                                        <span>La historia de Hamlet</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">

                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row section-concepto my-5">
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 4
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>“Vesterhavegaarden”</h1>
                    <p> En los meses se realiza una visita a la bodega: MAYO, JUNIO, JULIO, AGOSTO, SEPTIEMBRE,
                            OCTUBRE, donde la visita al viñedo es más relevante. La visita dura aproximadamente 2 horas.......
                    </p>
                </div>
                <div class="col-md-3">
                    <button class="button" data-modal="modal4">Consulta aquí</button>

                    <div class="modal" id="modal4">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “Vesterhavegaarden”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>“Vesterhavegaarden” Viña y tienda de vinos Visita - Producido orgánicamente
                                            $123.9888 x pareja</p>
                                    <p>.
                                            
                                            En los meses se realiza una visita a la bodega: MAYO, JUNIO, JULIO, AGOSTO, SEPTIEMBRE,
                                            OCTUBRE, donde la visita al viñedo es más relevante. La visita dura aproximadamente 2 horas
                                            e incluye lo siguiente: Un poco de historia del viñedo. Paseo de viñedos en la plantación, con
                                            información sobre las viñas del campo, las variedades, el viñedo de este año. Visita guiada a la
                                            bodega e información sobre la elaboración del vino.
                                            Vinos y Uvas
                                            Desde el principio, era importante que la calidad del vino fuera de primera categoría. Los
                                            mejores vinos que se encuentran entre los mejores de Dinamarca y que también tienen clase a
                                            nivel internacional. Con fuerte sabor y aroma. La fruta danesa es formidable debido a nuestro
                                            clima con el largo tiempo de maduración, y ahora que hay uvas cultivadas que pueden alcanzar
                                            la madurez y que son sabrosas.</p>
                                    <a href="http://www.vesterhavegaarden.dk/">
                                        <h3> http://www.vesterhavegaarden.dk/</h3>
                                    </a>
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/vesterhavegaarden.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Te</h3>
                                                        <span>invito</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/vesterhavegaarden1.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Siente</h3>
                                                        <span>el sabor.</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/vesterhavegaarden2.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Gracias</h3>
                                                        <span>a la uva y su proceso de maduración.</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">

                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row section-concepto my-5">
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 5
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>“El Palacio de Christiansborg”</h1>
                    <p> El Palacio de Christiansborg , es un palacio y edificio gubernamental en el islote de Slotsholmen
                        en el centro de Copenhague, Dinamarca........
                    </p>
                </div>
                <div class="col-md-3">

                    <button class="button" data-modal="modal5">Consulta aquí</button>

                    <div class="modal" id="modal5">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “El Palacio de Christiansborg”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>                                            * Entrada al Palacio de “Christiansborg Palace”, $71.417 x persona
                                            </p>
                                    <p>El Palacio de Christiansborg , es un palacio y edificio gubernamental en el islote de Slotsholmen
                                            en el centro de Copenhague, Dinamarca. Es la sede del Parlamento danés (Folketinget), la
                                            Oficina del Primer Ministro danés, y la Corte Suprema de Dinamarca. Además, el monarca
                                            danés utiliza varias partes del palacio, incluidas las salas de recepción real, la capilla del palacio
                                            y los establos reales.
                                            Por lo tanto, el palacio alberga los tres poderes supremos: el poder ejecutivo, el poder
                                            legislativo y el poder judicial. Es el único edificio en el mundo que alberga las tres ramas de
                                            gobierno de un país. Por lo tanto, el nombre Christiansborg también se usa con frecuencia
                                            como una metonimia para el sistema político danés, y coloquialmente a menudo se lo conoce
                                            como Rigsborgen ("El castillo del reino") o simplemente Borgen ("el castillo").
                                            El edificio actual, el tercero con este nombre, es el último de una serie de castillos y palacios
                                            sucesivos construidos en el mismo sitio desde la construcción del primer castillo en 1167.
                                            El palacio hoy es testigo de tres épocas de la arquitectura danesa. El Palacio de Christiansborg
                                            es propiedad del Gobierno danés y está dirigido por la Agencia de Palacios y Propiedades.
                                            Varias partes del palacio están abiertas al público.</p>
                                    <a href="https://www.kongeligeslotte.dk/en/palaces-and-gardens/christiansborg-palace.html">
                                        <h3> https://www.kongeligeslotte.dk/en/palaces-and-gardens/christiansborg-palace.html</h3>
                                    </a>
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/ChristiansborgPalce.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Palacio</h3>
                                                        <span>Christiansborg</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Christiansborgpalce1.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Gobierno</h3>
                                                        <span>Danes</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Christiansborgpalce2.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Belleza de</h3>
                                                        <span>La arquitectura</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">

                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row section-concepto my-5">
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 6
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>“Copenhagen Card”</h1>
                    <p> La Copenhagen Card es la forma más conveniente y económica de experimentar Copenhague.
                        Visite museos de clase mundial, haga un crucero.......
                    </p>
                </div>
                <div class="col-md-3">
                    <button class="button" data-modal="modal6">Consulta aquí</button>

                    <div class="modal" id="modal6">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “Copenhagen Card”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>Tarjeta turística “Copenhagen Card”, $197.885 x persona Uso 24 horas.</p>
                                    <p>
                                            
                                            La Copenhagen Card es la forma más conveniente y económica de experimentar Copenhague.
                                            Visite museos de clase mundial, haga un crucero por los encantadores canales y explore los
                                            hermosos castillos dentro y fuera de Copenhague. Todo gratis: una visita por atracción.
                                            Con una Tarjeta de Copenhague en la mano, no tiene que preocuparse por las zonas de tráfico
                                            y los precios de los boletos, ya que obtiene viajes ilimitados en trenes, autobuses, metro y
                                            autobuses de puerto en toda la región de la capital, incluso desde y hacia el aeropuerto.
                                            Ahorrar dinero es un factor importante en cualquier viaje. La Copenhagen Card es la solución
                                            ideal para ayudarlo a aprovechar al máximo su viaje y una forma asequible de visitar las
                                            principales atracciones. ¡Solo echa un vistazo a las opiniones de otros viajeros!</p>
                                    <a href="https://copenhagencard.com/">
                                        <h3>https://copenhagencard.com/</h3>
                                    </a>
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/copenhagencard1.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Copenhagen</h3>
                                                        <span>Card</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/copenhagencard1.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Disfruta</h3>
                                                        <span>La ciudad</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/copenhagencard1.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Entre</h3>
                                                        <span>Parques, palacios y transporte.</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">

                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row section-concepto my-5">
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 7
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>"Aalborg Like a Local"</h1>
                    <p> Un guía es una persona que conduce a viajeros, deportistas o turistas a través de lugares
                            desconocidos, donde te guiara por diferentes partes de Aalborg,......
                    </p>
                </div>
                <div class="col-md-3">

                    <button class="button" data-modal="modal7">Consulta aquí</button>

                    <div class="modal" id="modal7">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “Aalborg Like a Local”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>Aalborg Like a Local: Tour privado personalizado, $129.521 x pareja</p>
                                    <p>
                                            Un guía es una persona que conduce a viajeros, deportistas o turistas a través de lugares
                                            desconocidos, donde te guiara por diferentes partes de Aalborg, donde te mostrara partes de
                                            la ciudad y atractivos. Además de saber de la historia y precios, recomendaciones entre otros,
                                            normalmente estos guías hablan varios idiomas.</p>
                                    
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Aalborg1.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Aalborg</h3>
                                                        <span>tu plan</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Aalborg2.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Explora</h3>
                                                        <span>con un local</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/Aalborg3.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Y aprenda</h3>
                                                        <span>sobre Aalborg</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">

                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row section-concepto my-5">
                <div class="col-md-3 concepto-magico mb-4">
                    <div>
                        PLAN 8
                    </div>

                </div>
                <div class="col-md-6">
                    <h1>“Time Travel Aarhus”</h1>
                    <p> Aarhus, segunda ciudad en Dinamarca. Una vibrante mezcla de energía juvenil y una historia
                            viva es lo que hace de Aarhus una ciudad con un ritmo enérgico. .......
                    </p>
                </div>
                <div class="col-md-3">
                    <button class="button" data-modal="modal8">Consulta aquí</button>

                    <div class="modal" id="modal8">
                        <div class="modal-guts">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close"> Cerrar &times; </span>
                                    <h2>..¯\_(ツ)_/¯ “Time Travel Aarhus”</h2>
                                </div>
                                <div class="modal-body">
                                    <p>Viaje en el tiempo en Aarhus, $286.165 x pareja “Time Travel Aarhus”</p>
                                    <p>
                                            
                                            Aarhus, segunda ciudad en Dinamarca. Una vibrante mezcla de energía juvenil y una historia
                                            viva es lo que hace de Aarhus una ciudad con un ritmo enérgico. En Aarhus, cuando decimos
                                            distancia a pie, realmente queremos decir distancia a pie.
                                            
                                            ‘Time Travel Aarhus’ es una exposición fotográfica creada por Ripudaman Singh en la que ha
                                            mezclado el &quot;nuevo Aarhus&quot; con los Aarhus del pasado. En cada exhibición, la imagen anterior
                                            es de una base de datos pública y la nueva imagen se toma entre 2013-2015.
                                            La exposición le dará al público la oportunidad de viajar en el tiempo y experimentar cómo la
                                            vida ha cambiado / no ha cambiado a lo largo de los años, y experimentar cómo las calles, los
                                            edificios y otros puntos de referencia han llevado la peor parte del tiempo. Las exhibiciones
                                            también intrigarán a aquellos que son nuevos en la ciudad y les ofrecerán la oportunidad de
                                            explorar estas transiciones.</p>
                                    <a href="http://www.timetravelaarhus.com/">
                                        <h3> http://www.timetravelaarhus.com/</h3>
                                    </a>
                                </div>
                                <section class="container">
                                    <section class="row justify-content-center">
                                        <ul class="tarjetas grid cs-style-1 col-12">
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/timetravelaarhus.jpg"
                                                        alt="img3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Blanco y</h3>
                                                        <span>Negro</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/timetravelaarhus1.jpg"
                                                        alt="Legoland2"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Viaja</h3>
                                                        <span>Al pasado</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src="..//theme/imagenes/img-planesjagd/timetravelaarhus2.jpg"
                                                        alt="legoland3"/>
                                                    <figcaption class="card-fuente">
                                                        <h3>Disfruta</h3>
                                                        <span>el timepo</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <div class="modal-footer">
                                    <button id="" class="button">Reserva aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </section>
    </main>
    <hr class="separador-footer mt-4"/>
    <footer class="container">
        <div class="row mt-3 menu-footer">
            <div class="col-md-5">
                <div class="row">
                    <div class="col-6">
                        <h1>Corporativo</h1>
                        <ul>
                            <li>Quiénes somos</li>
                            <li>Misión</li>
                            <li>Visión</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <h1>Nuestras sedes</h1>
                        <ul>
                            <li>Chapinero</li>
                            <li>Cedritos</li>
                            <li>Portal 80</li>
                            <li>C.C santafe</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-4">
                <h1>Viajamos a</h1>
                <ul>
                    <li>Reikiavik - Islandia</li>
                    <li>Estocolmo - Suecia</li>
                    <li>Copenhague - Dinamarca</li>
                </ul>
            </div>
            <div class="col-6 col-md-3">
                <h1>Redes sociales</h1>
                <ul class="p-0 redes-sociales">
                    <li>
                        <a href="https://fb.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                            </svg>
                        </a></li>
                    <li> <a href="https://instagram.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                <path
                                    d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                            </svg>
                        </a></li>
                    <li><a href="https://youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                <path
                                    d="M10.918 13.933h.706v3.795h-.706v-.419c-.13.154-.266.272-.405.353-.381.218-.902.213-.902-.557v-3.172h.705v2.909c0 .153.037.256.188.256.138 0 .329-.176.415-.284v-2.881zm.642-4.181c.2 0 .311-.16.311-.377v-1.854c0-.223-.098-.38-.324-.38-.208 0-.309.161-.309.38v1.854c-.001.21.117.377.322.377zm-1.941 2.831h-2.439v.747h.823v4.398h.795v-4.398h.821v-.747zm4.721 2.253v2.105c0 .47-.176.834-.645.834-.259 0-.474-.094-.671-.34v.292h-.712v-5.145h.712v1.656c.16-.194.375-.354.628-.354.517.001.688.437.688.952zm-.727.043c0-.128-.024-.225-.075-.292-.086-.113-.244-.125-.367-.062l-.146.116v2.365l.167.134c.115.058.283.062.361-.039.04-.054.061-.141.061-.262v-1.96zm10.387-2.879c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-10.746-2.251c0 .394.12.712.519.712.224 0 .534-.117.855-.498v.44h.741v-3.986h-.741v3.025c-.09.113-.291.299-.436.299-.159 0-.197-.108-.197-.269v-3.055h-.741v3.332zm-2.779-2.294v1.954c0 .703.367 1.068 1.085 1.068.597 0 1.065-.399 1.065-1.068v-1.954c0-.624-.465-1.071-1.065-1.071-.652 0-1.085.432-1.085 1.071zm-2.761-2.455l.993 3.211v2.191h.835v-2.191l.971-3.211h-.848l-.535 2.16-.575-2.16h-.841zm10.119 10.208c-.013-2.605-.204-3.602-1.848-3.714-1.518-.104-6.455-.103-7.971 0-1.642.112-1.835 1.104-1.848 3.714.013 2.606.204 3.602 1.848 3.715 1.516.103 6.453.103 7.971 0 1.643-.113 1.835-1.104 1.848-3.715zm-.885-.255v.966h-1.35v.716c0 .285.024.531.308.531.298 0 .315-.2.315-.531v-.264h.727v.285c0 .731-.313 1.174-1.057 1.174-.676 0-1.019-.491-1.019-1.174v-1.704c0-.659.435-1.116 1.071-1.116.678.001 1.005.431 1.005 1.117zm-.726-.007c0-.256-.054-.445-.309-.445-.261 0-.314.184-.314.445v.385h.623v-.385z" />
                            </svg>
                        </a></li>
                </ul>
            </div>
        </div>
        </footer>
    </div>
            
 
    )
}

export default SingleElement
