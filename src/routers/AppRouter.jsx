import { Route, Routes } from "react-router-dom";
import { Home } from "../home/pages/Home";
import { Shortener } from "../shortener/pages/Shortener";
import { Visit } from "../visist/pages/Visit";
import { UrlOpen } from "../shortener/pages/UrlOpen";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shortener" element={<Shortener />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/*" element={<UrlOpen />} />
    </Routes>
  );
};
