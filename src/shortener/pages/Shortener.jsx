import { UrlInput } from "../../common/components/UrlInput";
import "../styles/shortener.css";
import { useLink } from "../../hook/useLink";
import IconLoading from "../../common/components/IconLoading";
export const Shortener = () => {
  const { createShortLink, shoertenerUrl, loading } = useLink();

  const handleShortener = async (url) => {
    createShortLink(url);
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
      {loading ? (
        <IconLoading />
      ) : shoertenerUrl.length > 0 ? (
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
