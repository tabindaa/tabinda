const About = () => {
  return (
    <section className="py-8" id="aboutme">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:rounded-full before:absolute before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
            <p>Here Technologies</p>
            <p className="italic text-xs">
              • Integrated geocoding and routing functionalities from HERE Maps
              into the application, resulting in improved navigation and
              location-based services for users.
            </p>
            <p className="italic text-xs">
              • Contributed in building automation pages for internal teams'
              usage.
            </p>
            <p className="italic text-xs">
              • Migrating legacy Backbone.js application to React
            </p>
          </div>
          <div className="pl-24 mt-14 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
            <p>Reactore India Pvt Ltd</p>
            <p className="italic text-xs">
              • Designing and implementing a low code platform using Angular and
              MaterialUI that empowers businesses to build deploy and manage
              their own enterprise-grade web SaaS applications.
            </p>
            <p className="italic text-xs">
              • Creating own Angular library and publishing for internal usage.
            </p>
            <p className="italic text-xs">
              • Experience in communicating with cross-platform engineers, and
              senior management to collect requirements, describe software
              features, technical designs, and strategy.{" "}
            </p>
          </div>
          <div className="pl-24 mt-14 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
            <p>M.Tech</p>
            <p className="italic text-xs">Aliah University, India</p>
          </div>
          <div className="pl-24 mt-14 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2013</h3>
            <p>B.Tech</p>
            <p className="italic text-xs">Aliah University, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
