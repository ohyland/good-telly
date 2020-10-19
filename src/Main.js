import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  card: {
    heigth: "100%",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  sectionTitle: { padding: theme.spacing(2)},
}));

const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

function Main() {

  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  //Fetching Popular Movies
  useEffect(() => {
    const popular_movie_url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_movie_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularMovies(result.results);
      });

    // Fetching Popular TV shows (same as Popular movies above)
    const popular_tv_url =
      "https://api.themoviedb.org/3/tv/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(popular_tv_url)
      .then((response) => response.json())
      .then((result) => {
        setPopularTVShows(result.results);
      });
  }, []);

  return (
    <main>
      {/* Popular Movies */}
      <Box mt={2} pt={2}>
        <Container maxWidth="lg" component={Paper}>
          <Typography
            variant="h5"
            component="h1"
            className={classes.sectionTitle}
          >
            Popular Movies
          </Typography>

          <Grid container spacing={2}>
            {popularMovies.map((movie) => (
              <Grid item xs={12} md={4} lg={3} key={movie.id}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    style={{ height: 500 }}
                    image={`${IMAGE_URL}${movie.poster_path}`}
                    title={movie.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"  backgroundColor="yellow">
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Popular Tv shows */}
      <Box mt={2} pt={2}>
        <Container maxWidth="lg" component={Paper}>
          <Typography
            variant="h5"
            component="h1"
            className={classes.sectionTitle}
          >
            Popular TV Shows
          </Typography>

          <Grid container spacing={2}>
            {popularTVShows.map((show) => (
              <Grid item xs={12} md={4} lg={3} key={show.id}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    style={{ height: 500 }}
                    image={`${IMAGE_URL}${show.poster_path}`}
                    title={show.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"  backgroundColor="yellow">
                      {show.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </main>
    );
}
export default Main;
