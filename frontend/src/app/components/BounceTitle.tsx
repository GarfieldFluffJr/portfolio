import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BounceTitle({ text }: { text: string }) {
  const [animationKey, setAnimationKey] = useState(0);
  const totalChars = text.length;

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, []);

  return (
    <div>
      {text.split("").map((char, index) => {
        const bounceHeight = -30 + (index / totalChars) * 25;
        return (
          <motion.span
            key={`${animationKey}-${index}`}
            initial={{ y: 0 }}
            animate={{ y: [0, bounceHeight, 0] }}
            style={{ display: "inline-block" }}
            transition={{
              duration: 0.5,
              delay: index * 0.075,
              ease: "easeInOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </div>
  );
}
