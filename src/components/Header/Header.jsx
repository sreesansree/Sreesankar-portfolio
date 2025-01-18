import { useEffect, useState } from "react";
import "./style.css";
import { FaBars, FaTimes } from "react-icons/fa";
import profilePic from "../../assets/sreesankar.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
    if (isMenuOpen) {
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
          <img src={profilePic} alt="profile" className="header__image" />
          <h3 className="header_name">Sreesankar p</h3>
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
              {section}
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
