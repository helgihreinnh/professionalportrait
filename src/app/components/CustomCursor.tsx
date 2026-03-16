import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onEnter = (e: Event) => {
      setHovered(true);
      const el = e.currentTarget as HTMLElement;
      setLabel(el.dataset.cursor || "");
    };
    const onLeave = () => { setHovered(false); setLabel(""); };

    window.addEventListener("mousemove", onMove);

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovered ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 800, damping: 50 }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed rounded-full z-[9999] mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          border: "1.5px solid",
        }}
        animate={{
          width: hovered ? 72 : 40,
          height: hovered ? 72 : 40,
          borderColor: hovered ? "#3350FF" : "rgba(255,255,255,0.3)",
          backgroundColor: hovered ? "rgba(51,80,255,0.1)" : "rgba(51,80,255,0)",
        }}
        transition={{ duration: 0.25 }}
      >
        {label && (
          <span className="font-['Space_Mono'] text-[7px] tracking-widest text-white/70 uppercase leading-tight text-center px-1">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}