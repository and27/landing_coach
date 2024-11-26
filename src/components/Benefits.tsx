interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-4xl mb-4 text-center">{icon}</p>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-lg text-neutral-300 text-center">{description}</p>
    </div>
  );
};

const BenefitsList = [
  {
    title: "Inspira confianza",
    icon: "🌊",
    description:
      "Captura la atención de tus clientes ideales con una web que inspire confianza. ",
  },
  {
    title: "Transforma",
    icon: "🎓",
    description: "Transforma tu web en una máquina de generar clientes.",
  },
  {
    title: "Errores comunes",
    icon: "🛠",
    description:
      "Evita los errores comunes que alejan a tus clientes potenciales",
  },
  {
    title: "Marca lider",
    icon: "🎨",
    description:
      "Posiciona tu marca como líder en tu nicho con una web profesional",
  },
];

const Benefits = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 my-[4rem] md:my-[8rem]">
      <h2 className="text-3xl mb-[6rem] text-center font-extrabold">
        ¿Qué vas a lograr?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {BenefitsList.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
