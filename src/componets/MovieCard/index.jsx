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
  // debugger;

  const handleOnRatingClick = props.onRatingClick;
  const { Poster, Title, Year, imdbID, rating = 0 } = props.movie;
  // const rating = props.movie || null;
  const posterPlaceholder =
    "https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1";

  return (
    <div style={{ maxWidth: 250 }}>
      <Card>
        <CardHeader
          style={{ maxHeight: 72 }}
          avatar={<Avatar>{Title[0]}</Avatar>}
          title={Title}
          subheader={Year}
        />
        <CardMedia
          component="img"
          image={Poster === "N/A" ? posterPlaceholder : Poster}
          title={Title}
          style={{ maxHeight: 300 }}
        />
        <CardContent>
          <Typography>{imdbID}</Typography>
          <Typography>Rating: {rating}</Typography>
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="small"
            color="primary"
            startIcon={<TrackChangesIcon />}
            onClick={() => handleOnRatingClick(imdbID)}
          >
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
