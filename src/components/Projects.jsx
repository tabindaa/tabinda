import Project1 from "../assets/Newflix.png";
import Project2 from "../assets/Image_search.png";
import Project4 from "../assets/portfolio_img.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project1} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">Newflix</h3>
            <p className="text-gray-400 text-sm mt-2">
              UI Clone of Netflix app. HTML, Tailwind CSS, React, Redux,
              Firebase
            </p>
            <div className="flex gap-2 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <Link to="https://newflix-gpt.vercel.app/" target="_blank">
                  Live preview
                </Link>
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project2} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">Image search</h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive HTML/CSS layout for Image search using unsplash API.
              HTML5, Tailwind CSS, React, Unsplash API
            </p>
            <div className="flex gap-2 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <Link
                  to="https://image-search-seven-eta.vercel.app/"
                  target="_blank"
                >
                  Live preview
                </Link>
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="flex flex-col sm:flex-row gap-10 mt-11"> */}
          {/* <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project3} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Landing page for front-end developer
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive HTML/CSS layout for landing page for front-end
              developer. HTML5, CSS3 (SCSS)
            </p>
            <div className="flex gap-2 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Live preview
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div> */}
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project4} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Landing page for front-end developer
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive HTML/CSS layout portfolio project. HTML5, Tailwind CSS,
              React
            </p>
            <div className="flex gap-2 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <Link to="https://tabinda.vercel.app/" target="_blank">
                  Live preview
                </Link>
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
