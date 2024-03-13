import "../styles/footer.css";
export const Footer = () => {
  const url = window.location.href;
  const page = url.split("/").pop();

  if (page == "shortener" || page == "visit" || page == "") {
    return (
      <footer className="footer">
        <h2>FaShorten</h2>
        <hr />
        <p>Github</p>
      </footer>
    );
  } else {
    return <div></div>;
  }
};
