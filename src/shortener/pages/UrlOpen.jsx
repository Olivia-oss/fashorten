import { shoertenerOpen } from "../../api/url";
import "../styles/shortener.css";
export const UrlOpen = () => {
  const openUrl = async () => {
    const url = window.location.href;
    const page = url.split("/").pop();
    const data = await shoertenerOpen(page);

    if (page != "undefined") window.location.href = data.url;
  };
  openUrl();

  return <div></div>;
};
