"use client";
import { useEffect, useState } from "react";

const TimerBanner = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // const endDate = new Date("2024-07-01T19:00:00Z").getTime();
    // const interval = setInterval(() => {
    //   const now = new Date().getTime();
    //   const distance = endDate - now;
    //   const hours = Math.floor(
    //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //   )
    //     .toString()
    //     .padStart(2, "0");
    //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    //     .toString()
    //     .padStart(2, "0");
    //   const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    //     .toString()
    //     .padStart(2, "0");
    //   setTime(`${hours}:${minutes}:${seconds}`);
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 text-center bg-gradient-to-r from-yellow-400 to-red-500 text-semibold h-10 items-center flex justify-center">
      <p className="text-black text-sm md:text-lg">
        ¡Aprovecha el descuento especial!. Quedan 11 descuentos disponibles.{" "}
      </p>
    </div>
  );
};

export default TimerBanner;
