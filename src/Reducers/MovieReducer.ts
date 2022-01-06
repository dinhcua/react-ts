import { MovieType } from "./type";
interface Movie {
  imdbID: string;
  Title: string;
}

export type MovieState = Movie[];

const { GET_MOVIE_SEARCH } = MovieType;
type MovieAction = {
  type: typeof GET_MOVIE_SEARCH;
  payload: Movie[];
};
export const MovieReducer = (state: MovieState, action: MovieAction) => {
  switch (action.type) {
    case GET_MOVIE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
