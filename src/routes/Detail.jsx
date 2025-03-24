import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  console.log("Detail 렌더링");
  const { id } = useParams();   // 객체의 형태로 받기 때문에 {id}로 작성했음
  // console.log(id);
  const getMovie = async () => {
    const json = await( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }
  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>
}

export default Detail;

// 이거 다 하면 deploy할 예정
// npm i gh-pages
// package.json에 있는 scripts 확인