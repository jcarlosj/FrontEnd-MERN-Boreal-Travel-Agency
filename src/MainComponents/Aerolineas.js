import React, { Component } from 'react'
import '../App.css';
import Background from "../components/Background";
import Footer from "../components/Foooter"; 


export class Aerolineas extends Component {
    render() {
        return (
            <div className="App">
      <div className="App-Box"> <Background/>    </div> 
      <div className="App-Box"> <Footer/>       </div> 
    </div>
        )
    }
}

export default Aerolineas
