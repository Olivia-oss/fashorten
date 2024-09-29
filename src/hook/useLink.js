import { useState } from "react";
import { createShortenerUrl, getShoertenerUrl } from "../api/url";

export const useLink = () => {
  const [shoertenerUrl, setShoertenerUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [visitLink, setVisitLink] = useState(-1);

  const createShortLink = async (link) => {
    try {
      setLoading(true);

      var data = await createShortenerUrl(link);

      setShoertenerUrl(
        "https://leafy-tanuki-49e258.netlify.app/#/" + data.shortUrl
      );
    } catch (error) {
      throw "Ocurrio un error al generar el link";
    } finally {
      setLoading(false);
    }
  };

  const getVisitLink = async (link) => {
    try {
      setLoading(true);
      const page = link.split("/").pop();

      var data = await getShoertenerUrl(page);
      setTimeout(function () {
        console.log("Esta acción se ejecuta después de 3 segundos");
      }, 5000); // 3000 milisegundos = 3 segundos
      console.log(data);

      if (typeof data.visits == "undefined") {
        setVisitLink(-3);
      } else {
        setVisitLink(data.visits);
      }
    } catch (error) {
      throw "Ocurrion un error al obtener los datos";
    } finally {
      setLoading(false);
    }
  };

  return { createShortLink, getVisitLink, shoertenerUrl, loading, visitLink };
};
