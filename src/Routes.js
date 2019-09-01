import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppNav from "./components/AppNav/AppNav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default class Routes extends Component {
	render() {
		return (
			<div>
				<AppNav />
				<BrowserRouter>
					<Switch>
						<Route path="/singin" component={SignIn} />
						<Route path="/singup" component={SignUp} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
