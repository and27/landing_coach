const BrandFullPage = () => {
  return (
    <>
      <section className="bg-gray-100 py-20  text-black">
        <div className="container max-w-[1140px] mx-auto">
          <h2 className="text-2xl font-bold text-center">
            ¿Qué aprenderás en este reto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-xl font-bold">Día 1</h3>
              <p className="mt-3">
                Aprenderás a crear contenido que conecte con tu audiencia y
                aumente la interacción en tus redes sociales
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-xl font-bold">Día 2</h3>
              <p className="mt-3">
                Descubrirás cómo crear contenido que venda sin ser invasivo y
                aumentar tus ventas
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-xl font-bold">Día 3</h3>
              <p className="mt-3">
                Aprenderás a crear contenido que conecte con tu audiencia y
                aumente la interacción en tus redes sociales
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandFullPage;
