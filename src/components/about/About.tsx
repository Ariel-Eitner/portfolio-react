import "./About.css"; // Asegúrate de que este import esté presente para aplicar tus estilos

export const About = () => {
  const backendDependencies = {
    frameworks: ["NestJS", "TypeORM", "TypeScript", "Node.JS", "Express.JS"],
    security: ["Jason Web Token (jwt)", "Auth0"],
    utilities: ["Dotenv", "Morgan"],
    database: ["MySQL", "MongoDB", "Azure", "Google Cloud", "Firebase"],
  };

  const backendDevDependencies = {
    testing: ["Jest", "Cypress"],
  };

  const frontendDependencies = {
    frameworksAndLibraries: [
      "Auth0 React",
      "Chat Ui Kit React",
      "Fontawesome",
      "Reduxjs Toolkit",
      "Aos",
      "Axios",
      "I18next",
      "I18next Browser Languagedetector",
      "Js Cookie",
      "React",
      "Quill",
      "Redux",
      "React Toastify",
      "Sass",
      "Sweetalert2",
    ],
    devTools: ["Typescript", "Vite"],
  };

  return (
    <div className="about-section">
      <h2>Acerca de mí</h2>
      <div className="about-content">
        <div className="about-block">
          <h2>¿Quién soy?</h2>
          <p>
            Soy un entusiasta de la tecnología y la programación con una sólida
            base en electrónica y un amor por los sistemas robustos y seguros.
            Desde que comencé mi viaje en el mundo del desarrollo durante la
            pandemia, he encontrado una verdadera pasión en el tratamiento y
            análisis de datos, buscando siempre la elegancia y eficiencia en las
            soluciones que desarrollo.
          </p>
          <p>
            Además de ser un programador multilingüe, hablando tanto inglés como
            español, mi amor por la música impregna mi forma de pensar,
            agregando una capa de creatividad y ritmo a mi lógica de
            programación. Lo que comenzó como un pasatiempo en electrónica se ha
            transformado en una carrera dedicada a la creación de software de
            alta calidad que no solo cumple su función, sino que también protege
            y respeta la privacidad y seguridad de los usuarios.
          </p>
          <p>
            Creo firmemente que un buen sistema no solo está definido por su
            funcionalidad, sino también por su capacidad para resistir el paso
            del tiempo y adaptarse a las cambiantes necesidades del mercado. Con
            cada línea de código, busco aportar claridad, eficiencia y una
            sólida arquitectura que se alinea con los estándares modernos de la
            industria.
          </p>
        </div>

        <div className="about-block stack-block">
          {/* <h2>Stack</h2> */}
          <div className="stack-category">
            <h3>Back-End</h3>
            <h4>Base de Datos</h4>
            <ul>
              {backendDependencies.database.map((lib) => (
                <li key={lib}>{lib}</li>
              ))}
            </ul>
            <h4>Frameworks</h4>
            <ul>
              {backendDependencies.frameworks.map((lib) => (
                <li key={lib}>{lib}</li>
              ))}
            </ul>
            <h4>Seguridad</h4>
            <ul>
              {backendDependencies.security.map((lib) => (
                <li key={lib}>{lib}</li>
              ))}
            </ul>
            <h4>Utilidades</h4>
            <ul>
              {backendDependencies.utilities.map((lib) => (
                <li key={lib}>{lib}</li>
              ))}
            </ul>

            <div>
              <h4>Testing</h4>
              <ul>
                {backendDevDependencies.testing.map((lib) => (
                  <li key={lib}>{lib}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="stack-category">
            <h3>Front-End</h3>

            <h4>Frameworks</h4>
            <ul>
              {frontendDependencies.frameworksAndLibraries.map((lib) => (
                <li key={lib}>{lib}</li>
              ))}
            </ul>
            <h4>Herramientas de Desarrollo</h4>
            <ul>
              {frontendDependencies.devTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
