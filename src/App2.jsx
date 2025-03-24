import { useState, useEffect } from "react"

function App() {
  const [ loading, setLoading ] = useState(true);
  // 3. console.log(json) 이후에 movie 관련 상태를 선언할거야.
  const [ movies, setMovies ] = useState([]);
  // 7. getMovies 함수 작성
  // const getMovies = async() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
  //   .then(response => response.json())
  //   .then(json => {
  //     setMovies(json.data.movies);
  //     setLoading(false);
  //   })
  // }; -> 이렇게 작성하고 바로 8로 넘어가자

  // 8. async - await 적용 방법
  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  } // -> 9. 단계로 넘어감 새 useEffect에 getMovies를 넣을 예정

// 1. 나는 내 컴포넌트를 실행할 때 어떠한 코드를 딱 한 번만 실행시키고 싶어 -> useEffect()
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
  //   .then(response => response.json())
  //   // 2. .then(json => console.log(json)); -> 한 번 실행해보면 Object가 나오는 거 확인됨. -> json.data.movies라는 것도
  //   .then(json => {
  //     setMovies(json.data.movies)
  //     setLoading(false);  // 5. 근데 이제 then 안쓰고 async-await 쓸거임. 수업 했음. -> useEffect 다 주석처리하고 새로 하나 만들자. -> 그리고 새 상태인 getMovies 함수 만들 예정
  //   });
  // }, []);

  // 6. 여기가 새 useEffect 작성 6, 7, 8 다하고 useEffect에 getMovies() 함수 호출할것
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  // 4. console.log(movies); -> 이거 나오는거 확인했으면 -> 배열이 나온다는게 확인됨.
  return (
    <div>
      {/* {loading ? <h1>LOADING...</h1> : null} - 이제 10. 으로 null 부분에 movies.map() 이용할거임  */}
      {loading ? <h1>LOADING...💿</h1> : <div>{movies.map(movie => 
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>{movie.summary}</p>
          <ul>
            {/* {movies.map(movie => <li key={movie.id}>{movie.genres}</li>)} */}
            {movie.genres.map((g) => (<li key={g}>{g}</li>))}
          </ul>
        </div>)
      }</div>}
    </div>
  );
}

export default App;
