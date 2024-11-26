const Date = () => {
  return (
    <section
      className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8 flex justify-around bg-neutral-100/90 backdrop-blur-lg
       text-neutral-900 mt-[2rem] lg:-mt-[2rem] relative z-10 rounded"
    >
      <h2 className="text-3xl font-semibold text-center sr-only">
        Detalles del curso
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex gap-5 items-center text-neutral-800">
          <p className="text-5xl">📅</p>
          <div>
            <h3 className="text-xl font-semibold mb-1 ">
              Inicia 1 de julio de 2024
            </h3>
            <p>7:30 PM - 9:00 PM (UTC-5)</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-5xl">
            <span role="img" aria-label="alert">
              ⚠️
            </span>
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Quedan pocas plazas libres
            </h3>
            <p>Reserva pronto para asegurar tu lugar en el taller.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Date;
