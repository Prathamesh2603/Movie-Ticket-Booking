import { dummyShowsData } from "../assets/assets"
import { MovieCard } from "../components/MovieCard"

export const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div>
      <h1>Now Showing</h1>
      {dummyShowsData.map(movie => (
        <MovieCard 
          movie={movie} 
          key={movie._id} 
        />
      ))}
    </div>
  ) : (
    <div>

    </div>
  )
}
