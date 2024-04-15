const Header = () => {
  return (
    <header>
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-xl">My Portfolio</h1>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
