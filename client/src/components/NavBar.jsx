import '../styles/NavBar.css'

function NavBar() {

  return (
    <nav>
      {/* Burger menu */}
      <svg class="vbp-header-menu-button__svg">
        <line x1="0" y1="50%" x2="100%" y2="50%" class="top" shape-rendering="crispEdges" />
        <line x1="0" y1="50%" x2="100%" y2="50%" class="middle" shape-rendering="crispEdges" />
        <line x1="0" y1="50%" x2="100%" y2="50%" class="bottom" shape-rendering="crispEdges" />
      </svg>

      <h2><a href="/">SFJ </a></h2>

      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/cgu">Mentions Légales</a></li>
      </ul>

      <button className="main-button" onClick={() => window.open("https://discord.gg/pjPhZ9Aahry","_blank")}>Rejoins-Nous</button>
   
    </nav>
  );
}

export default NavBar;
