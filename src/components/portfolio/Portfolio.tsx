import { Carousel } from "react-bootstrap";
import "./Portfolio.css";
import project1Image1 from "../../assets/proyects/scriptAI1.png";
import project1Image2 from "../../assets/proyects/saludOnline1.png";

export const Portfolio = () => {
  const projects = [
    {
      src: project1Image1,
      alt: "Proyecto 1",
      title: "ScriptAI",
      description:
        "Editor de texto con inteligencia artificial para creación de guiones de cine",
      link: "https://scriptai-client.netlify.app/",
    },
    {
      src: project1Image2,
      alt: "Proyecto 2",
      title: "Salud Online",
      description:
        "Salud online es una pagina donde psicólogos y pacientes pueden conectarse a través de todo el mundo. Aún en construcción",
      link: "https://salud-online-client.netlify.app/",
    },
  ];

  return (
    <div className="portfolio-section">
      <h2 className="text-center">Portafolio</h2>
      <h3 style={{ marginBottom: "50px" }} className="text-center">
        Haz click para ver los proyectos
      </h3>
      <Carousel>
        {projects.map((project, idx) => (
          <Carousel.Item key={idx}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block mx-auto"
                style={{ width: "80%", height: "80%" }}
                src={project.src}
                alt={project.alt}
              />
              <Carousel.Caption>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
