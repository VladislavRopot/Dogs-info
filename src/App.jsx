import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Facts from './routes/Facts';
import Details from './routes/Details';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/facts">Facts</Link></li>
        </ul>

        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/facts' Component={Facts}/>
          <Route path='/details' Component={Details}/>
        </Routes>
      </nav>
    </BrowserRouter>
  );
}

export default App;
