import React, { useEffect, useState } from "react";
// import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

function Main() {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const popular_movie_url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_movie_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });
  }, []);

  return (
    <main>
      <div>
        {popularMovies.map((movie) => (
          <div key={movie.id}>
            <Card>
              <CardMedia
                style={{ height: 500 }}
                image={`${IMAGE_URL}${movie.poster_path}`}
                title={movie.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.overview}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
