import React, { Component } from 'react';
import axios from 'axios';                  // Paquete que permite hacer peticiones HTTP

export default class CreateUser extends Component {

    // Define el estado de los datos en el Componente
    state = {
        users: [],
        user_name: ''
    }

    // Escuchará los cambios (Al usar la función flecha evitamos el uso de bind() )
    onChangeUserName = ( data ) => {           // 'data' son los datos que vamos escribiendo en el campo del formulario
        console .log( data .target .value );   // Datos escritos en el campo del formulario Crear Usuario

        // Almacena los datos en el Estado de la Aplicación del Componente
        this .setState({
            user_name: data .target .value
        });
    }

    // Método: Ejecuta acciones una vez el componente a sido montado
    async componentDidMount() {
        /** Realiza petición HTTP al API usando axios */
        const users = await axios .get( 'http://localhost:4000/api/users' );    // Es una operación Asincrona por lo que se puede usar: un callback, una Promesa o en este último caso convertir nuestra funcion en una funcion asincrona. Podria usarse el tipico fetch() de JavaScript Promise, etc
        console .log( users );

        // Almacena los datos en el Estado de la Aplicación del Componente
        this .setState({
            users: users .data
        });
        console .log( 'Estado de usuarios', this .state .users );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear Usuario</h3>
                        <form action="">
                            <div className="form-group">
                                { /** onChange: Método para escuchar por cambios en el elemento */}
                                <input type="text" className="form-control" onChange={ this .onChangeUserName } />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        { this .state .users .map( user => {
                            return ( <li className="list-group-item list-group-item-action" key={ user ._id }>{ user .userName }</li> );
                        }) }
                    </ul>
                </div>
            </div>
        )
    }
}
