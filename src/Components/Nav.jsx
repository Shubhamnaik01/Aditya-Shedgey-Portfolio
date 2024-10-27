import "../Style/nav.css";
import { Link } from "react-router-dom";

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

function navigateAbout(e) {
  document.getElementById("aboutID").scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
  hideSideBar();
}
function navigateSkills(e) {
  document.getElementById("skillID").scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
  hideSideBar();
}
function navigateContact(e) {
  document
    .getElementsByClassName("parent-contact")[0]
    .scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
  hideSideBar();
}
function navigateHome(e) {
  document
    .getElementsByClassName("hero")[0]
    .scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
  hideSideBar();
}
function Nav() {
  return (
    // <>
    <nav className="navbar">
      <h2 className="nav-logo">Aditya Shedge</h2>
      <ul className="nav-bar-ul sidebar">
        <li onClick={hideSideBar}>
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
        <li className="sideBarItems" onClick={navigateHome}>
          <a href="" onClick={navigateHome}>
            Home
          </a>
        </li>
        <li className="sideBarItems">
          <a href="" onClick={navigateAbout}>
            About me
          </a>
        </li>
        <li className="sideBarItems" onClick={navigateSkills}>
          <a href="">Skills</a>
        </li>
        {/* <li className="sideBarItems">
          <a href="">Projects</a>
        </li> */}
        <li className="sideBarItems" onClick={navigateContact}>
          <a href="" onClick={navigateContact}>
            Contact
          </a>
        </li>
      </ul>
      <ul className="nav-bar-ul">
        <li className="hideOnMobile">
          <a href="/" onClick={navigateHome}>
            Home
          </a>
        </li>
        <li className="hideOnMobile">
          <a href="" onClick={navigateAbout}>
            About me
          </a>
        </li>
        <li className="hideOnMobile">
          <a href="" onClick={navigateSkills}>
            Skills
          </a>
        </li>
        {/* <li className="hideOnMobile">
          <a href="">Projects</a>
        </li> */}
        <li className="hideOnMobile">
          <a href="" onClick={navigateContact}>
            Contact
          </a>
        </li>
        <li className="sidebar-button-menu" onClick={showSideBar}>
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
