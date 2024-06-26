const DownloadCVButton = () => {
  return (
    <a
      href={"/cv.pdf"}
      download={"vanja_sukurma_cv.pdf"}
      className="bg-white/5 rounded-md p-4 uppercase tracking-widest"
    >
      Download CV
    </a>
  );
};

export default DownloadCVButton;
