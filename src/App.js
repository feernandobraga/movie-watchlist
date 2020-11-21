import { Typography } from "@material-ui/core";
import { useState } from "react";
import ResultArea from "./componets/ResultArea";
import SearchBar from "./componets/SearchBar";
import api from "./services/api";

function App() {
  const [queryResults, setQueryResults] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const handleOnSearchClick = (query) => {
    setIsFetching(true);
    api
      .get(`?s=${query}&page=1&r=json`, {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      })
      .then((response) => {
        setIsFetching(false);
        // console.log(response.data);
        setQueryResults(response.data);
      })
      .catch((err) => {
        console.log(err);
        setQueryResults({ Error: "Movie not found" });
      });
  };

  return (
    <div className="App">
      <Typography variant="h2" align="center">
        Movie Tracker
      </Typography>
      <SearchBar handleOnSearchClick={handleOnSearchClick} isFetching={isFetching} />
      <ResultArea queryResults={queryResults} />
    </div>
  );
}

export default App;
