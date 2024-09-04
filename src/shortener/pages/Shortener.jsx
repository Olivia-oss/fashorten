import { useState } from "react";
import { createShortenerUrl } from "../../api/url";
import { UrlInput } from "../../common/components/UrlInput";
import "../styles/shortener.css";
export const Shortener = () => {
  const [shoertenerUrl, setShoertenerUrl] = useState("");
  const handleShortener = async (url) => {
    var data = await createShortenerUrl(url);
    setShoertenerUrl(
      "https://leafy-tanuki-49e258.netlify.app/#/" + data.shortUrl
    );
  };

  const handleOpen = () => {
    window.open(shoertenerUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="shortener">
      <UrlInput
        title="Recortador de URL"
        textButton="Generar"
        handleUrl={handleShortener}
      />
      {shoertenerUrl.length > 0 ? (
        <div>
          <h3>URL generado</h3>
          <p className="pointer" onClick={handleOpen}>
            {shoertenerUrl}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
