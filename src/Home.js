import React, { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";

import PopularList from "./PopularList";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  useEffect(() => {
    const popular_movie_url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=true";

    // fetch Movies
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
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Box mb={2}>
              <PopularList items={popularMovies} listTitle="Popular Movies" />
            </Box>
            <Box mb={2}>
              <PopularList
                items={popularTVShows}
                listTitle="Popular TV Shows"
              />
            </Box>
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Home;
