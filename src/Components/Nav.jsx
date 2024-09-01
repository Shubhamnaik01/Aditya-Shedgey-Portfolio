import "../Style/nav.css";

function showSideBar(e) {
  let sidebarButton = document.getElementsByClassName("sidebar")[0];
  sidebarButton.style.display = "flex";
  e.preventDefault();
}
function hideSideBar(e) {
  let sidebarButton = document.getElementsByClassName("sidebar")[0];
  sidebarButton.style.display = "none";
  e.preventDefault();
}

function Nav() {
  return (
    // <>
    <nav className="navbar">
      <h2 className="nav-logo">Aditya Shedge</h2>
      <ul className="nav-bar-ul sidebar" onClick={hideSideBar}>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li className="sideBarItems">
          <a href="">Home</a>
        </li>
        <li className="sideBarItems">
          <a href="">About me</a>
        </li>
        <li className="sideBarItems">
          <a href="">Skills</a>
        </li>
        <li className="sideBarItems">
          <a href="">Projects</a>
        </li>
        <li className="sideBarItems">
          <a href="">Contact</a>
        </li>
      </ul>
      <ul className="nav-bar-ul" onClick={showSideBar}>
        <li className="hideOnMobile">
          <a href="">Home</a>
        </li>
        <li className="hideOnMobile">
          <a href="">About me </a>
        </li>
        <li className="hideOnMobile">
          <a href="">Skills</a>
        </li>
        <li className="hideOnMobile">
          <a href="">Projects</a>
        </li>
        <li className="hideOnMobile">
          <a href="">Contact</a>
        </li>
        <li className="sidebar-button-menu">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    // </>
  );
}

export default Nav;
