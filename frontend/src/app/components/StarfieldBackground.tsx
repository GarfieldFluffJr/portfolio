import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Star {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number;
  duration: number;
  delay: number;
  driftX: number; // drift distance in vw
  driftY: number; // drift distance in vh
}

// Star SVG Component
const StarSVG = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#FCFCB3"
      stroke="#000000"
      strokeWidth="0.4"
      strokeLinejoin="round"
    />
  </svg>
);

export default function StarfieldBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  const createStar = useCallback((): Star => {
    return {
      id: Math.random(),
      x: Math.random() * 100, // Random X position (0-100%)
      y: Math.random() * 100, // Random Y position (0-100%)
      size: Math.random() * 20 + 10, // Size between 10-30px for star visibility
      duration: Math.random() * 4 + 3, // Duration between 3-7 seconds (longer lifespan)
      delay: 0,
      driftX: (Math.random() - 0.5) * 30, // -15 to +15vw
      driftY: (Math.random() - 0.5) * 30, // -15 to +15vh
    };
  }, []);

  useEffect(() => {
    // Start with just a few stars for a natural look
    const initialStars = Array.from({ length: 3 }, () => createStar());
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
        zIndex: -1, // Behind all content
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {stars.map((star) => {
          const fadeTime = 0.3; // Fade in/out time in seconds

          return (
            <motion.div
              key={star.id}
              initial={{
                opacity: 0,
                x: `${star.x}vw`,
                y: `${star.y}vh`,
              }}
              animate={{
                opacity: [0, 1, 1, 0], // Fade in, stay visible, fade out
                x: `${star.x + star.driftX}vw`,
                y: `${star.y + star.driftY}vh`,
              }}
              transition={{
                duration: star.duration,
                ease: "linear",
                opacity: {
                  duration: star.duration,
                  times: [0, fadeTime / star.duration, 1 - fadeTime / star.duration, 1],
                  ease: "easeInOut",
                },
              }}
              onAnimationComplete={() => removeStar(star.id)}
              style={{
                position: "absolute",
                filter: `drop-shadow(0 0 ${star.size * 0.3}px rgba(255, 239, 213, 0.25))`,
              }}
            >
              <StarSVG size={star.size} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
