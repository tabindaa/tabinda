import "./App.css";
import { useEffect, useState } from "react";

import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechologyBar from "./components/TechologyBar";
import ArrowDown from "./assets/arrow-down.svg";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <Header scrolling={scrolling} />

      {/* Intro/Banner section */}
      <main className="relative mt-28">
        <Banner />
        {/* Projects section */}
        <Projects />
        {/* Technoglies section */}
        <TechologyBar />
        {/* Additional skills section */}
        <Skills />
        {/* About */}
        <About />
      </main>
      <Footer />
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
