import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movie, setMovie] = useState([
		{ name: "Harry Potter", lengthOfTime: 120 },
		{ name: "Sherlock Holmes", lengthOfTime: 125 },
		{ name: "Avengers", lengthOfTime: 130 },
		{ name: "Spiderman", lengthOfTime: 124 },
	]);

	const addMovie = (name, lengthOfTime) => {
		setMovie((prevMovie) => [
			...prevMovie,
			{ id: Math.random(), name, lengthOfTime },
		]);
	};

	return (
		<MovieContext.Provider value={{ movie, addMovie }}>
			{children}
		</MovieContext.Provider>
	);
};
