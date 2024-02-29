import "./Inicio.css";
import fotoPerfil from "../../assets/7.png";
export const Inicio = () => {
  return (
    <div id="inicio" className="inicio-section">
      <div className="inicio-content">
        <div className="perfil-imagen">
          <img src={fotoPerfil} alt="Ariel Eitner" />
        </div>
        <h1>Ariel Eitner</h1>
        <p>Full-stack Software, Web y App Developer</p>
      </div>
    </div>
  );
};
