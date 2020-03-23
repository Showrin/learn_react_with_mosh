import React from "react";

const Listgroup = props => {
	const { genres, currentGenre, onGenreChange } = props;
	return (
		<ul className="list-group">
			<li
				className={
					currentGenre === "all"
						? "list-group-item cursor-pointer active"
						: "list-group-item cursor-pointer"
				}
				onClick={() => onGenreChange("all")}
			>
				All Genre
			</li>
			{genres.map(genre => (
				<li
					className={
						genre.name === currentGenre
							? "list-group-item cursor-pointer active"
							: "list-group-item cursor-pointer"
					}
					key={genre._id}
					onClick={() => onGenreChange(genre.name)}
				>
					{genre.name}
				</li>
			))}
		</ul>
	);
};

export default Listgroup;
