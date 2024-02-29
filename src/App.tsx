import "bootstrap/dist/css/bootstrap.min.css";
import { MainNavbar } from "./components/navbar/NavBar";
import { Inicio } from "./components/inicio/Inicio";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contacto } from "./components/contacto/Contacto";

function App() {
  return (
    <>
      <MainNavbar />
      <div id="Inicio">
        <Inicio />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contacto">
        <Contacto />
      </div>
    </>
  );
}

export default App;
