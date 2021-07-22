import { BrowserRouter as Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/account">Mon compte</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
