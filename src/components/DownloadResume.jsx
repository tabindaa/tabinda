import resume from "../assets/Tabinda_Resume_React.pdf";

const onButtonClick = () => {
  fetch(resume).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);

      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = resume;
      alink.click();
    });
  });
};

const DownloadResume = () => {
  return (
    <button
      className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
      onClick={onButtonClick}
    >
      Download resume
    </button>
  );
};

export default DownloadResume;
