interface InfoCardProps {
  number: string;
  description: string;
}

const InfoCard = ({ number, description }: InfoCardProps) => {
  return (
    <div className="shadow-lg rounded-lg">
      <p className="text-xl font-bold">{number}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default InfoCard;
