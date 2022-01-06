import axios from "axios";
const MovieYears = [
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
];

function MoviesInfo(Title: string) {
  return MovieYears.map((year) =>
    axios.get(
      `http://www.omdbapi.com/?t=${Title}&y=${year}&plot=full&apikey=a9a06025&`
    )
  );
}
export default MoviesInfo;
