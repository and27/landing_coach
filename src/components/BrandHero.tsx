import Image from "next/image";

const BrandHero: React.FC = () => (
  <div className="container mx-auto mt-10 md:mt-20 max-w-4xl flex flex-col items-center">
    <div className="text-center mb-6">
      <Image
        src="/logo.png"
        alt="Brand 5 Days"
        width={50}
        height={50}
        className="rounded-lg md:w-16 md:h-16 mx-auto"
      />
    </div>
    <h1 className="text-4xl md:text-6xl font-semibold text-center mx-auto tracking-tight mb-5 md:mb-10">
      <span className="bg-neutral-800/50 px-5 py-1 rounded-md text-3xl md:text-5xl leading-snug">
        Transforma tu Marca en 5 Días
      </span>
      <br /> Crea Contenido Irresistible que Conecte y Venda
    </h1>
    <p className="text-center mt-5 md:text-xl max-w-3xl mx-auto">
      Únete a nuestro reto y descubre cómo aumentar la interacción y ventas de
      tu marca en solo 5 días.
    </p>
  </div>
);

export default BrandHero;
