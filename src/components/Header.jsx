import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="custom-header">
      <div className="logo">
        <Link to="/">Task App</Link>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Task List</Link></li>
          <li><Link to="/create" onClick={() => setMenuOpen(false)}>Create Task</Link></li>
          <li><DarkModeToggle onClick={() => setMenuOpen(false)}/></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
