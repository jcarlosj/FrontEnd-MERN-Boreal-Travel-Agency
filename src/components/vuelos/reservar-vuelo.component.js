import React, { Component } from 'react';
import axios from 'axios';                  // Paquete que permite hacer peticiones HTTP
//import { format } from 'timeago.js';    // Librería para formatear la fecha 

export default class ReservarVuelo extends Component {

    render() {
        return (
            <div className="row" style={{ border: 1 + 'px solid red' }}>
                <form className="" >
                <h3>Reservar Vuelos</h3>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="">Cantidad Pasajeros</label>
                            <select class="custom-select">
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

                <script>
                { /** Example starter JavaScript for disabling form submissions if there are invalid fields */ } 
                    ( function() {
           
                    window.addEventListener('load', function() {
                        // Fetch all the forms we want to apply custom Bootstrap validation styles to
                        var forms = document.getElementsByClassName('needs-validation')
                        // Loop over them and prevent submission
                        var validation = Array.prototype.filter.call(forms, function(form) {
                            console .log( 'validation' ,validation );
                        form.addEventListener('submit', function(event) {
                            if (form.checkValidity() === false) {
                            event.preventDefault()
                            event.stopPropagation()
                            }
                            form.classList.add('was-validated')
                        }, false)
                        })
                    }, false)
                    })()
                </script>
            </div>
        )
    }
}