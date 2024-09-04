import { useState } from "react";
import { getShoertenerUrl } from "../../api/url";
import { UrlInput } from "../../common/components/UrlInput";
import "../styles/visit.css";
import imgNone from "../../assets/imgs/none.png";

export const Visit = () => {
  const [shortenerUrl, setshortenerUrl] = useState(-1);

  const handleVisit = async (url) => {
    const page = url.split("/").pop();

    var data = await getShoertenerUrl(page);
    if (typeof data.visits == "undefined") {
      setshortenerUrl(-3);
    } else {
      setshortenerUrl(data.visits);
    }
  };
  return (
    <div>
      <div className="visit">
        <UrlInput
          title="Contador de clics"
          textButton="Buscar"
          handleUrl={handleVisit}
        />
        {shortenerUrl == -3 ? (
          <div className="none">
            <img src={imgNone} />
            <p>Url no existe</p>
          </div>
        ) : (
          <div></div>
        )}
        {shortenerUrl > -1 ? (
          <div>
            <h3>Visitas en la pagina</h3>
            <div className="cirlce">
              <p>{shortenerUrl}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
