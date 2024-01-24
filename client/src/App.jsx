import './App.css'
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </Router>
  )
}

export default App
