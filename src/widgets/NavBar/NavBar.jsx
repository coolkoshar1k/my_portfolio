
import './NavBar.css';

const NavBar = ({ darkMode, setDarkMode }) => {
    return (
        <header>
            <nav className="nav container box-shadow">
                <a href="#" className="nav__logo">
                    <span>chekalin alexandr</span>
                </a>
                <div className="nav__links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <nav className="nav__options">
                    <button
                        className="theme-toggle"
                        onClick={() => setDarkMode((prev) => !prev)}
                        aria-label="Toggle Theme"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256"fill={darkMode ? "#000" : "#fff"}  id="my-svg">
  <defs>
    <linearGradient id="gradient1">
      <stop class="stop1" offset="0%" stop-color="#8f66ff"/>
      <stop class="stop2" offset="100%" stop-color="#3d12ff"/>
    </linearGradient>
  </defs>
  
  <g id="group" transform="translate(0,0) scale(1)">
    <path d="M181.333 160.000C181.333 192.000 160.000 213.333 128.000 213.333C96.000 213.333 74.667 192.000 74.667 160.000C74.667 106.980 128.000 42.667 128.000 42.667C128.000 42.667 181.333 106.980 181.333 160.000Z" stroke="#ffffff" stroke-width="14" stroke-linejoin="round" id="primary"/>
  </g>
</svg>
                    </button>
                </nav>
            </nav>
        </header>
    );
};

export default NavBar;
