import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github-mark-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-sm">Copyright @ 2024</p>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a href="">
                <img src={LinkedIn} className="w-5" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={Github} className="w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
