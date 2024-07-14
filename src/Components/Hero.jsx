import "../Style/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="image-container">
        <img src="/Aditya_1.png" className="hero-image" />
        <img src="/Curve2.svg" className="hero-curve1" />
      </div>
      <div className="black-child">
        <h1>
          Hello <br />I am <span className="hero-name">Aditya Shedgey</span>
        </h1>
        <p>
          A passionate video editor and animator with a creative vision that
          brings stories to life.With 1.5 years of experience in the industry, I
          have honed my skills to deliver compelling visual narratives that
          captivate audiences.
        </p>
      </div>
      <div className="yellow-child"></div>
    </div>
  );
}

export default Hero;
