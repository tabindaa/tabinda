const About = () => {
  return (
    <section className="py-8" id="aboutme">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:rounded-full before:absolute before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
            <p>Here Technologies</p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
            <p>Reactore India Pvt Ltd</p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
            <p>M.Tech 2015</p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2013</h3>
            <p>B.Tech 2013</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
