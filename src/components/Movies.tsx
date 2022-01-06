import { Button, Input, Typography, List, AutoComplete } from "antd";
import { ChangeEvent, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Movies = () => {
  const [movie, setMovie] = useState("");
  const onMovieInputChange = (value: string) => setMovie(value);

  const [options, setOptions] = useState<object[]>([{}]);
  const { movies, getMovies } = useContext(MovieContext);

  const handleSearch = () => {
    if (movie !== " ") {
      getMovies(movie);
    }
    setTimeout(() => {
      const a: object[] = movies.map((movie) => ({
        value: movie.Title,
      }));
      setOptions(a);
    }, 500);
  };
  return (
    <>
      <div style={{ width: "50%", margin: "1rem auto" }}>
        <Typography.Title level={3}>Enter your favorite movie</Typography.Title>
        <div style={{ display: "flex" }}>
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            style={{ width: "100%" }}
            options={options}
            onChange={onMovieInputChange}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={movies}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button danger size="small">
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta title={item.Title} />
            </List.Item>
          )}
        ></List>
      </div>
    </>
  );
};

export default Movies;
