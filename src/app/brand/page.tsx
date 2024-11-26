"use client";
import { useState } from "react";
import VideoComponent from "@/components/Video";
import BrandHero from "@/components/BrandHero";
import BrandCTA from "@/components/BrandCTA";
import BrandHeader from "@/components/BrandHeader";

const Brand5DaysPage: React.FC = () => {
  const [videoType, setVideoType] = useState<string | null>(null);

  return (
    <section
      className="bg-emerald-800 text-neutral-100 px-3"
      style={{ background: "#000D14" }}
    >
      <div className="container mx-auto mt-16 max-w-4xl flex flex-col items-center">
        <BrandHeader />
        <BrandHero />
        <BrandCTA videoType={videoType} />
        <VideoComponent setVideoType={setVideoType} />
      </div>
    </section>
  );
};

export default Brand5DaysPage;
