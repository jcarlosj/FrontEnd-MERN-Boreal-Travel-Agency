import React from 'react';
import "../public/styles/formulario-registrate.css";
import '../public/styles/lakeBackground.css';
function Registro() {
    return (
        <div className="contenedor backgroundLakeImage">
            <div className="card">
                <form className="form-horizontal" role="form">
                    <h3>Registrarse</h3>
                    <div className="form-group">
                        <label for="firstName" className="col-sm-3 control-label">Nombres</label>
                        <div className="col-sm-9">
                            <input type="text" id="firstName" placeholder="Nombres" className="form-control" autofocus/>
                            <span className="help-block">Last Name, First Name, eg.: Smith, Harry</span>
                        </div>

                        <div className="form-group">
                            <label for="firstName" className="col-sm-3 control-label">Apellidos</label>
                            <div className="col-sm-9">
                                <input type="Apellidos" id="Apellidos" placeholder="Apellidos" className="form-control" autofocus/>
                        </div>
                    </div>
                

                    <div className="form-group">
                        <label for="birthDate" className="col-sm-3 control-label">Fecha de nacimiento</label>
                        <div className="col-sm-9">
                            <input type="date" id="birthDate" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="country" className="col-sm-3 control-label">Tipo de documento</label>
                        <div className="col-sm-9">
                            <select id="country" className="form-control">
                                <option>Cedula de ciudadania(CC)</option>
                                <option>Tarjeta de identidad(NUIP) (NU)</option>
                                <option>Pasaporte(PS)</option>
                                <option>Nit(NT)</option>
                                <option>Rut(RT)</option>
                                <option>Licencia de conduccion(LI)</option>
                                <option>Nit internacional(NI)</option>
                                <option>Cedula de extranjeria(CE)</option>
                                <option>Tarjeta de extranjeria(TE)</option>
                                <option>Registro Civil(RC)</option>
                                <option>Tarjeta de identidad(TI)</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="email" className="col-sm-3 control-label">Documento</label>
                        <div className="col-sm-9">
                            <input type="Documento" id="Documento" placeholder="Documento" className="form-control"/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label for="email" className="col-sm-3 control-label">Telefono</label>
                        <div className="col-sm-9">
                            <input type="number" id="Documento" placeholder="Telefono" className="form-control"/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label for="email" className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-9">
                            <input type="email" id="email" placeholder="Email" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="email" className="col-sm-3 control-label">Nombre de usuario</label>
                        <div className="col-sm-9">
                            <input type="Nombre de usuario" id="Nombre de usuario" placeholder="Nombre de Usuario" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="password" className="col-sm-3 control-label">Contraseña</label>
                        <div className="col-sm-9">
                            <input type="Contraseña" id="Contraseña" placeholder="Contraseña" className="form-control"/>
                        </div>
                    </div>
                    
                    

                    <div className="form-group">
                        <label for="password" className="col-sm-3 control-label">Repetir Contraseña</label>
                        <div className="col-sm-9">
                            <input type="Repetir Contraseña" id="Repetir Contraseña" placeholder="Repetir Contraseña" className="form-control"/>
                        </div>
                        </div>
                    
                    
                    <div className="form-group">
                        <label className="control-label col-sm-3">Genero</label>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" id="femeninoRadio" value="Female"/>Femenino
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" id="masculinoRadio" value="Male"/>Masculino
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" id="indefinidoRadio" value="Unknown"/>Indefinido
                                    </label>
                                </div>
                            </div>
                        </div>  
                    </div> 
                    
                    </div> 
                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                    </div>
                </form> 
            </div>
    </div> 
    )
}

export default Registro
