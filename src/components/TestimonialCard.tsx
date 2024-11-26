import Image from "next/image";
import { Star } from "./Star";

interface TestimonialCardProps {
  name: string;
  image: string;
  description: string;
}

const TestimonialCard = (testimonial: TestimonialCardProps) => {
  return (
    <div className="flex flex-col gap-5 shadow p-7 max-w-[24rem]">
      <p className="text text-left">{testimonial.description}</p>
      <div className="flex gap-5 items-center">
        <Image
          src={testimonial.image}
          alt="emprendedor"
          width={100}
          height={0}
          className="rounded-full object-cover w-14 aspect-square"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-left">
            {testimonial.name}
          </h2>
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star className="ml-[1px]" key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
