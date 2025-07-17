import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-container">
          <h1 className="logo-text">The Sanvi’s Abroad Xperts</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/uk">UK</Link>
          <Link to="/europe">Europe</Link>
          <Link to="/japan">Japan</Link>
          <Link to="/singapore">Singapore</Link>
          <Link to="/italy">Italy</Link>
          <Link to="/mbbs">MBBS</Link>
          <Link to="/ourservices">Our Services</Link>
          <Link to="/about">About</Link>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
