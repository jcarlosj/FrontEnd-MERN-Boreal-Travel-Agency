import React from 'react'
import "../public/styles/foooter.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Foooter() {
    return (
        <div className="mainGrid">
              <footer className="site-footer backgroundImageConstelacion">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-4 col-lg-4">
                            <h6>QUIÉNES SOMOS</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">MISIÓN</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">VISIÓN</a></li>
                            </ul>
                        </div>

                        <div className=" col-md-4 col-lg-4">
                            <h6>NUESTRAS SEDES</h6>
                            <ul className="footer-links">
                                <li>CHAPINERO</li>
                                <li>CEDRITOS</li>
                                <li>PORTAL 80</li>
                                <li>C.C SANTA FÉ</li>
                            </ul>
                        </div>
                        <div className=" col-md-4 col-lg-4">
                            <img src={require("../public/imagenes/foooter/mapa-footer.png")} alt="" className="imgMapaFooter"/>
                        </div>
                    </div>
                    <hr/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-6">
                            <ul className="social-icons">
                                <li><img src="https://svgshare.com/i/5fq.svg" className="imgWidth"/></li>
                                <li><img src="https://image.flaticon.com/icons/svg/124/124021.svg"  className="imgWidth"/></li>
                                <li><img src="https://image.flaticon.com/icons/svg/124/124032.svg"  className="imgWidth"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-11" className="textAlignCenter">
                    <p className="copyright-text">WEBSITE BY FULLSTACK &copy; DERECHOS RESERVADOS 2019.</p>
                </div>
            </footer>
        </div>
    )
}

export default Foooter
