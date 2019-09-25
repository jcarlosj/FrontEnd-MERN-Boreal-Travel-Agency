import React from 'react'
import  "../public/styles/menu-superior.css"
import  "../public/styles/carrusel.css"
import  "../public/styles/vista-hotel-suecia.css"


function Formulario() {
    return (
        <div>
        <div class="container col-xs-12">
            <div class="content">
            <div class="search-box">
            
                <div class="row margin_row">
                <div class="col-xs-12">
                    <div class="date_init col-xs-6">
                    <label for="">Fecha entrada</label>
                    <br />
                    <input type="date" class="form-control date_init date" id="date_init" />
                    </div>
                    <div class="date_end col-xs-6">
                    <label for="">Fecha salida</label>
                    <br />
                    <input type="date" class="form-control date" id="date_end" />
                    </div>
                </div>
                </div>
                <div class="row margin_row">
                <div class="col-xs-12">
                    <div class="col-xs-4">
                    <label for="">Habitaciones</label>
                    <br />
                    <select name='options' class="form-control width_select habitaciones">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                    </select>
                    </div>
                    <div class="col-xs-4">
                    <label for="">Adultos</label>
                    <br />
                    <select name='options' class="form-control width_select">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    </div>
                    <div class="col-xs-4">
                    <label for="">Niños</label>
                    <br/>
                    <select name='options' class="form-control width_select">
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    </div>
                </div>
                </div>
                <br/>
                
                <div class="row button-search">
                  <button class=" btn-primary btn-lg ">Buscar</button>
                </div>
            </div>
            </div>
         </div>
        </div>
    )
}

export default Formulario
