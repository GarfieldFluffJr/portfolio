import { motion } from "framer-motion";
import { memo } from "react";

function BounceTitle({ text }: { text: string }) {
  const totalChars = text.length;

  return (
    <div>
      {text.split("").map((char, index) => {
        const bounceHeight = -30 + (index / totalChars) * 25;
        return (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [0, bounceHeight, 0] }}
            style={{ display: "inline-block", willChange: "transform" }}
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

export default memo(BounceTitle);
