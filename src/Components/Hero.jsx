import { useState } from "react";
import "../Style/hero.css";

function changeTextTyped() {
  var element = document.getElementsByClassName("typing-parent")[0];
  var current = element.innerText;
  element.innerText = current === "Video Editor" ? "Animator" : "Video Editor";
  // if (current === "Video Editor") {
  //   element.innerText = "Animator";
  // } else {
  //   element.innerText = "Video Editor";
  // }
}
setInterval(changeTextTyped, 4000);

function Hero() {
  // let [screenWidth, setScreenWidth] = useState(screen.width);

  // function changeImage(val) {
  //   if (val < 950) {
  //     document.getElementsByClassName[0]("hero-image").src =
  //       "/Circular_Image.png";
  //     console.log(9);
  //   }
  // }

  // function changeScreenWidth() {
  //   setScreenWidth(screen.width);
  //   changeImage(screenWidth);
  // }
  // window.addEventListener("resize", changeScreenWidth);

  return (
    <div className="hero">
      <div className="image-container no-hover">
        <picture>
          <source
            media="(max-width:950px)"
            alt="Image"
            srcSet="/Circular.png"
            className="mm"
          />
          <img src="/Aditya_1.png" className="hero-image" />
        </picture>
        <img src="/Curve2.svg" className="hero-curve1" />
      </div>
      <div className="black-child">
        <h1>
          Hello <br />I am <span className="hero-name">Aditya Shedge</span>
        </h1>
        <h1 className="typing-parent">
          <span className="typeing"></span>Video Editor
        </h1>
        {/* <p>
          A passionate video editor and animator with a creative vision that
          brings stories to life.With 1.5 years of experience in the industry, I
          have honed my skills to deliver compelling visual narratives that
          captivate audiences.
        </p> */}
        <div>
          {/* <button> */}
          <a href="/Aditya-2.pdf" download>
            Download CV
          </a>
          {/* </button> */}
        </div>
      </div>
      <div className="yellow-child"></div>
    </div>
  );
}

export default Hero;
