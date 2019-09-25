import React, { Component } from 'react';

import '../App.css';
import Background from '../components/Background';
import Footer from '../components/Foooter';
import '../public/styles/aerolinea.css';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const optionsOrigen = [ { value: '1', label: 'Bogotá' } ];

const optionsDestino = [
	{ value: '1', label: 'Dinamarca' },
	{ value: '2', label: 'Islandia' },
	{ value: '3', label: 'Suecia' }
];

export class Aerolineas extends Component {
	state = {
		selectedOptionOrigen: null,
		departureDate: new Date(),	
		returnDate: new Date(),
		numberAdults: new Date(),
		numberChild: new Date(),

	};
	actualizarOrigen = (origen) =>{
		this.setState({
			selectedOptionOrigen: origen
		})
	}
	actualizarFechaSalida = (date) => {
		this.setState({
			departureDate: date
		});
	};
	actualizarFechaRegreso = (date) => {
		this.setState({
			returnDate: date
		});
	};
	actualizarNumeroAdultos = function (e) {
		/*
		 * The value is expected as string to avoid warnings 
		 * append an empty string to your possibly numberic value
		*/
		this.setState({numberAdults: e.value + ''});
	};
	actualizarNumeroInfantes = function (e) {
		/*
		 * The value is expected as string to avoid warnings 
		 * append an empty string to your possibly numberic value
		*/
		this.setState({numberChild: e.value + ''});
	};
	render() {
		return (
			<div className="App">
				<div className="App-Box">
					<Background />
				</div>
				<div className="App-Box">
					<section className="container">
						<div className="row">
							<div className="col-12 mt-3">
								<label>Origen</label>
								<Select options={optionsOrigen} />
							</div>
							<div className="col-12 mt-3">
								<label>Destino</label>
								<Select options={optionsDestino} />
							</div>
							<div className="col-12 mt-3">
								<label>Fecha de Salida</label>
								<DatePicker className=" border rounded w-100" selected={this.state.departureDate} onChange={this.actualizarFechaSalida} />
							</div>
							<div className="col-12 mt-3">
								<label>Fecha de Regreso</label>
								<DatePicker  className=" border rounded w-100" selected={this.state.returnDate} onChange={this.actualizarFechaRegreso} />
							</div>
						</div>
						<div className="row">
							<div className="col-12 mt-3">
							<label htmlFor="">Adultos</label>
							
							</div>
							{/* <div className="col-">
								<select>
									<option>Economica</option>
									<option>Ejecutiva</option>
								</select>
							</div> */}

						</div>
					</section>
				</div>

				<div className="App-Box">
					{' '}
					<Footer />{' '}
				</div>
			</div>
		);
	}
}

export default Aerolineas;
