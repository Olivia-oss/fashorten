import { Link } from "react-router-dom";
import "../styles/card.css";
export const Card = ({ title, description, textButton, img, id, path }) => {
  return (
    <div className={id % 2 == 0 ? "card" : "card flex-reverse"}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={path}>
          <button>{textButton}</button>
        </Link>
      </div>
      <img src={img} />
    </div>
  );
};
