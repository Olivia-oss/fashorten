import "../styles/home.css";
import imgPresentation from "../../assets/imgs/presentation.png";
import imgSaved from "../../assets/imgs/saved.png";
import imgOrganizaion from "../../assets/imgs/organization.png";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <section className="presentation">
        <div>
          <h2>La forma más sencilla para compartir Enlaces.</h2>
          <p>Proporciona tu link para generar un enlace corto</p>
          <div>
            <Link to={"/shortener"}>
              <button>Acortador</button>
            </Link>
            <Link to={"/visit"}>
              <button>Vistas</button>
            </Link>
          </div>
        </div>
        <img src={imgPresentation} />
      </section>
      <section>
        <Card
          title="Tus enlaces son seguros con nosotros"
          description="Priorizamos la seguridad de sus enlaces, empleando métodos de cifrado
          avanzados para salvaguardar sus URL. Tus enlaces están protegidos y
          son confiables con nosotros."
          textButton="Probar Acortador"
          img={imgSaved}
          id={1}
          path="/shortener"
        />
        <Card
          title="Gestión eficiente de enlaces"
          description="Potente herramienta que agiliza la organización de enlaces y mejora las capacidades de intercambio. Optimiza su experiencia para compartir enlaces."
          textButton="Probar Analizador"
          img={imgOrganizaion}
          id={2}
          path="/visit"
        />
      </section>
    </div>
  );
};
