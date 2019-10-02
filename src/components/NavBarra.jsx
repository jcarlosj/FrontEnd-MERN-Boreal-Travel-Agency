import React from 'react'
import "../public/styles/menu-superior.css"
import "../public/styles/slider.css"
import "../public/styles/tarjetas-default.css"
import "../public/styles/tarjetas-styles.css"
import "../public/styles/gridStandard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavBarra() {
    return (
        <div className="mainGrid"> 
            <header className="menu-superior w-100">
            <nav className="navbar navbar-expand-lg">
                <Link to='/'  className="nav-link"><img className="logo-nav" src={require("../public/imagenes/logotipo-boreal-blanco.png")}
                        alt="logo-boreal"/></Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icono-nav"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <Link to='/'  className="nav-link"> HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aerolineas' className="nav-link">AEROLÍNEA</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/hoteles' className="nav-link">HOTELES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/paquetes' className="nav-link">PLANES</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to='/tiquetes' className="nav-link">MIS TIQUETES</Link>
                        </li> */}
                    </ul>
                    <Link className="my-2 my-sm-0 mr-4" to="/login"><svg className="icono-nav"
                            xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                        </svg></Link>
                    <Link className="my-2 my-sm-0" to="/registro"><svg className="icono-nav" xmlns="http://www.w3.org/2000/svg"
                            width="46" height="46" viewBox="0 0 24 24">
                            <path
                                d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-1.946 11.333v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z" />
                        </svg></Link>

                </div>
                </nav>
            </header>

        </div>
   
    )
}

export default NavBarra
