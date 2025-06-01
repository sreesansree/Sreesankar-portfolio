import { useEffect, useState } from "react";
import "./style.css";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import sreeImage from "../../assets/sree.jpg";
import resumeFile from "../../assets/SreesankarpResume.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (section) => {
    if (section === "Resume") {
      // skip scrolling for Resume and trigger download
      return;
    }

    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      setActiveSection(false); // Close menu after clicking
    }
  };
  // Add active section tracking based on scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Projects", "Resume", "Contact"];
      const scrollPos = window.scrollY + 100; // Adjust offset for header height

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPos &&
          element.offsetTop + element.offsetHeight > scrollPos
        ) {
          setActiveSection(section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={sreeImage} alt="profile" className="header__image" />
          <h3 className="header_name">
            {" "}
            <a href="#home"> Sreesankar p </a>
          </h3>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          {["Home", "About", "Projects", "Resume", "Contact"].map((section) => (
            <h3
              key={section}
              className={`header__link ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => handleScrollToSection(section)}
            >
              {section === "Resume" ? (
                <a
                  href={resumeFile}
                  download={"Sresankar_Resume.pdf"}
                  className="header_resume-link"
                  onClick={() => setActiveSection("Resume")}
                >
                  Resume <FaDownload className="download-icon" />
                </a>
              ) : (
                section
              )}
            </h3>
          ))}
        </nav>

        <button className="header__menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
    </>
  );
};

export default Header;
