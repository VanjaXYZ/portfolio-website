const DownloadCVButton = () => {
  return (
    <a
      href={"/vanja_sukurma_cv.pdf"}
      download={"vanja_sukurma_cv.pdf"}
      className="bg-white/5 rounded-md p-4 uppercase tracking-widest hover:bg-white/10"
    >
      Download CV
    </a>
  );
};

export default DownloadCVButton;
