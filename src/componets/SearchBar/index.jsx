import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = (props) => {
  const handleOnSearchClick = props.handleOnSearchClick;
  const isFetching = props.isFetching;

  const [userQuery, setUserQuery] = useState();

  const handleOnChange = (event) => {
    setUserQuery(event.target.value);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        style={{ marginTop: 45 }}
      >
        <Grid item sm={6} xs={12}>
          <TextField
            variant="outlined"
            label="Enter the movie name"
            fullWidth
            size="small"
            onChange={handleOnChange}
          />
        </Grid>

        <Grid item sm={3} xs={12}>
          <Button
            // variant="outlined"
            fullWidth
            // color="primary"
            size="large"
            startIcon={<SearchIcon />}
            disabled={isFetching}
            style={{ backgroundColor: "#ffcc24" }}
            onClick={() => handleOnSearchClick(userQuery)}
          >
            {isFetching ? "Loading..." : "Search"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBar;
