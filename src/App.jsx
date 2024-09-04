import { AppRouter } from "./routers/AppRouter";
import { Menu } from "./common/components/Menu";
import { Footer } from "./common/components/Footer";
export const App = () => {
  return (
    <>
      <Menu />
      <AppRouter />
      <Footer />
    </>
  );
};
