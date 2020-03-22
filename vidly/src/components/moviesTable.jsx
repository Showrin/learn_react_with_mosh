import React, { Component } from "react";

const MoviesTable = props => {
	const {
		length,
		paginatedMovies,
		loveStateChange,
		getLoveClass,
		deleteMovieUpdate,
		onSort
	} = props;

	return (
		<table className="table">
			<thead>
				{length === 0 ? (
					""
				) : (
					<tr>
						<th
							className="cursor-pointer"
							scope="col"
							onClick={() => onSort("title")}
						>
							Title
						</th>
						<th
							className="cursor-pointer"
							scope="col"
							onClick={() => onSort("genre.name")}
						>
							Genre
						</th>
						<th
							className="cursor-pointer"
							scope="col"
							onClick={() => onSort("numberInStock")}
						>
							Stock
						</th>
						<th
							className="cursor-pointer"
							scope="col"
							onClick={() => onSort("dailyRentalRate")}
						>
							Rate
						</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				)}
			</thead>

			<tbody>
				{paginatedMovies.map(movie => (
					<tr key={movie._id}>
						<td>{movie.title}</td>
						<td>{movie.genre.name}</td>
						<td>{movie.numberInStock}</td>
						<td>{movie.dailyRentalRate}</td>
						<td>
							<i
								onClick={() => loveStateChange(movie)}
								className={getLoveClass(movie)}
								aria-hidden="true"
							></i>
						</td>
						<td>
							<button
								onClick={() => deleteMovieUpdate(movie._id)}
								className="btn btn-danger"
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MoviesTable;
