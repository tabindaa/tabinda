
const ProjectCard = ({project}) => {
  return (
    <div className="border border-gray-500 rounded-md p-5">
      <img src={project} className="w-full h-auto" />
      <h3 className="text-2xl font-semibold mt-8">Furniture store</h3>
      <p className="text-gray-400 text-sm">Responsive HTML/CSS</p>
      <div className="flex mt-12 gap-2">
        <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700">
          Live Preview
        </button>
        <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
          Checkout Github
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
