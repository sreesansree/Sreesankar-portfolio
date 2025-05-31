import "./style.css";
import profilePic from "../../assets/sree.jpg";
import Skills from "../../constants/Skills.jsx";
const About = () => {
  return (
    <section className="about" id="About">
      <h2 className="about__header">About me</h2>
      <div className="about__content">
        <img
          src="/assets/sree.jpg"
          alt="Sree Sankar"
          className="about__image"
        />
        <p className="about__description">
          {`Hi, I’m Sreesankar P, A passionate web developer specializing in creating dynamic and responsive web applications. With a strong foundation in React and the MERN stack, I enjoy turning ideas into user-friendly digital solutions. Let’s build something amazing together!`}
        </p>
        <h3>-----------------My Skills-----------------</h3>

        <Skills />
      </div>
    </section>
  );
};

export default About;
