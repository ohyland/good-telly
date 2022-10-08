import React, { useEffect, useState } from "react";

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import PopularList from "./PopularList";
import MuiAppBar from "./MuiAppBar";
import { Routes, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    minHeight: "72px",
  },
  navTitle: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: `0px ${theme.spacing(2)}px`,
  },
  main: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  useEffect(() => {
    // fetch movies
    const popular_movie_url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_movie_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });

    // fetch TV shows
    const popular_tv_url =
      "https://api.themoviedb.org/3/tv/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_tv_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularTVShows(result.results);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <MuiAppBar />
      <Container maxWidth="lg" className={classes.main}>
        <Routes>
          <Route
            exact
            path="/movies"
            element={
              <Box mb={2}>
                <PopularList items={popularMovies} listTitle="Popular Movies" />
              </Box>
            }
          ></Route>
          <Route
            exact
            path="/tv-shows"
            element={
              <Box mb={2}>
                <PopularList
                  items={popularTVShows}
                  listTitle="Popular TV Shows"
                />
              </Box>
            }
          ></Route>
          ]
        </Routes>
      </Container>
    </div>
  );
}

export default App;
