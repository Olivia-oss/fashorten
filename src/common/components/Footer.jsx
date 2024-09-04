import "../styles/footer.css";
export const Footer = () => {
  const url = window.location.href;
  const page = url.split("/").pop();
  const urlGitHub = "https://github.com/Olivia-oss/shortener_api";
  const handleOpen = () => {
    window.open(urlGitHub, "_blank", "noopener,noreferrer");
  };

  if (page == "shortener" || page == "visit" || page == "") {
    return (
      <footer className="footer">
        <h2>FaShorten</h2>
        <hr />
        <p onClick={handleOpen} className="pointer">
          Github
        </p>
      </footer>
    );
  } else {
    return <div></div>;
  }
};
