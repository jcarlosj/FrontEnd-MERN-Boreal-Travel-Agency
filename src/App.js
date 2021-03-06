import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';		// BrowserRouter(Contenedor): Permite crear URLs en nuestra aplicación. Route(Rutas): Permite especificar Rutas
import 'bootstrap/dist/css/bootstrap.min.css';							// Importa Hojas de estilo de Bootstrap
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/footer.component';
import CrearVuelo from './components/vuelos/crear-vuelo.component';
import ListarVuelos from './components/vuelos/lista-vuelos.component';
import VuelosDisponibles from './components/vuelos/vuelos-disponibles.component';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
		<Navigation/>
		<div className="container p-4">
			{/** Creamos las rutas para nuestros componentes (exact: Muestra exactamente el componente que conincide con la ruta, evita que se muestre en las otras rutas) */}
			<Route path="/vuelos/" exact component={ ListarVuelos } />
			<Route path="/vuelos/create" component={ CrearVuelo } />
			<Route path="/vuelos/disponibles" component={ VuelosDisponibles } />
			<Route path="/" exact component={ NotesList } />
			<Route path="/edit/:id" component={ CreateNote } />
			<Route path="/create" component={ CreateNote } />
			<Route path="/user" component={ CreateUser } />
		</div>
		<Footer/>
	</Router>
  );
}

export default App;
