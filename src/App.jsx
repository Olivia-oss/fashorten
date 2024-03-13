import { AppRouter } from "./routers/AppRouter";
import { Menu } from "./general/components/Menu";
import { Footer } from "./general/components/Footer";
export const App = () => {
  return (
    <>
      <Menu />
      <AppRouter />
      <Footer />
    </>
  );
};
