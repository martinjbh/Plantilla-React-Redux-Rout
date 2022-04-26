import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Componentes/Home/Home';

import AutoEscritura from './Componentes/AutoEscritura/AutoEscritura';
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
        <Route path="/" exact component={Home}/> 
          <Route path="/proyectos" exact component={AutoEscritura}/> 
        </Switch>
      </div>
    </Router>
  );
}
export default App;
