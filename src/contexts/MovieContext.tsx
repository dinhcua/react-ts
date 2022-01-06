import { createContext, ReactNode, useReducer, useState } from "react";
import MoviesInfo from "../api/searchMovies";
import { MovieState, MovieReducer } from "../Reducers/MovieReducer";
import { MovieType } from "../Reducers/type";
const { GET_MOVIE_SEARCH } = MovieType;
interface MovieContextProps {
  children: ReactNode;
}

interface MovieContextDefault {
  movies: MovieState;
  getMovies: (Title: string) => Promise<void>;
}

const MoviesDefault: MovieState = [];

export const MovieContext = createContext<MovieContextDefault>({
  movies: MoviesDefault,
  getMovies: (Title: string) => Promise.resolve(void 0),
});

const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [movies, dispatch] = useReducer(MovieReducer, MoviesDefault);

  const getMovies = async (Title: string) => {
    const movies = await Promise.all(MoviesInfo(Title));
    dispatch({
      type: GET_MOVIE_SEARCH,
      payload: movies.map((Movie) => ({
        ...Movie.data,
      })),
    });
  };
  const movieContentData = { movies, getMovies };
  return (
    <MovieContext.Provider value={movieContentData}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
