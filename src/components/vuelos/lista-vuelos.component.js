import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';                  // Paquete que permite hacer peticiones HTTP
//import { format } from 'timeago.js';    // Librería para formatear la fecha 

export default class ListarVuelos extends Component {

    // Define el estado de los datos en el Componente
    state = {
        vuelos: []
    }

    // Método: Ejecuta acciones una vez el componente a sido montado
    componentDidMount = async () => {
        this.getVuelos();
    }

    getVuelos = async () => {
        const vuelos = await axios.get('http://localhost:4000/api/vuelos');
        console.log('data', vuelos);

        // Almacena los datos en el Estado de la Aplicación del Componente
        this.setState({
            vuelos: vuelos.data
        });
    }

    // Método: Envia datos al API al hacer doble click sobre el elemento de la lista (DELETE)
    deleteVuelo = async (id) => {
        console.log('ID', id);
        await axios.delete(`http://localhost:4000/api/vuelos/${id}`);
        this.getVuelos();       // Obtener las notas
    }

    render() {
        return (
            <div className="row">
                <h3>Lista de Vuelos</h3>
                <table class="table">
                    <caption>Lista de Vuelos</caption>
                    <thead>
                        <tr>
                            <th scope="col">Matricula</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.vuelos.map( vuelo => (
                                <tr>
                                    <th scope="row"> { vuelo .avion .matricula } </th> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                
            </div>
        )
    }
}