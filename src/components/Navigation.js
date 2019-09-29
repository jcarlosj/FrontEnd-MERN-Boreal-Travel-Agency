import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-expand-lg navbar-light">
                <div className="navbar-header d-flex col">
                    <a className="navbar-brand" href="#"><b>Boreal</b> <small>Travel Agency</small></a>  		
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle navbar-toggler ml-auto">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                { /** Collection of nav links, forms, and other content for toggling */ }
                <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Airlines</a></li>	
                        <li className="nav-item"><a href="#" className="nav-link">Hotels</a></li>		
                        <li className="nav-item dropdown">
                            <a data-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Usuarios <b className="caret"></b></a>
                            <ul className="dropdown-menu">					
                                <li><Link className="dropdown-item" to="/user">Crear Usuarios</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a data-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Notas <b className="caret"></b></a>
                            <ul className="dropdown-menu">					
                                <li><Link className="dropdown-item" to="/">Lista Notas</Link></li>
                                <li><Link className="dropdown-item" to="/create">Crear Nota</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a data-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Vuelos <b className="caret"></b></a>
                            <ul className="dropdown-menu">					
                                <li><Link className="dropdown-item" to="/vuelos">Lista Vuelos</Link></li>
                                <li><Link className="dropdown-item" to="/vuelos/create">Crear Vuelo</Link></li>
                                <li><Link className="dropdown-item" to="/vuelos/disponibles">Reservas</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item active"><a href="#" className="nav-link">Mis Tiquetes</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right ml-auto">			
                        <li className="nav-item">
                            <a data-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Login</a>
                            <ul className="dropdown-menu form-wrapper">					
                                <li>
                                    <form action="/examples/actions/confirmation.php" method="post">
                                        <p className="hint-text">Sign in with your social media account</p>
                                        <div className="form-group social-btn clearfix">
                                            <a href="#" className="btn btn-primary pull-left"><i className="fa fa-facebook"></i> Facebook</a>
                                            <a href="#" className="btn btn-info pull-right"><i className="fa fa-twitter"></i> Twitter</a>
                                        </div>
                                        <div className="or-seperator"><b>or</b></div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Username" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" required="required" />
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-block" value="Login" />
                                        <div className="form-footer">
                                            <a href="#">Forgot Your password?</a>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">Sign up</a>
                            <ul className="dropdown-menu form-wrapper">					
                                <li>
                                    <form action="/examples/actions/confirmation.php" method="post">
                                        <p className="hint-text">Fill in this form to create your account!</p>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Username" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms &amp; Conditions</a></label>
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-block" value="Sign up" />
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
