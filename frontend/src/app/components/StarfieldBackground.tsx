import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Star {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number;
  duration: number;
  delay: number;
}

export default function StarfieldBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  const createStar = useCallback((): Star => {
    return {
      id: Math.random(),
      x: Math.random() * 100, // Random X position (0-100%)
      y: Math.random() * 100, // Random Y position (0-100%)
      size: Math.random() * 3 + 1, // Size between 1-4px
      duration: Math.random() * 3 + 2, // Duration between 2-5 seconds
      delay: 0,
    };
  }, []);

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 20 }, () => createStar());
    setStars(initialStars);

    // Spawn new stars at random intervals
    const spawnInterval = setInterval(() => {
      setStars((prevStars) => {
        // Limit to max 30 stars for performance
        if (prevStars.length >= 30) {
          return prevStars;
        }
        return [...prevStars, createStar()];
      });
    }, 400); // Spawn new star every 400ms

    return () => clearInterval(spawnInterval);
  }, [createStar]);

  const removeStar = (id: number) => {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Allow clicks to pass through
        zIndex: 0, // Behind content
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              opacity: 0,
              scale: 0,
              x: `${star.x}vw`,
              y: `${star.y}vh`,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              x: `${star.x + (Math.random() - 0.5) * 10}vw`, // Drift horizontally
              y: `${star.y + (Math.random() - 0.5) * 10}vh`, // Drift vertically
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: star.duration,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1], // Fade in quick, stay, fade out
            }}
            onAnimationComplete={() => removeStar(star.id)}
            style={{
              position: "absolute",
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(157, 135, 204, 0.6) 50%, transparent 100%)`,
              boxShadow: `0 0 ${star.size * 2}px rgba(157, 135, 204, 0.8)`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
