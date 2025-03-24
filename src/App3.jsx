import { useState, useEffect } from "react"
import Movie from "./components/Movie.jsx";

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);

  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  } 

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? <h1>LOADING...💿</h1> : 
      <div>
        {movies.map(movie => 
          <Movie 
            key={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}
          />
        )}
      </div>}
    </div>
  );
}

export default App;

// 이까지 작성하면 react-router-dom 사용할 예정. App3.jsx로 옮기고 다시 하자.