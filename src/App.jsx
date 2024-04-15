import "./App.css";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import About from "./components/About";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import TechologyBar from "./components/TechologyBar";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Intro/Banner section */}
        <Banner />

        {/* Projects section */}
        <section>
          <div className="container m-auto px-4 py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex gap-4 mt-11">
              <ProjectCard project={Project1} />
              <ProjectCard project={Project2} />
              <ProjectCard project={Project3} />
              <ProjectCard project={Project4} />
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <TechologyBar />
        {/* Additional skills section */}
        <Skills />
        {/* About */}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
