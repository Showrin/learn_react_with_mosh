import React from "react";
import _ from "lodash";

const Pagination = props => {
	const { totalPage, pageSize, currentPage, onPageChange } = props;
	const pagesCount = totalPage / pageSize;

	if (pagesCount <= 1) return null;

	const pages = _.range(1, pagesCount + 1);

	return (
		<nav>
			<ul className='pagination'>
				{pages.map(page => (
					<li
						className={
							page === currentPage
								? "page-item active"
								: "page-item"
						}
						key={page}>
						<a
							className='page-link'
							onClick={() => onPageChange(page)}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
