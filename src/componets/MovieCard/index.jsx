import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";

const MovieCard = (props) => {
  const { moviePoster, movieTitle, movieYear, movieImdbID } = props;

  return (
    <div style={{ maxWidth: 250 }}>
      <Card>
        <CardHeader
          avatar={<Avatar>T</Avatar>}
          title={movieTitle}
          subheader={movieYear}
        />
        <CardMedia
          component="img"
          image={moviePoster}
          title={movieTitle}
          style={{ maxHeight: 300 }}
        />
        <CardContent>
          <Typography>{movieImdbID}</Typography>
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" color="primary" startIcon={<TrackChangesIcon />}>
            RATING
          </Button>

          <Button size="small" color="secondary" startIcon={<StarIcon />}>
            ADD TO LIST
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MovieCard;
