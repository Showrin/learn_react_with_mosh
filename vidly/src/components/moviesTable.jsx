import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
	columns = [
		{ path: "title", label: "Title" },
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{
			key: "love",
			content: movie => (
				<i
					onClick={() => this.props.loveStateChange(movie)}
					className={this.props.getLoveClass(movie)}
					aria-hidden='true'></i>
			)
		},
		{
			key: "delete",
			content: movie => (
				<button
					onClick={() => this.props.deleteMovieUpdate(movie._id)}
					className='btn btn-danger'>
					Delete
				</button>
			)
		}
	];

	render() {
		const {
			paginatedMovies,
			onSort,
			sortingProperty,
			sortingOrder,
			sortingIcon
		} = this.props;

		return (
			<Table
				paginatedMovies={paginatedMovies}
				onSort={onSort}
				sortingProperty={sortingProperty}
				sortingOrder={sortingOrder}
				sortingIcon={sortingIcon}
				columns={this.columns}
			/>
		);
	}
}

export default MoviesTable;
