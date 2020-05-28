import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button, Card, Row, Col, Alert,Badge } from 'react-bootstrap';
import EchartGenderPie from './components/EchartGenderPie';
import EchartCityBar from './components/EchartCityBar';
import EchartAgeBar from './components/EchartAgeBar';
import EchartOutPie from './components/EchartOutPie';
import img from './img/Covid19.jpg';


function App() {
  return (
    <div className="App">

		<div className = "imgContainer">
			<img className = "image" src={img} alt=""/>
		</div>

		<Card className = "GenderTag">
			<span className = "text1">Gender</span>
		</Card>

		<div className = "EchartGenderPie"> 
			<EchartGenderPie/>
		</div>

		<Card className = "GenderTag">
			<span className = "text1">Outcome</span>
		</Card>
				
		<div className = "EchartOutPie">
			<EchartOutPie/>
		</div>

		<Card className = "GenderTag">
			<span className = "text1">City</span>
		</Card>

		<div className = "EchartCityBar">
			<EchartCityBar/>
		</div>

		<Card className = "GenderTag">
			<span className = "text1">Age Group</span>
		</Card>

		<div className = "EchartAgeBar">
			<EchartAgeBar/>
		</div>

    </div>
  );
}

export default App;
