import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li className={css.item} key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
      : (<p>No reviews available for this movie.</p>)
    </div>
  );
};

export default MovieReviews;