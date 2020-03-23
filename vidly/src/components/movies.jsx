import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import Listgroup from "./common/listgroup";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
	state = {
		movies: getMovies(),
		pageSize: 4,
		currentPage: 1,
		currentGenre: "all",
		genres: getGenres(),
		sortingProperty: "title",
		sortingOrder: "asc",
		sortingIcon: <i class="fa fa-caret-up" aria-hidden="true"></i>
	};

	deleteMovieUpdate = id => {
		this.setState(deleteMovie(id));
	};

	getLoveClass = movie => {
		const index = this.state.movies.indexOf(movie);
		let loveClass = "fa fa-lg cursor-pointer ";
		loveClass += this.state.movies[index].loved ? "fa-heart" : "fa-heart-o";
		return loveClass;
	};

	loveStateChange = movie => {
		const newState = { ...this.state };
		const index = newState.movies.indexOf(movie);

		if (newState.movies[index].loved) {
			newState.movies[index].loved = false;
		} else {
			newState.movies[index].loved = true;
		}

		this.setState(newState);
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	handleGenreChange = genre => {
		this.setState({ currentGenre: genre, currentPage: 1 });
	};

	handleSort = sortingParams => {
		this.setState({
			sortingProperty: sortingParams.sortingProperty,
			sortingOrder: sortingParams.sortingOrder,
			sortingIcon:
				sortingParams.sortingOrder === "asc" ? (
					<i class="fa fa-caret-up" aria-hidden="true"></i>
				) : (
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				)
		});
	};

	ascSorting(a, b) {
		if (a > b) return 1;
		else if (a < b) return -1;
		else return 0;
	}

	desSorting(a, b) {
		if (a > b) return -1;
		else if (a < b) return 1;
		else return 0;
	}

	sortingMovies = (movies, sortingProperty, sortingOrder) => {
		if (sortingProperty === "genre.name") {
			if (sortingOrder === "asc") {
				movies.sort((a, b) =>
					this.ascSorting(a.genre.name, b.genre.name)
				);
			} else {
				movies.sort((a, b) =>
					this.desSorting(a.genre.name, b.genre.name)
				);
			}
		} else {
			if (sortingOrder === "asc") {
				movies.sort((a, b) =>
					this.ascSorting(a[sortingProperty], b[sortingProperty])
				);
			} else {
				movies.sort((a, b) =>
					this.desSorting(a[sortingProperty], b[sortingProperty])
				);
			}
		}
	};

	render() {
		const {
			pageSize,
			currentPage,
			currentGenre,
			sortingProperty,
			sortingOrder
		} = this.state;

		const filteredMoviesByGenre =
			currentGenre === "all"
				? this.state.movies
				: this.state.movies.filter(
						movie => movie.genre.name === currentGenre
				  );

		this.sortingMovies(
			filteredMoviesByGenre,
			sortingProperty,
			sortingOrder
		);

		const paginatedMovies = filteredMoviesByGenre.slice(
			currentPage * pageSize - pageSize,
			currentPage * pageSize
		);

		const { length } = filteredMoviesByGenre;

		return this.state.movies.length === 0 ? (
			<div className="my-3">There are no movies in the database</div>
		) : (
			<React.Fragment>
				<div className="my-3">Showing {length} movies in database.</div>
				<div className="row my-5">
					<div className="col-3 container">
						<Listgroup
							genres={this.state.genres}
							currentGenre={this.state.currentGenre}
							onGenreChange={this.handleGenreChange}
						/>
					</div>
					<div className="col-8 offset-1 container">
						<MoviesTable
							length={length}
							paginatedMovies={paginatedMovies}
							loveStateChange={this.loveStateChange}
							getLoveClass={this.getLoveClass}
							deleteMovieUpdate={this.deleteMovieUpdate}
							onSort={this.handleSort}
							sortingProperty={this.state.sortingProperty}
							sortingOrder={this.state.sortingOrder}
							sortingIcon={this.state.sortingIcon}
						/>
					</div>
				</div>
				<Pagination
					totalPage={length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={this.handlePageChange}
				/>
			</React.Fragment>
		);
	}
}

export default Movies;
