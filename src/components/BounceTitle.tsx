import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function BounceTitle({ text }: { text: string }) {
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const previousPath = useRef("");
  const [animatedLetters, setAnimatedLetters] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      previousPath.current = location.pathname;
      setShouldAnimate(true);
      setAnimatedLetters(new Set());
    } else {
      setShouldAnimate(false);
    }
  }, [location]);

  const triggerNextLetter = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < text.length) {
      setAnimatedLetters(prev => new Set([...prev, nextIndex]));
    }
  };

  useEffect(() => {
    if (shouldAnimate && text.length > 0) {
      setAnimatedLetters(new Set([0]));
    }
  }, [shouldAnimate, text.length]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <span style={{ display: "inline-flex" }}>
      {text.split("").map((char, i) => {
        const isSpace = char === " ";
        const shouldThisLetterAnimate = animatedLetters.has(i);
        
        // First letter falls from above and lands
        if (i === 0) {
          return (
            <motion.span
              key={i}
              style={{
                display: "inline-block",
                whiteSpace: isSpace ? "pre" : undefined,
              }}
              initial={{ y: -80 }}
              animate={shouldThisLetterAnimate ? { y: [-20, 0] } : { y: -80 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                if (shouldThisLetterAnimate) {
                  triggerNextLetter(i);
                }
              }}
            >
              {char}
            </motion.span>
          );
        }
        
        // Subsequent letters: bounce up when triggered
        const bounceHeight = Math.max(15 - (i - 1) * 2, 3);
        
        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              whiteSpace: isSpace ? "pre" : undefined,
            }}
            initial={{ y: 0 }}
            animate={shouldThisLetterAnimate && !isSpace ? {
              y: [0, -bounceHeight, 0]
            } : { y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              times: [0, 0.5, 1],
            }}
            onAnimationComplete={() => {
              if (shouldThisLetterAnimate && !isSpace) {
                // Trigger next letter immediately when this one reaches peak bounce
                setTimeout(() => triggerNextLetter(i), 50);
              }
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
