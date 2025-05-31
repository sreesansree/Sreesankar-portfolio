import "./style.css";
import profilePic from "../../assets/sreeimage3.jpg";

const Banner = () => {
  return (
    <section id="Home" className="banner">
      <div className="banner-content">
        <img src={profilePic} alt="profile" className="banner__image" />
        <h1 className="banner-title">
          <span className="banner-hai">👋</span>
          <span className="neon-text">Welcome to My Portfolio</span>
        </h1>
        <div className="scroll-container">
          <p className="banner-description scrolling-text">
            {`I'm a passionate web developer dedicated to creating beautiful and
  functional user experiences.`}
          </p>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
