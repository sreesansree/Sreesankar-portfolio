import { useEffect, useState } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import ContactForm from "./components/Contact/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Loading from "./components/Loading/Loading.jsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Banner />
          <About />
          <Projects />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
