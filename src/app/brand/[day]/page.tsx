"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

type DayInfo = {
  day: string;
  title: string;
  videoUrl: string;
};

const DailyChallenge = () => {
  const params = useParams();
  const { day } = params;
  const [dayInfo, setDayInfo] = useState<DayInfo | null>(null);

  const challengeInfo: {
    [key: string]: { day: string; title: string; videoUrl: string };
  } = {
    day1challenge100: {
      day: "1",
      title: "¿Cuál es tu sueño?",
      videoUrl: "/videos/1.mp4",
    },
    day2challenge200: {
      day: "2",
      title: "¿Cuál es tu propósito?",
      videoUrl: "/videos/2.mp4",
    },
    day3challenge300: {
      day: "3",
      title: "¿Cuál es tu misión?",
      videoUrl: "/videos/3.mp4",
    },
    day4challenge400: {
      day: "4",
      title: "¿Cuál es tu visión?",
      videoUrl: "/videos/4.mp4",
    },
    day5challenge500: {
      day: "5",
      title: "¿Cuál es tu meta?",
      videoUrl: "/videos/5.mp4",
    },
  };

  useEffect(() => {
    console.log(day);
    if (typeof day === "string") {
      const challenge = challengeInfo[day];

      if (challenge) {
        console.log(challenge);
        setDayInfo(challenge);
      }
    }
  }, [day]);

  return (
    <section
      className="bg-emerald-800 text-neutral-100 py-10 px-3 min-h-screen"
      style={{ background: "#000D14" }}
    >
      <div className="container mx-auto max-w-5xl ">
        <div className="flex gap-2 items-center justify-center mb-10">
          <Image
            src="/logo.png"
            alt="Brand 5 Days"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <p className="bg-neutral-800/50 px-5 py-1 rounded-md  leading-snug">
            Transforma tu Marca en 5 Días
          </p>
        </div>
        <div className="grid grid-cols-1 items-center">
          <div className="md:col-span-5">
            <h1 className="text-center mb-2 text-2xl font-semibold uppercase">
              {dayInfo?.title}
            </h1>
          </div>
          <video
            className="mt-10 w-full md:col-span-7 rounded-lg
          "
            src={`${dayInfo?.videoUrl}`}
            controls
          />
        </div>
      </div>
    </section>
  );
};

export default DailyChallenge;
