import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/hotels'>
          <List/>
        </Route>

        <Route path='/hotels/:id'>
          <Hotel/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
