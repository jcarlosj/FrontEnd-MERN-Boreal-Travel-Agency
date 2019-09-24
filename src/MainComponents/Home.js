import React from 'react';
import '../App.css';

import Background from "../components/Background"
import ThreeCards from "../components/ThreeCards"
import TextUnderCards from "../components/TextUnderCards"
import Slider from "../components/Slider"
import Foooter from "../components/Foooter"


function Home() {
  return (
    <div className="App">
      <div className="App-Box"> <Background/>    </div> 
      <div className="App-Box"> <ThreeCards/>    </div> 
      <div className="App-Box"> <TextUnderCards/></div> 
      <div className="App-Box"> <Slider/>        </div> 
      <div className="App-Box"> <Foooter/>       </div> 
    </div>
  );
}

export default Home;
