import { useState, useEffect } from "react";
import styles from "../styles/modules/progressBar.module.css";
import { useLocation } from "react-router-dom";

interface ScrollProgressBarProps {
  height?: number;
  className?: string;
}

export default function ProgressBar({
  className = "",
}: ScrollProgressBarProps) {
  const [progress, setProgress] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const progressPercentage = (scrollTop / scrollHeight) * 100;
        setProgress(Math.min(100, Math.max(0, progressPercentage)));
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const barClass = `${styles.progressBar}`;

  return (
    <div className={`${styles.progressContainer} ${className}`}>
      <div className={barClass} style={{ width: `${progress}%` }} />
    </div>
  );
}
