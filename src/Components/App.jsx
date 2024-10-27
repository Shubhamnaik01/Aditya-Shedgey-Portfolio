import "../Style/App.css";
import Nav from "../Components/Nav";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skills";
import Contact from "./Contact";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
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
