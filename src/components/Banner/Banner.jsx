import "./style.css";
const Banner = () => {
  return (
    <section id="Home" className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          <span className="banner-hai">👋</span> Welcome to My Portfolio
        </h1>
        <p className="banner-description">
          {`I'm a passionate web developer dedicated to creating beautiful and
  functional user experiences.`}
        </p>
      
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
