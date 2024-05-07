import Profile from "../assets/fe_dev_img.jpeg";
import DownloadResume from "./DownloadResume";

const Banner = () => {
  return (
    <section>
      <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
        <div>
          <h2 className="font-bold text-4xl">Hello, I&apos;m Tabinda,</h2>
          <div>
            <h2 className="font-bold text-4xl mt-1 gradiant-text">
              frontend developer
            </h2>
          </div>
          <div>
            <p className="mt-4 text-gray-400">
              Software Engineer, seeking to apply competent development skills
              with focus on collaboration, communication, and passion
            </p>
            <DownloadResume />
          </div>
        </div>
        <div className="relative">
          <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
            <img
              src={Profile}
              className="relative z-10 w-[280px] m-auto sm:w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
