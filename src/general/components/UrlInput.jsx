import { useState } from "react";
import "../styles/url_input.css";
import { validatorURL } from "../../utlis/validators";

export const UrlInput = ({ title, textButton, handleUrl }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSend = () => {
    const urlTrim = url.trim();
    console.log(urlTrim);
    if (validatorURL(urlTrim)) {
      setError(false);
      handleUrl(urlTrim);
    } else {
      setError(true);
    }
  };

  return (
    <div className="url">
      <h2>{title}</h2>
      <div>
        <input
          className={error ? "error" : ""}
          placeholder="Ingresa tu Url"
          onChange={handleChange}
          required
        />

        <p>{error ? "El URL no es valido" : ""}</p>
      </div>

      <button onClick={handleSend}>{textButton}</button>
    </div>
  );
};
