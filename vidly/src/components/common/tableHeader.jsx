import React, { Component } from "react";

class TableHeader extends Component {
	raiseSort = sortingProperty => {
		let sortingOrder = "asc";

		if (sortingProperty === this.props.sortingProperty) {
			sortingOrder = this.props.sortingOrder === "asc" ? "des" : "asc";
		}

		const sortingParams = { sortingProperty, sortingOrder };

		this.props.onSort(sortingParams);
	};

	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map(column => (
						<th
							key={column.path || column.key}
							className="cursor-pointer"
							scope="col"
							onClick={() => this.raiseSort(column.path)}
						>
							{column.label}{" "}
							{this.props.sortingProperty === column.path
								? this.props.sortingIcon
								: ""}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
