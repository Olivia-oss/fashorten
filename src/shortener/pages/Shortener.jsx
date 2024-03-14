import { useState } from "react";
import { createShortenerUrl } from "../../api/url";
import { UrlInput } from "../../general/components/UrlInput";
import "../styles/shortener.css";
export const Shortener = () => {
  const [shoertenerUrl, setShoertenerUrl] = useState("");
  const handleShortener = async (url) => {
    var data = await createShortenerUrl(url);
    setShoertenerUrl(
      "https://leafy-tanuki-49e258.netlify.app/#/" + data.shortUrl
    );
  };
  return (
    <div className="shortener">
      <UrlInput
        title="Recortador de URL"
        textButton="Generar"
        handleUrl={handleShortener}
      />

      <div className={shoertenerUrl.length > 0 ? "" : "invisible"}>
        <h3>URL generado</h3>
        <p>{shoertenerUrl}</p>
      </div>
    </div>
  );
};
