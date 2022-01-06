import { Header } from "antd/lib/layout/layout";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "antd/dist/antd.css";
import Content from "./components/Content";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import MovieContextProvider from "./contexts/MovieContext";
import Movies from "./components/Movies";
import AuthContextProvider from "./contexts/AuthContext";
import TopMovies from "./components/TopMovies";
import TopMoviesContextProvider from "./contexts/TopMovieContext";
function App() {
  return (
    <div>
      <TopMoviesContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <Header>
                <NavBar />
              </Header>
              <ProgressContextProvider>
                <Content />
                <div style={{ display: "flex" }}>
                  <TopMovies />
                  <Movies />
                </div>
              </ProgressContextProvider>
              <ToggleThemeBtn />
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMoviesContextProvider>
    </div>
  );
}

export default App;
