import "../Style/nav.css";

function Nav() {
  return (
    // <>
    <nav className="navbar">
      <h2 className="nav-logo">Aditya Shedgey</h2>
      <ul className="nav-bar-ul">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Social</a>
        </li>
      </ul>
    </nav>
    // </>
  );
}

export default Nav;
