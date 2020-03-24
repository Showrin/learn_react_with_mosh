import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({
	columns,
	onSort,
	sortingProperty,
	sortingOrder,
	sortingIcon,
	paginatedMovies
}) => {
	return (
		<table className='table'>
			<TableHeader
				columns={columns}
				onSort={onSort}
				sortingProperty={sortingProperty}
				sortingOrder={sortingOrder}
				sortingIcon={sortingIcon}
			/>

			<TableBody data={paginatedMovies} columns={columns} />
		</table>
	);
};

export default Table;
