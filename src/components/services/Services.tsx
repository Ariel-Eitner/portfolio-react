import { useState } from "react";
import "./Services.css";
import icon1 from "./1.png";
import icon2 from "./2.png";
import icon3 from "./3.png";
import icon4 from "./4.png";
import icon6 from "./6.png";
import icon7 from "./7.png";

export const Services = () => {
  interface Servicio {
    id: number;
    icon: string;
    title: string;
    description: string;
  }

  const [servicios] = useState<Servicio[]>([
    {
      id: 1,
      icon: icon1,
      title: "Desarrollo Responsive",
      description:
        "Tu sitio se mostrará correctamente en cualquier dispositivo, incluyendo ordenadores de escritorio, tablets y teléfonos móviles.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Diseño Creativo",
      description:
        "Un diseño web atractivo te ayuda a mantener a tus visitantes en tu sitio, que es la cara digital de tu negocio.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Desarrollo Web",
      description:
        "Conozco la importancia del diseño web y puedo ayudarte a crear un sitio que amarás.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Integración con Redes Sociales",
      description:
        "Hay muchas plataformas sociales ahí fuera, y deberías promocionar tu presencia en ellas en tu sitio web.",
    },
    {
      id: 5,
      icon: icon6,
      title: "Rendimiento",
      description:
        "Retener a los usuarios es crucial para mejorar las conversiones. Sitios de alto rendimiento involucran y retienen a los usuarios.",
    },
    {
      id: 6,
      icon: icon7,
      title: "SEO",
      description:
        "Optimizaré tu sitio con una estrategia inteligente de Optimización de Motores de Búsqueda para generar clientes potenciales.",
    },
  ]);

  return (
    <div id="services" className="services-section">
      <h2>Servicios</h2>
      <div className="services-grid">
        {servicios.map((servicio) => (
          <div className="service-item" key={servicio.id}>
            <img className="icon-placeholder" src={servicio.icon} />
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
