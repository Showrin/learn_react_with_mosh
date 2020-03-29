import React, { Component } from "react";

class MovieDetails extends Component {
	handleSave = () => {
		this.props.history.replace("/movies");
	};

	render() {
		return (
			<div className="my-5">
				<h1>Movie From - {this.props.match.params.id}</h1>
				<button
					className="btn btn-large btn-success my-3"
					onClick={this.handleSave}
				>
					Save
				</button>
			</div>
		);
	}
}

export default MovieDetails;
