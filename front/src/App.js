import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Componentes/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >

          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
