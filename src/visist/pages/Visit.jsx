import { UrlInput } from "../../common/components/UrlInput";
import "../styles/visit.css";
import imgNone from "../../assets/imgs/none.png";
import { useLink } from "../../hook/useLink";
import IconLoading from "../../common/components/IconLoading";

export const Visit = () => {
  const { getVisitLink, visitLink, loading } = useLink();

  const handleVisit = async (url) => {
    getVisitLink(url);
  };
  return (
    <div>
      <div className="visit">
        <UrlInput
          title="Contador de clics"
          textButton="Buscar"
          handleUrl={handleVisit}
        />
        {loading ? (
          <IconLoading />
        ) : visitLink == -3 ? (
          <div className="none">
            <img src={imgNone} />
            <p>Url no existe</p>
          </div>
        ) : (
          <div></div>
        )}
        {visitLink > -1 ? (
          <div>
            <h3>Visitas en la pagina</h3>
            <div className="cirlce">
              <p>{visitLink}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
