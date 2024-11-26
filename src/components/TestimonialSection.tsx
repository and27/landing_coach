import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
      <h2 className="text-3xl mt-[4rem] mb-8 text-center font-extrabold">
        Historias de Éxito
      </h2>
      <p className="mb-10">
        Descubre cómo nuestro taller ha transformado la perspectiva de
        emprendedores como tú:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <TestimonialCard
          name="Mari M."
          image="/ma.jpg"
          description="Inspirador y práctico. El taller me dio las herramientas necesarias para comenzar mi propio negocio de manera efectiva."
        />
        <TestimonialCard
          name="David N."
          image="/da.jpg"
          description="Aprendí más en este taller que en años de intentos por mi cuenta. Ahora veo mi negocio desde una perspectiva mucho más estratégica."
        />
        <TestimonialCard
          name="Juan Pérez"
          image="/heroImage.jpg"
          description="¡Increíble! El taller me dio la confianza y la claridad que necesitaba para lanzar mi emprendimiento. ¡Gracias!"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
