import { FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="custom-footer">
    <div className="footer-sections">
      <div className="footer-column">
        <h3>🡅 Task App</h3>
        <ul>
          <li><a href="/">Task List</a></li>
          <li><a href="/create">Create Task</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>🧐 For Task</h3>
        <ul>
          <li><a href="/">Search Task</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>💬 Contact</h3>
        <ul>
          <li><a href="#email">Email us</a></li>
        </ul>
      </div>
    </div>

    <hr />

    <div className="footer-bottom">
      <div className="footer-social">
        <FaInstagram size={30} />
      </div>
      <div className="footer-privacy">
        <a href="#cookies">Cookies</a> | <a href="#privacy">Privacy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
