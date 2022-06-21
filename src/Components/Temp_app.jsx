import React, { useState } from "react";
import './Style.css';

const Temp_app = () => {
	const [Temp, setTemp] = useState(10);
	const [color, setColor] = useState('cold');

	const increaseTemperature = () => {
		const newTemp = Temp + 1;
		if (newTemp>15) {
			setColor('hot');
		}
		setTemp(newTemp);
	}

	const decreaseTemperature = () => {
		const newTemp2 = Temp - 1;
		if (newTemp2<15) {
			setColor('cold');
		}
		setTemp(newTemp2)
	}
	
	return (
		<>
		<div className="app">
		<h1>Temperature App</h1>
		<div className={`display ${color}`}>{Temp}&#8451;</div>
		<button className="btn" onClick={()=> increaseTemperature()}>+</button>
		<button className="btn" onClick={()=> decreaseTemperature()}>-</button>
		</div>
		</>
	)
}

export default Temp_app;