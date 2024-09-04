import { Link } from "react-router-dom";
import "../styles/menu.css";
export const Menu = () => {
  const url = window.location.href;
  const page = url.split("/").pop();

  if (page == "shortener" || page == "visit" || page == "") {
    return (
      <nav className="menu">
        <Link className="link" to={"/"}>
          <h1>FaShorten</h1>
        </Link>
        <ul>
          <Link className="link" to="/shortener">
            Acortador
          </Link>

          <Link className="link" to="/visit">
            Visitas
          </Link>
        </ul>
      </nav>
    );
  } else {
    return <nav></nav>;
  }
};
