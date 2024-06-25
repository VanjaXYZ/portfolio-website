const DownloadCVButton = () => {
  return (
    <a
      href={"/cv.pdf"}
      download={"vanja_sukurma_cv.pdf"}
      className="bg-white/5 rounded-md p-2"
    >
      Download CV
    </a>
  );
};

export default DownloadCVButton;
