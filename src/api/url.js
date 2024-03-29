import axios from "axios";

const urlApi = axios.create({
  baseURL: "https://shortenerapi-dev-gfgp.1.us-1.fl0.io/api/v1/urls/",
});

export const shoertenerOpen = async (url) => {
  var res = await urlApi.get("open/" + url);
  if (res.status == 200) {
    return res.data;
  } else {
    throw "Error no se puedo obtener";
  }
};

export const getShoertenerUrl = async (url) => {
  var res = await urlApi.get(url);
  if (res.status == 200) {
    return res.data;
  } else {
    throw "Error no se puedo obtener";
  }
};

export const createShortenerUrl = async (url) => {
  var res = await urlApi.post("", { url: url });
  if (res.status == 201) {
    return res.data;
  } else {
    throw "Error no se puedo generar el url";
  }
};
