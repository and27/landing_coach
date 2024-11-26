"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface VideoComponentProps {
  setVideoType: (type: string) => void;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ setVideoType }) => {
  const [showLocalVideo, setShowLocalVideo] = useState<boolean>(true);

  useEffect(() => {
    const shouldShowLocalVideo = Math.random() < 0.5;
    console.log("shouldShowLocalVideo", shouldShowLocalVideo);
    setShowLocalVideo(shouldShowLocalVideo);

    const videoType = shouldShowLocalVideo ? "Local Video" : "YouTube Video";
    setVideoType(videoType);

    if (window.gtag) {
      window.gtag("event", "ab_testing", {
        event_category: "A/B Testing",
        event_label: videoType,
        value: shouldShowLocalVideo ? 1 : 0,
      });
    }
  }, [setVideoType]);

  const trackVideoEvent = (action: string, label: string) => {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: "Video",
        event_label: label,
      });
    }
  };

  return (
    <>
      {showLocalVideo ? (
        <video
          className="mt-10 w-full"
          controls
          onPlay={() => trackVideoEvent("play", "Local Video")}
          onPause={() => trackVideoEvent("pause", "Local Video")}
        >
          <source src="/promobrand.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5
        </video>
      ) : (
        <iframe
          className="mt-10 w-full"
          height="500"
          src="https://www.youtube.com/embed/PftkjJ4VCDQ?si=-kYQBBptuieHftlW&rel=0&autoplay=1&controls=0&showinfo=0&loop=0&modestbranding=1"
          frameBorder="0"
          allowFullScreen
          onLoad={() => trackVideoEvent("load", "YouTube Video")}
        ></iframe>
      )}
    </>
  );
};

export default VideoComponent;
