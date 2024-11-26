"use client";
import { useEffect } from "react";
import Link from "next/link";

interface CTAButtonProps {
  videoType: string | null;
}

const BrandCTA: React.FC<CTAButtonProps> = ({ videoType }) => {
  useEffect(() => {
    const handleWhatsAppClick = () => {
      if (window.gtag && videoType) {
        console.log("Enviando evento a Google Analytics:", {
          event_category: "Conversion",
          event_label: `WhatsApp Signup - ${videoType}`,
          value: 1,
        });

        window.gtag("event", "click", {
          event_category: "Conversion",
          event_label: `WhatsApp Signup - ${videoType}`,
          value: 1,
        });
      } else {
        console.log(
          "No se pudo enviar el evento. gtag o videoType no están disponibles."
        );
      }
    };

    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach((link) => {
      link.addEventListener("click", handleWhatsAppClick);
    });

    return () => {
      whatsappLinks.forEach((link) => {
        link.removeEventListener("click", handleWhatsAppClick);
      });
    };
  }, [videoType]);

  return (
    <div className="flex justify-center mt-10">
      <Link
        href="https://wa.me/+593997019475?text=Hola%2C%20quiero%20unirme%20al%20reto%20de%20los%205%20d%C3%ADas"
        className="bg-green-500 text-neutral-900 font-semibold py-3 px-8 
        rounded-md text-xl hover:bg-green-600 transition-transform hover:scale-110 transform duración-300 ease-in-out"
      >
        {`QUIERO UNIRME >>`}
      </Link>
    </div>
  );
};

export default BrandCTA;
