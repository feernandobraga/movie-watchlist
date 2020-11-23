import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

const ResultArea = (props) => {
  const queryResults = props.queryResults;
  const [movies, setMovies] = useState([]);

  const handleOnRatingClick = (movieID) => {
    const movieIndex = movies.findIndex((movie) => {
      return movie.imdbID === movieID;
    });

    if (movieIndex >= 0) {
      const updatedMovies = [...movies]; // copy the state
      updatedMovies[movieIndex] = { ...updatedMovies[movieIndex], rating: 10 }; // update the object using its position/index
      setMovies(updatedMovies); //set state
    }
  };

  useEffect(() => {
    if (queryResults) {
      setMovies(queryResults.Search);
    }
  }, [queryResults]);

  return (
    <div style={{ marginTop: 99 }}>
      <Grid container justify="center" spacing={5}>
        {movies.length === 0 ? (
          <Typography>Your movie list is empty. Try searching one...</Typography>
        ) : (
          movies.map((m) => (
            <Grid item key={m.imdbID}>
              <MovieCard movie={m} onRatingClick={handleOnRatingClick} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ResultArea;
