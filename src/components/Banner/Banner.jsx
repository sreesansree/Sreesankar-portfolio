import "./style.css";
const Banner = () => {
  return (
    <section id="Home" className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          <span className="banner-hai">👋</span> Welcome to My Portfolio
        </h1>
        <p className="banner-description">
          Im a passionate web developer focused on creating beautiful and
          functional user experiences.
        </p>
        {/* <a href="#projects" className="banner-button">
          View My Work
        </a> */}
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
