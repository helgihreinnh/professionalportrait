import { motion } from "motion/react";

interface Blob {
  id: number;
  color: string;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  borderRadius: string;
}

const blobs: Blob[] = [
  {
    id: 1,
    color: "#B8C9EE",
    size: 600,
    x: "-10%",
    y: "-15%",
    duration: 18,
    delay: 0,
    borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
  },
  {
    id: 2,
    color: "#DCE8E6",
    size: 500,
    x: "65%",
    y: "10%",
    duration: 22,
    delay: -6,
    borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%",
  },
  {
    id: 3,
    color: "#D5DEF4",
    size: 450,
    x: "20%",
    y: "55%",
    duration: 20,
    delay: -10,
    borderRadius: "55% 45% 60% 40% / 45% 55% 40% 60%",
  },
  {
    id: 4,
    color: "#C5D5EC",
    size: 380,
    x: "80%",
    y: "60%",
    duration: 25,
    delay: -4,
    borderRadius: "40% 60% 45% 55% / 60% 40% 55% 45%",
  },
  {
    id: 5,
    color: "#DCE8E6",
    size: 300,
    x: "45%",
    y: "-5%",
    duration: 16,
    delay: -8,
    borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%",
  },
];

const morphVariants = [
  "60% 40% 55% 45% / 50% 60% 40% 50%",
  "45% 55% 60% 40% / 60% 40% 55% 45%",
  "55% 45% 40% 60% / 45% 55% 60% 40%",
  "40% 60% 50% 50% / 55% 45% 50% 50%",
  "60% 40% 55% 45% / 50% 60% 40% 50%",
];

export function MorphBackground({ intensity = 0.18 }: { intensity?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: intensity,
            filter: "blur(80px)",
            borderRadius: blob.borderRadius,
          }}
          animate={{
            borderRadius: morphVariants,
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 20, -10, 0],
            scale: [1, 1.08, 0.95, 1.05, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}
    </div>
  );
}
