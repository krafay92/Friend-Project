import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Season from './components/season';
import Episodes from './components/episode';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/' element={<Login />} />
          <Route path='/home/:seriesId' element={ <Season />} />
          <Route path='/home/:seriesId/:seasonId' element={ <Episodes />} />
          {/* <Route path='/' element={<Register />} /> */}
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
