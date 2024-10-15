import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        {/* Add more links as necessary */}
      </ul>
    </nav>
  );
}


export default Nav;
