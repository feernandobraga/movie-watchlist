import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

const ResultArea = (props) => {
  const queryResults = props.queryResults;
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (queryResults) {
      setMovies(queryResults.Search);
    }
  }, [queryResults]);

  return (
    <div style={{ marginTop: 99 }}>
      <Grid container justify="center" spacing={5}>
        {!movies ? (
          <Typography>Your movie list is empty. Try searching one...</Typography>
        ) : (
          movies.map((m) => (
            <Grid item>
              <MovieCard
                key={m.imdbID}
                moviePoster={m.Poster}
                movieTitle={m.Title}
                movieYear={m.Year}
                movieImdbID={m.imdbID}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ResultArea;
