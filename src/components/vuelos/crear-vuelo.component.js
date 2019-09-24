import React, { Component } from 'react';
import axios from 'axios';                  // Paquete que permite hacer peticiones HTTP

export default class CreateVuelo extends Component {

    // Define el estado de los datos del Componente
    state = {
        vuelos: [],
        matricula: '',
        editing: false          // Flag identificar cuando editar
    }

    // Método: Acciones que se realizan cuando el componente es cargado
    componentDidMount = async () => {
        console .log( this .props .match .params );    // Obtiene los parametros pasados en la URL
        
        /** Realiza peticion HTTP al API usando axios */
        const res = await axios .get( 'http://localhost:4000/api/vuelos' );         

        console .log( 'respuesta', res );


        // Solo para Editar la Nota cuando se pase un ID a la URL
        if( this .props .match .params .id )  {
            
            const vuelo = await axios .get( `http://localhost:4000/api/vuelos/${ this .props .match .params .id }` );
            console .log( 'Vuelo', vuelo .data );

            // Almacena los datos en el Estado de la Aplicación del Componente
            this .setState({
                _id: this .props .match .params .id,
                editing: true,
                // Datos del la nota actual (las establecemos para poder mostrarlas en los campos del formulario cuando se edite)
                matricula: vuelo .matricula
            });
        }
    }

    // Método: Establece en el estado del Compomente cuando el valor de uno o más campos del formulario cambian
    onChangeFormFieldsValue = e => {
        console .log( '[', e. target .name, ']: ', e. target .value );   // Obtiene el valor de los atributo 'name' y 'value' de los campos nativos del formulario (DatePicker no es nativo)

        // Almacena los datos en el Estado de la Aplicación del Componente
        this .setState({
            [ e .target .name ]: e .target .value   // Establece valor al atributo seleccionado (userSelected, title, content) del formulario.
        });

    } 

    onSubmit = async ( e ) => {
        e .preventDefault();

        console .log( 'matricula', this .state .matricula );
        
        const nuevoVuelo = {
            matricula: this .state .matricula,
        }

        // Valida estado de edicion
        if( this .state .editing ) {
            // Edita registro existente
            const res = await axios .put( `http://localhost:4000/api/vuelos/${ this .state .id }`, nuevoVuelo );
            console .log( res );
        } else {
            // Crea registro nuevo
            const res = await axios .post( 'http://localhost:4000/api/vuelos', nuevoVuelo );    // Solo cuando crea un registro nuevo
            console .log( res );
        }

        window .location .href = "/vuelos";
    }

    render() {
        return(
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h3>Crear Vuelo</h3>
                        {/** Select User */}
                        <form onSubmit={ this .onSubmit }>
                            <div className="form-group">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="matricula" 
                                    value={ this .state .matricula }
                                    onChange={ this .onChangeFormFieldsValue }
                                    placeholder="Matricula" 
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}