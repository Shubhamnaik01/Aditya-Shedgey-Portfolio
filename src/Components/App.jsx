import "../Style/App.css";
import Nav from "../Components/Nav";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skills";
import Contact from "./Contact";
function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Contact></Contact>
    </>
  );
}

export default App;
