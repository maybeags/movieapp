import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';

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