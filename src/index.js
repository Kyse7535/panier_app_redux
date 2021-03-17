import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/">
					<Home motif="accueil" />
				</Route>
				<Route exact path="/boutique">
					<Home motif="boutique" />
				</Route>
				<Route exact path="/contact">
					<Home motif="contact" />
				</Route>
				<Route exact path={`/boutique/:titreArticle`}>
					<Home motif="produit" />
				</Route>
				<Route exact path="/a_propos">
					<Home motif="a_propos" />
				</Route>
				<Route exact path="/panier">
					<Home motif="panier" />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
