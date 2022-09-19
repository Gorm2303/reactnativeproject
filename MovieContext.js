import React, { useState } from 'react';


const MovieContext = React.createContext({});
const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  return (
    <MovieContext.Provider
      value = {{
        movies,
        setMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;

export { MovieProvider };