import ButtomLink from "./ButtonLink";

const Date = () => {
  return (
    <section
      className="max-w-6xl mx-auto py-57 px-4 sm:px-6 lg:py-10 lg:px-8 flex justify-around bg-neutral-100/90 backdrop-blur-lg
       text-neutral-900 mt-[2rem] lg:-mt-[2rem] relative z-10 rounded"
    >
      <h2 className="text-3xl font-semibold text-center sr-only">
        Visibilidad es poder
      </h2>
      <div className="grid grid-cols-1">
        <div
          className="flex flex-col
         gap-1 items-center text-center text-neutral-800"
        >
          <h3 className="text-3xl font-semibold mb-1 ">
            Visibilidad es poder. <br />
            Haz que tu web de coaching destaque
          </h3>
          <p>
            No esperes más. Descarga el checklist y empieza a atraer clientes
            ideales hoy mismo
          </p>
          <ButtomLink
            className="uppercase text-center mt-4"
            href="https://wa.me/+593997019475?text=Hola%20quiero%20más%20información%20sobre%20el%20taller"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar ahora
          </ButtomLink>
        </div>
      </div>
    </section>
  );
};

export default Date;
