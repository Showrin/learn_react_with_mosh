import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Vidly
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to="/movies">
								Movies
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/customers">
								Customers
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/rentals">
								Rentals
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
