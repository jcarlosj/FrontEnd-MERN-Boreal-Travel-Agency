import React, { Component } from 'react';

import '../App.css';
import Footer from '../components/Foooter';
import '../public/styles/aerolinea.css';
import '../public/styles/pais.css';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Asientos from "../Asientos";
import '../public/styles/backgroundImageStyle.css';
import '../public/styles/gridStandard.css';

// Jquery se importa antes que el spinner
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
require('bootstrap-input-spinner');

const optionsOrigen = [ { value: '1', label: 'Bogotá' } ];
const optionsClase = [ { value: '1', label: 'Economica' }, { value: '2', label: 'Ejecutiva' } ];
const optionsDestino = [
	{ value: '1', label: 'Dinamarca' },
	{ value: '2', label: 'Islandia' },
	{ value: '3', label: 'Suecia' }
];

export class Aerolineas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOptionOrigen: null,
			selectedOptionDestino: null,
			departureDate: new Date(),
			returnDate: new Date(),
			numberAdults: 0,
			numberChild: 0,
			selectClase: null
		};
	}

	componentDidMount() {
		this.actualizarNumeroAdultos(12);
		let configuracion = {
			buttonsClass: 'btn-info'
		};
		$('.input-number-adults').inputSpinner(configuracion);
		$('.input-number-adults').on('change', (event) => {
			this.actualizarNumeroAdultos(event.target.value);
		});
		$('.input-number-child').inputSpinner(configuracion);
		$('.input-number-child').on('change', (event) => {
			this.actualizarNumeroInfantes(event.target.value);
		});
	}
	actualizarOrigen = (origen) => {
		this.setState({
			selectedOptionOrigen: origen
		});
	};
	actualizarDestino = (destino) => {
		this.setState({
			selectedOptionDestino: destino
		});
	};
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
	actualizarNumeroAdultos = (adultos) => {
		this.setState({
			numberAdults: adultos
		});
	};
	actualizarNumeroInfantes = (ninos) => {
		this.setState({ numberChild: ninos });
	};
	actualizaClase = (clase) => {
		this.setState({
			selectClase: clase
		});
	};

	buscarVuelos = async (e) => {
		// Aquí va la logica de envio del formulario
	};

	render() {
		return (
			<div className="App">
				<div className="">
					<div className="background-header-img mainGrid">
						<img
							src={require('../public/imagenes/gotemburgo_alvsborgsbron.jpg')}
							width="100%"
							alt="Boreal main"
						/>
					</div>
				</div>
				<div className="App-Box">
					<section className="container">
						<form onSubmit={this.buscarVuelos}>
							<div className="row">
								<div className="col-12 col-lg-6 mt-3">
									<label>Origen</label>
									<Select options={optionsOrigen} onChange={this.actualizarOrigen} />
								</div>
								<div className="col-12 col-lg-6 mt-3">
									<label>Destino</label>
									<Select options={optionsDestino} onChange={this.actualizarDestino} />
								</div>
								<div className="col-12 col-lg-6 mt-3">
									<label>Fecha de Salida</label>
									<DatePicker
										className=" border rounded w-100"
										selected={this.state.departureDate}
										onChange={this.actualizarFechaSalida}
									/>
								</div>
								<div className="col-12 col-lg-6 mt-3">
									<label>Fecha de Regreso</label>
									<DatePicker
										className=" border rounded w-100"
										selected={this.state.returnDate}
										onChange={this.actualizarFechaRegreso}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-lg-6 col-xl-4 mt-3">
									<label htmlFor="">Adultos</label>
									<input
										className="input-number-adults"
										type="number"
										value="0"
										min="0"
										max="20"
										step="1"
										onChange={this.actualizarAdultos}
									/>
								</div>
								<div className="col-12 col-lg-6 col-xl-4 mt-3">
									<label htmlFor="">Niños</label>
									<input
										className="input-number-child"
										type="number"
										value="0"
										min="0"
										max="20"
										step="1"
										onChange={this.actualizarNumeroInfantes}
									/>
								</div>
								<div className="col-12 col-xl-4 mt-3">
									<label htmlFor="">Clase</label>
									{/* <div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text" id="basic-addon1">
											@
										</span>
									</div> */}
									<Select options={optionsClase} onChange={this.actualizarClase} />
									{/* </div> */}
								</div>
								<div className="col-12  mt-3">
									<button type="submit" className="btn btn-primary btn-block">
										Buscar Vuelos
									</button>
								</div>
							</div>
						</form>
					</section>
				</div>
				<Asientos></Asientos>
				<div className="App-Box">
					{/* Datos de paises */}
					<div className="container">
						<div className="row pais-info">
							<div className="col-lg-7">
								<div className="row">
									<div className="col-12">
										<img
											className="img-fluid"
											src={require('../public/imagenes/islandia1.png')}
											alt="paisaje-islandia"
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<div className="row">
									<div className="col-12 my-4 my-xl-5">
										<h1 className="titulo-pais text-center">Islandia</h1>
									</div>
									<div className="col-12">
										<div className="row row-lateral mt-xl-4 background-pais">
											<div className="col-12 col-sm-6 text-center">
												<img
													className="img-fluid"
													src={require('../public/imagenes/islandia-map.png')}
													alt="mapa-islandia"
												/>
											</div>
											<div className="col-12 col-sm-6 align-self-center">
												<p className="mt-3">
													Superficie: 103.000 Km2 <br />
													Idioma Oficial: Islandés <br />
													Población Total: 357.050 Habitantes <br />
													Moneda: Corona islandesa <br />
													Uso horario: GMT (UTC+0) <br />
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="row">
									<div className="col-12 col-lg-8">
										<p className="mt-3">
											La cultura de Islandia es el conjunto de manifestaciones culturales de la
											sociedad islandesa tanto en la isla como en otros países. Uno de sus pilares
											son las Sagas de los islandeses, que contienen un a importante parte de la
											historia de la isla.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
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
