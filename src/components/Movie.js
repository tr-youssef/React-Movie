import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../Config.js";

import Grid from "./Grid";
import Spinner from "./Spinner";

import NoImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb/index.js";

import { useMovieFetch } from "../hooks/useMovieFetch";
import MovieInfo from "./MovieInfo/index.js";
import MovieInfoBar from "./MovieInfoBar/index.js";
import Actor from "./Actor/index.js";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
