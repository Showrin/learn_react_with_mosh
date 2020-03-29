import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import MovieDetails from "./components/common/movieDetails";
import Navbar from "./components/navbar";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/common/notFound";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<main className="container">
				<Switch>
					<Route path="/movies/:id" component={MovieDetails} />
					<Route path="/movies" component={Movies} />
					<Route path="/customers" component={Customers} />
					<Route path="/rentals" component={Rentals} />
					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/movies" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
