import MovieList from "../components/MovieList";
import RatingFilter from "../components/RatingFilter";
import { useState } from "react";

function Home() {
  const [currentRating, setCurrentRating] = useState(0);
  return (
    <>
      <RatingFilter
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
      />
      <MovieList currentRating={currentRating} />
    </>
  );
}

export default Home;
