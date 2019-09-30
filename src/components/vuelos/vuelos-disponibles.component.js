import React, { Component } from 'react';
import axios from 'axios';                  // Paquete que permite hacer peticiones HTTP

import FormReservarVuelo from './reservar-vuelo.component';

import DatePicker from 'react-datepicker';             // Importa código JavaScript de DatePicker para React
//import { format } from 'timeago.js';    // Librería para formatear la fecha 

export default class VuelosDisponibles extends Component {

    // Renderiza la vista del componente
    render() {
        return (
            <div className="row">
                <FormReservarVuelo />
            </div>
        )
    }
}