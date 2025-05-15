import funnySound from "../public/assets/music/funnyGuyXD.mp3";
import funnyImage from "../public/assets/img/funnyImg.png";
import { useEffect, useRef, useState } from "react";

export const Funny: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Инициализация аудио
    audioRef.current = new Audio(funnySound);
    audioRef.current.volume = 1;
    audioRef.current.loop = true;

    const startExperience = async () => {
      try {
        // Активируем полноэкранный режим
        if (containerRef.current) {
          await containerRef.current.requestFullscreen();
        }

        // Запускаем аудио
        await audioRef.current?.play();
        setIsReady(true);
      } catch (err) {
        console.error("Ошибка запуска:", err);
        setIsReady(false);
      }
    };

    const timer = setTimeout(startExperience, 500);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  return (
    <div className="funny-container" ref={containerRef}>
      <div className={`funny-content ${isReady ? "active" : ""}`}>
        <img src={funnyImage} alt="Funny content" className="funny-image" />

        {!isReady && <div className="loading-message">Загрузка...</div>}

        <button className="stop-button" onClick={handleStop}>
          Остановить
        </button>
      </div>
    </div>
  );
};
