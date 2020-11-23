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
      // const updatedMovie = movies[movieIndex];
      // updatedMovie.rating = 10;
      // console.log(updatedMovie);
      const updatedMovie = movies[movieIndex];
      updatedMovie.rating = 10;
      const updatedMovies = [...movies];
      updatedMovies[movieIndex] = updatedMovie;
      setMovies(updatedMovies);
      // setMovies(updatedMovies);
      // setMovies([...movies, ])
    }

    // console.log(movieIndex);
    // const updatedMovieRating = movies.find((movie) => {
    //   return movie.imdbID === movieID;
    // });
    // if (updatedMovieRating) {
    //   updatedMovieRating.rating = 10;
    //   setMovies([...movies, {updatedMovieRating }]);
    // }

    // movies.map(movie => {
    //   if (movie.imdbID === movieID){
    //     setMovies([...movie])
    //   }
    // })
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
