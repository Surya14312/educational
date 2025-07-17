import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="main-header">
      <div className="header-content">
        <h1 className="logo-text">The Sanvi’s Abroad Xperts</h1>
        <nav className="nav-links">{/* ...your links */}</nav>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
