import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

interface QuoteLine {
  text: string;
  style: "solid" | "outline" | "accent";
}

const quoteLines: QuoteLine[] = [
  { text: "turn",      style: "solid"  },
  { text: "knowledge", style: "solid"  },
  { text: "into",      style: "solid"  },
  { text: "design",    style: "accent" },
];

const indentMap: Record<number, string> = {
  1: "clamp(28px, 6vw, 120px)",
  2: "clamp(10px, 2vw, 40px)",
  3: "clamp(48px, 9vw, 180px)",
};

const taglineLines = [
  "I analyse.",
  "I strategise.",
  "I design.",
  "I deliver.",
];

export function QuoteBreak() {
  const scrollDown = () => {
    const el = document.getElementById("sub-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col overflow-hidden snap-start snap-always">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B4A]/[0.06] to-[#0B1B4A]/[0.03]" />

      {/* Top hairline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left z-10"
        style={{ background: "rgba(11,27,74,0.07)" }}
      />

      {/* Tagline — stacked right column, right-aligned */}
      <div className="absolute top-24 right-6 md:right-14 z-10 text-right">
        {taglineLines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 + i * 0.12 }}
            className="font-['Space_Grotesk',sans-serif]"
            style={{
              fontWeight: 400,
              fontSize: "clamp(15px, 1.3vw, 20px)",
              lineHeight: 1.9,
              color: "rgba(11,27,74,0.65)",
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Main quote — fills remaining space */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-14 py-10">
        <div className="leading-[0.86]">
          {quoteLines.map((line, i) => (
            <div key={line.text} className="overflow-hidden">
              <motion.span
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.35 + i * 0.11,
                }}
                className="block font-['Space_Grotesk'] uppercase select-none"
                style={{
                  fontSize: "clamp(72px, 14vw, 210px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color:
                    line.style === "solid"
                      ? "#0B1B4A"
                      : line.style === "accent"
                      ? "#3350FF"
                      : "transparent",
                  WebkitTextStroke:
                    line.style === "outline" ? "1.5px rgba(11,27,74,0.15)" : undefined,
                  paddingLeft: indentMap[i] ?? 0,
                }}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 px-6 md:px-14 pb-10 pt-5 flex items-center justify-between border-t border-[#0B1B4A]/[0.06]"
      >
        <span
          className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.35em] uppercase"
          style={{ color: "rgba(11,27,74,0.5)" }}
        >
          USER_ · Behavioral Design Consultancy
        </span>

        <div className="flex items-center gap-8">
          <button onClick={scrollDown} className="flex items-center gap-3 group">
            <span className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] text-[#0B1B4A]/50 uppercase group-hover:text-[#0B1B4A]/70 transition-colors duration-300">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#0B1B4A]/50 group-hover:text-[#0B1B4A]/70 transition-colors duration-300"
            >
              <ArrowDown size={14} />
            </motion.div>
          </button>

          <motion.button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex font-['Space_Mono',sans-serif] text-[11px] tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-300"
            style={{
              background: "rgba(11,27,74,0.06)",
              color: "rgba(11,27,74,0.70)",
              border: "1px solid rgba(11,27,74,0.1)",
            }}
          >
            Let's Talk →
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
