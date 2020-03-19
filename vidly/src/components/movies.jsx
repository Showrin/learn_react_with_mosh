import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
	state = {
		movies: getMovies()
	};

	deleteMovieUpdate(id) {
		this.setState(deleteMovie(id));
	}

	getLoveClass(movie) {
		const index = this.state.movies.indexOf(movie);
		let loveClass = "fa fa-lg cursor-pointer ";
		loveClass += this.state.movies[index].loved ? "fa-heart" : "fa-heart-o";
		return loveClass;
	}

	loveStateChange(movie) {
		const newState = {...this.state};
		const index = newState.movies.indexOf(movie);

		if(newState.movies[index].loved) {
			newState.movies[index].loved = false;
		} else {
			newState.movies[index].loved = true;
		}

		this.setState(newState);
	}

	render() {
		const { length } = this.state.movies;
		return length === 0 ? (
			<div className='my-3'>There are no movies in the database</div>
		) : (
			<React.Fragment>
				<div className='my-3'>Showing {length} movies in database.</div>
				<table className='table'>
					<thead>
						{this.state.movies.length === 0 ? (
							""
						) : (
							<tr>
								<th scope='col'>Title</th>
								<th scope='col'>Genre</th>
								<th scope='col'>Stock</th>
								<th scope='col'>Rate</th>
								<th scope='col'></th>
								<th scope='col'></th>
							</tr>
						)}
					</thead>

					<tbody>
						{this.state.movies.map(movie => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td><i onClick={() => this.loveStateChange(movie)} className={this.getLoveClass(movie)} aria-hidden="true"></i></td>
								<td>
									<button
										onClick={() =>
											this.deleteMovieUpdate(movie._id)
										}
										className='btn btn-danger'>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default Movies;
