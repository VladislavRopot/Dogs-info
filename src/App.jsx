import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import Home from './routes/Home/Home';
import Facts from './routes/Facts/Facts';
import Details from './routes/Details/Details';

function App() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink
              to="/facts"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Facts
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/facts" Component={Facts} />
        <Route path="/details/:id" Component={Details} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
