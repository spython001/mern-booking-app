import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/hotels'>
          <List/>
        </Route>

        
      </Switch>
    </Router>
  )
}

export default App
