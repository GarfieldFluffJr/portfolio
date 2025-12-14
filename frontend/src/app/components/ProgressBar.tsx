import { useEffect, useRef } from "react";
import styles from "../styles/modules/progressBar.module.css";
import { useLocation } from "react-router-dom";

interface ScrollProgressBarProps {
  height?: number;
  className?: string;
}

export default function ProgressBar({
  className = "",
}: ScrollProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (scrollHeight > 0 && progressBarRef.current) {
        const progressPercentage = (scrollTop / scrollHeight) * 100;
        const clampedProgress = Math.min(100, Math.max(0, progressPercentage));
        // Direct DOM manipulation to avoid React re-renders
        progressBarRef.current.style.width = `${clampedProgress}%`;
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
      <div ref={progressBarRef} className={barClass} style={{ width: "0%" }} />
    </div>
  );
}
