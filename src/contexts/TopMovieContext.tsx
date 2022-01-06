import { createContext, ReactNode, useReducer } from "react";
import topMovieInfo from "../api/getTopMovies";
import { TopMovieReducer, TopMovieState } from "../Reducers/TopMoviesReducer";
import { TopMovieActionType } from "../Reducers/type";
const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;
interface TopMoviesContextProps {
  children: ReactNode;
}
interface TopMoviesContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void;
}
const TopMoviesDefault: TopMovieState = [];

export const TopMoviesContext = createContext<TopMoviesContextDefault>({
  topMovies: TopMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: (id: string) => {},
});
const TopMoviesContextProvider = ({ children }: TopMoviesContextProps) => {
  const [topMovies, dispatch] = useReducer(TopMovieReducer, TopMoviesDefault);

  //get top movies from api
  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMovieInfo);
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((topMovie) => ({
        ...topMovie.data,
        watched: false,
      })),
    });
  };

  const toggleWatched = (imdbID: string) =>
    dispatch({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID });

  const topMovieContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };
  return (
    <TopMoviesContext.Provider value={topMovieContextData}>
      {children}
    </TopMoviesContext.Provider>
  );
};

export default TopMoviesContextProvider;
