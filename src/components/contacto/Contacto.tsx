import linkedInIcon from "../../components/icons/linkedin.svg";
import mailIcon from "../../components/icons/gmail.svg";
import githubIcon from "../../components/icons/github.svg";

type ContactInfo = {
  name: string;
  url: string;
  icon: any;
};

export const Contacto = () => {
  const contactos: ContactInfo[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ariel-eitner-414171225/",
      icon: linkedInIcon,
    },
    {
      name: "Email",
      url: "mailto:ariel.10.e@hotmail.com",
      icon: mailIcon,
    },
    {
      name: "GitHub",
      url: "https://github.com/Ariel-Eitner/",
      icon: githubIcon,
    },
  ];

  // const [copySuccess, setCopySuccess] = useState("");

  // const copyToClipboard = (
  //   e: React.MouseEvent<HTMLButtonElement>,
  //   text: string
  // ) => {
  //   navigator.clipboard.writeText(text);
  //   setCopySuccess("Copiado!");
  //   setTimeout(() => setCopySuccess(""), 2000); // Limpiar mensaje después de 2 segundos
  // };

  return (
    <div>
      <h2 style={{ margin: "50px" }} className="text-center">
        Contacto
      </h2>
      <ul className="list-unstyled d-flex justify-content-center align-items-center">
        {contactos.map((contacto, index) => (
          <li key={index} className="mx-5">
            <a
              href={contacto.url}
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={contacto.icon}
                style={{ width: "20px", height: "20px", marginRight: "7px" }}
                alt={contacto.name}
              />
              {contacto.name}
            </a>
            {/* {contacto.name === "Email" && (
              <button
                onClick={(e) => copyToClipboard(e, contacto.url.substring(7))}
              >
                Copiar Email
              </button>
            )} */}
          </li>
        ))}
      </ul>
      {/* {copySuccess} */}
    </div>
  );
};
