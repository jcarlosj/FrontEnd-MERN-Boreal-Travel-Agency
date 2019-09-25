import React, { Component } from 'react';
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
        console.log( 'data', vuelos );

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
                            <th scope="col">Duracion</th>
                            <th scope="col">Aero. Origen</th>
                            <th scope="col">Ciudad. Origen</th>
                            <th scope="col">IATA. Origen</th>
                            <th scope="col">Aero. Destino</th>
                            <th scope="col">Ciudad. Destino</th>
                            <th scope="col">IATA. Destino</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this .state .vuelos .map( vuelo => (
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
                    </tbody>
                </table>

                
            </div>
        )
    }
}