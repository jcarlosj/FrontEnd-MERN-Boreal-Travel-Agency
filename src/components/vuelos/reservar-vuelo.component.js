import React, { Component } from 'react';
import axios from 'axios';                  // Paquete que permite hacer peticiones HTTP

import DatePicker from 'react-datepicker';             // Importa código JavaScript de DatePicker para React
//import { format } from 'timeago.js';    // Librería para formatear la fecha 

export default class ReservarVuelo extends Component {

    // Define el estado de los datos en el Componente
    state = {
        vuelosDisponibles: [],
        origen: '',              // Input del Formulario
        destino: '',             // Input del Formulario
        hayVuelosIda: false,
        hayVuelosRegreso: false
    }

    // Consultar la DB
    getVuelosDisponibles = async () => {
        const vuelosDisponibles = await axios .post( 'http://localhost:4000/api/vuelos/disponibles', {
            origen: this .state .origen,
            destino: this .state .destino,
        });
        console .log( 'Vuelos disponibles', vuelosDisponibles );

        // Almacena los datos en el Estado de la Aplicación del Componente
        this .setState({
            vuelosDisponibles: vuelosDisponibles .data,
            hayVuelosIda: vuelosDisponibles .data .ida .length > 0 ? true : false,
            hayVuelosRegreso: vuelosDisponibles .data .regreso .length > 0 ? true : false
        });

        console .log( this .state .vuelosDisponibles .ida );
    }

    // Método: Establece en el estado del Compomente cuando el valor de uno o másl campos del formulario cambian
    onChangeFormFieldsValue = e => {
        console .log( '[', e. target .name, ']: ', e. target .value );   // Obtiene el valor de los atributo 'name' y 'value' de los campos nativos del formulario (DatePicker no es nativo)

        // Almacena los datos en el Estado de la Aplicación del Componente
        this .setState({
            [ e .target .name ]: e .target .value   // Establece valor al atributo seleccionado (userSelected, title, content) del formulario.
        });

    } 

    // Método: Envia datos al API a través del formulario (POST)
    onSubmit = async e => {
        e .preventDefault();    // Cancela el comportamiento por defecto del formulario de recargar la página

        console .log( 'origen', this .state .origen );
        console .log( 'destino', this .state .destino );

        this .getVuelosDisponibles();
    }

    // Renderiza la vista del componente
    render() {
        
        const 
            formBusqueda = () => (
                <form onSubmit={ this .onSubmit } className="" >
                    <h3>Reservar Vuelos</h3>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="formGroupExampleInput">Origen</label>
                            <input 
                                type="text" 
                                name="origen" 
                                className="form-control" 
                                id="formGroupExampleInput" 
                                placeholder="Example input" 
                                value={ this .state .origen }
                                onChange={ this .onChangeFormFieldsValue }
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="formGroupExampleInput">Destino</label>
                            <input
                                type="text"
                                name="destino" 
                                className="form-control"
                                id="formGroupExampleInput"
                                value={ this .state .destino }
                                onChange={ this .onChangeFormFieldsValue }
                                placeholder="Example input"
                            />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="formGroupExampleInput">Fecha de salida</label>
                            <DatePicker
                                className="form-control"
                                //selected={ this.state.fecha_salida }
                                //onChange={ this.onChangeFechaSalida }
                            />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="formGroupExampleInput">Fecha de llegada</label>
                            <DatePicker
                                className="form-control"
                                //selected={ this.state.fecha_llegada }
                                //onChange={ this.onChangeFechaLlegada }
                            />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor=""># Pasajeros</label>
                            <select className="custom-select">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Buscar vuelos</button>
                </form>
            ),
            listaIda = () => (
                <div className="vuelos-ida">
                    <h3>Vuelos Ida</h3>
                    <table class="table">
                        { 
                            this .state .vuelosDisponibles .ida .map( vuelo => (
                                <tr key={ vuelo ._id }>
                                    <td scope="row"> { vuelo .avion .matricula } </td>
                                    <td scope="row"> { vuelo .itinerario .duracion }</td>  
                                    <td scope="row"> { vuelo .itinerario .origen .aeropuerto }</td> 
                                    <td scope="row"> { vuelo .itinerario .origen .ciudad }</td> 
                                    <td scope="row"> { vuelo .itinerario .origen .iata_code }</td> 
                                    <td scope="row"> { vuelo .itinerario .destino .aeropuerto }</td> 
                                    <td scope="row"> { vuelo .itinerario .destino .ciudad }</td> 
                                    <td scope="row"> { vuelo .itinerario .destino .iata_code }</td> 
                                </tr>   
                            )) 
                        }
                    </table>
                </div>
            ),
            listaRegreso = () => (
                <div className="vuelos-regreso">
                    <h3>Vuelos Regreso</h3>
                    <table class="table">
                        { 
                            this .state .vuelosDisponibles .regreso .map( vuelo => (
                                <tr key={ vuelo ._id }>
                                    <td scope="row"> { vuelo .avion .matricula } </td>
                                    <td scope="row"> { vuelo .itinerario .duracion }</td>  
                                    <td scope="row"> { vuelo .itinerario .origen .aeropuerto }</td> 
                                    <td scope="row"> { vuelo .itinerario .origen .ciudad }</td> 
                                    <td scope="row"> { vuelo .itinerario .origen .iata_code }</td> 
                                    <td scope="row"> { vuelo .itinerario .destino .aeropuerto }</td> 
                                    <td scope="row"> { vuelo .itinerario .destino .ciudad }</td> 
                                    <td scope="row"> { vuelo .itinerario .destino .iata_code }</td> 
                                </tr>   
                            )) 
                        }
                    </table>
                </div>
            );

        return (
            <div>
                { formBusqueda() }
                { 
                    this .state .hayVuelosIda
                        ? listaIda()
                        : console .log( 'No hay vuelos de ida' )
                }
                {
                    this .state .hayVuelosRegreso
                        ? listaRegreso()
                        : console .log( 'No hay vuelos de regreso' )
                }
            </div>
        )
    }
}