import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./routes/Home.jsx";
import Detail from "./routes/Detail.jsx";

// Switch가 하는 일은 Route를 찾는 것. Route는 URL을 의미함. localhost:5173/moives/123 etc...
// 두 개의 Route를 사용할건데 하나는 Home 화면으로 가기 위함.

// 이제 영화 제목을 누르면 Detail로 넘어가고 싶은데, Movie Component에 <a> 태그 넣으면 되지 않나 그 다음에 href="/movie"하면 되지 않을까란 생각을 했다면 너무 잘한거임. HTML에서 그렇게 했었음.
// 근데 그 방식을 쓰면 페이지 전체가 이동하면서 리렌더링이 일어난다는 점인데, 우리는 리액트를 쓰고 있고 이걸 피하고 싶음. 그 때 나온 개념이 뭐다? Link 컴포넌트다 -> Link 컴포넌트는 브라우저의 새로고침 없이도 다른 페이지로 이동시켜주는 컴포넌트임. -> Movie 컴포넌트에 Link 가져올거임.
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;