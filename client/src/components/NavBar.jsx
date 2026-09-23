import '../styles/NavBar.css'

function NavBar() {

  return (
    <nav>
      <div className='burger'></div>
      <h2><a href="/">SFJ </a></h2>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/cgu">Mentions Légales</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
