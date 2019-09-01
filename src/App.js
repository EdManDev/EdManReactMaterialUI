import React, { Component } from "react";
import EdMan from "./EdMan";
import CardCom from "./CardCom";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello </h1>
				<CardCom />
				<EdMan />
			</div>
		);
	}
}
