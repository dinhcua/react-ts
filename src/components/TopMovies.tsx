import { Checkbox, List } from "antd";
import { useEffect } from "react";
import { useContext } from "react";

import { TopMoviesContext } from "../contexts/TopMovieContext";

export default function TopMovies() {
  //context
  const { topMovies, getTopMovies, toggleWatched } =
    useContext(TopMoviesContext);
  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <>
      <p>
        watched:{" "}
        {topMovies.filter((topMovie) => topMovie.watched === true).length}
      </p>
      <List
        itemLayout="horizontal"
        dataSource={topMovies}
        style={{ width: "50%" }}
        renderItem={(movie) => (
          <List.Item
            actions={[
              <Checkbox
                checked={movie.watched}
                onClick={toggleWatched.bind(this, movie.imdbID)}
              />,
            ]}
          >
            <List.Item.Meta title={movie.Title} />
          </List.Item>
        )}
      ></List>
    </>
  );
}
