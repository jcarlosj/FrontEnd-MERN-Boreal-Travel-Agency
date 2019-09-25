import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"; 
import NavBarra from "./components/NavBarra"

import Home from "./MainComponents/Home"; 
import Aerolineas from "./MainComponents/Aerolineas"
import Hoteles from "./MainComponents/Hoteles"
import Paquetes from "./MainComponents/Paquetes"
import Tiquetes from "./MainComponents/Tiquetes"
import Login from  "./MainComponents/Login"
import Registro from "./MainComponents/Registro"
import Foooter from "./components/Foooter"

function App() {
    return (
        <Router> 
            <div className='contenedor'> 
                <NavBarra/> 

                <Route path="/"          exact component={Home}/>
                <Route path="/aerolineas"      component={Aerolineas}/>
                <Route path="/hoteles"         component={Hoteles}/>
                <Route path="/paquetes"        component={Paquetes}/>
                <Route path="/tiquetes"        component={Tiquetes}/>
                <Route path="/login"           component={Login}/>
                <Route path="/registro"        component={Registro}/>

                <Foooter/>
            </div>
        </Router>
    ); 
}

export default App; 