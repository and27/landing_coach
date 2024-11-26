"use client";
import { SetStateAction, useState } from "react";

const topics = [
  {
    title: "1. Inspiración Inicial: El Origen de las Ideas Exitosas",
    description:
      "Descubre cómo surgieron ideas empresariales innovadoras que cambiaron industrias enteras. Explora casos donde la observación de necesidades no satisfechas y la combinación única de conocimientos crearon nuevas categorías de mercado.",
  },
  {
    title: "2. Explorando el Mercado: Descubre y Valida Oportunidades",
    description:
      "Adéntrate en el mercado para entender sus secretos y oportunidades. Aprende técnicas de investigación de mercado para identificar y validar necesidades reales que tu negocio puede satisfacer. Prepárate para fundamentar tu estrategia empresarial con datos concretos y relevantes.",
  },
  {
    title:
      "3. Del Concepto a la Realidad: MVP, Testing y Optimización de Recursos",
    description:
      "Aprende a desarrollar un Producto Mínimo Viable (MVP) poderoso y eficiente. Descubre métodos ágiles para probar tu concepto en el mercado, validando tu idea sin derrochar tiempo ni recursos valiosos. Este paso es crucial para asegurar un inicio sólido para tu negocio.",
  },
  {
    title: "4. El Mapa del Tesoro: Diseño Estratégico del Modelo de Negocio",
    description:
      "Sumérgete en el arte de diseñar modelos de negocio innovadores y estratégicos. Explora técnicas avanzadas para estructurar tu modelo de negocio, creando propuestas de valor irresistibles y redes de distribución eficientes. Utiliza estudios de caso para inspirarte y establecer tu ventaja competitiva.",
  },
  {
    title:
      "5. Aspectos Financieros: Estrategias Inteligentes para el Crecimiento",
    description:
      "Explora estrategias financieras ingeniosas y prácticas para impulsar el crecimiento empresarial. Desde la gestión eficaz de presupuestos hasta la optimización de inversiones estratégicas, aprende a utilizar las finanzas como un motor de éxito para tu negocio desde el principio.",
  },
  {
    title: "6. Seduciendo a Nuestros Clientes: Marketing y Ventas Creativas",
    description:
      "Diseña campañas de marketing innovadoras y estrategias de ventas efectivas para atraer y retener clientes. Aprende a utilizar herramientas avanzadas para captar la atención de tu audiencia y convertir leads en clientes comprometidos. Prepara tu estrategia para destacar en el mercado competitivo actual.",
  },
  {
    title: "7. Lanzamiento e Impacto: Estrategias para Transformar el Mundo",
    description:
      "Enfócate en lanzar tu producto al mercado con una estrategia que no solo genere interés, sino que también establezca un impacto positivo en el mundo. Aprende a comunicar tu propósito empresarial de manera efectiva y a establecer una base sólida para un crecimiento global sostenible.",
  },
];

const Temario = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto py-[4rem] px-4 sm:px-6 lg:py-[8rem] lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold">
              Cómo crear tu propio negocio en 7 pasos
            </h2>
            <p className="mt-3 text-lg">
              Te presentamos el temario completo para que aprendas los pasos
              clave para lanzar y hacer crecer tu propio negocio de manera
              efectiva.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-emerald-800 rounded-lg text-neutral-100 p-5"
                >
                  <div className="flex gap-10 justify-between items-start ">
                    <dt
                      className="leading-6 text-lg font-semibold cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      {topic.title}
                    </dt>
                    <button
                      className="text-neutral-100 m-0"
                      onClick={() => toggleAccordion(index)}
                    >
                      {activeIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  <dd
                    className={`mt-2 text-base md:mr-10 transition-max-height duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-screen"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {topic.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temario;
