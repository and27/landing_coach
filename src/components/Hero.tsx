import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <main className="grid grid-cols-1 lg:grid-cols-2 max-w-[1280px] mx-auto h-screen items-center p-5">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            ¿Tu web de coach NO convierte? 7 pasos para atraer clientes ideales{" "}
            <span className="text-red-700 underline bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              (y llenar tu agenda)
            </span>
          </h1>
          <p className="md:text-lg">
            Descarga este checklist gratuito y descubre cómo optimizar tu sitio
            web para generar más contactos, citas y ventas.
          </p>
          {/* <input
            type="text"
            placeholder="Ingresa tu correo"
            className="p-2 border border-gray-300 rounded-md"
          />
          <ButtomLink
            className="uppercase"
            href="https://wa.me/+593997019475?text=Hola%20quiero%20más%20información%20sobre%20el%20taller"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Descargar ahora >>`}
          </ButtomLink> */}
          <div className="ml-embedded" data-form="kRBY4H"></div>
        </div>
        <Image
          src="/checklistImage.jpg"
          width={680}
          height={700}
          alt="Hero"
          className="absolute right-0 top-0 hidden lg:block"
        />
      </main>
    </div>
  );
};

export default Hero;
