import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown } from "lucide-react";

const PORTRAIT =
  "https://images.unsplash.com/photo-1571059314690-91e84c43dc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBtYW4lMjBwb3J0cmFpdCUyMG1pbmltYWx8ZW58MXx8fHwxNzczMTQxNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const CLIENTS = [
  "LEGO", "Novo Nordisk", "MAERSK", "Barclays", "Haldor Topsoe", "Colliers",
  "LEGO", "Novo Nordisk", "MAERSK", "Barclays", "Haldor Topsoe", "Colliers",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sub-hero" ref={ref} className="relative h-screen flex flex-col overflow-hidden snap-start snap-always">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B4A]/[0.06] to-[#0B1B4A]/[0.03]"></div>

      {/* Top hairline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left z-10"
        style={{ background: "rgba(11,27,74,0.07)" }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex-1 px-6 md:px-14 py-10 flex flex-col justify-center max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Left side - Typography */}
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block font-['Space_Mono',sans-serif] text-[11px] tracking-[0.45em] text-[#0B1B4A]/50 uppercase mb-8"
            >
              About the practice
            </motion.span>

            {/* Static headline - no animation */}
            <div className="leading-[0.86] font-['Space_Grotesk'] uppercase mb-10">
              {/* Line 1: TURN */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "108%" }}
                  animate={isInView ? { y: "0%" } : { y: "108%" }}
                  transition={{
                    duration: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15,
                  }}
                  style={{
                    fontSize: "clamp(46px, 9vw, 152px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#0B1B4A",
                  }}
                >
                  TURN
                </motion.div>
              </div>

              {/* Line 2: KNOWLEDGE */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "108%" }}
                  animate={isInView ? { y: "0%" } : { y: "108%" }}
                  transition={{
                    duration: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.27,
                  }}
                  style={{
                    fontSize: "clamp(46px, 9vw, 152px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#0B1B4A",
                    paddingLeft: "clamp(16px, 3vw, 58px)",
                  }}
                >
                  KNOWLEDGE
                </motion.div>
              </div>

              {/* Line 3: INTO */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "108%" }}
                  animate={isInView ? { y: "0%" } : { y: "108%" }}
                  transition={{
                    duration: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.39,
                  }}
                  style={{
                    fontSize: "clamp(46px, 9vw, 152px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#0B1B4A",
                    paddingLeft: "clamp(8px, 1.5vw, 17px)",
                  }}
                >
                  INTO
                </motion.div>
              </div>

              {/* Line 4: DESIGN */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "108%" }}
                  animate={isInView ? { y: "0%" } : { y: "108%" }}
                  transition={{
                    duration: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.51,
                  }}
                  style={{
                    fontSize: "clamp(46px, 9vw, 152px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#3350FF",
                    paddingLeft: "clamp(32px, 6vw, 93px)",
                  }}
                >
                  DESIGN
                </motion.div>
              </div>
            </div>

            {/* Description and stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex flex-col gap-6"
            >
              <p
                className="max-w-sm text-[#0B1B4A]/65"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.7 }}
              >
                Designing environments that naturally encourage positive human behaviors through
                evidence-based analysis and applied behavioral science.
              </p>

              <div className="flex items-center gap-8 flex-wrap">
                {[
                  { v: "10+", l: "Years" },
                  { v: "F500", l: "Clients" },
                  { v: "AEC",  l: "Award" },
                ].map(({ v, l }) => (
                  <div key={l} className="flex items-baseline gap-2">
                    <span className="font-['Space_Grotesk',sans-serif] text-xl text-[#0B1B4A]" style={{ fontWeight: 700 }}>{v}</span>
                    <span className="font-['Space_Mono',sans-serif] text-[11px] tracking-widest text-[#0B1B4A]/60 uppercase">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Portrait and tagline */}
          <div className="relative lg:w-[280px] xl:w-[340px] flex-shrink-0">
            {/* Tagline - positioned at top right */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="absolute -top-20 right-0 max-w-[240px] text-right font-['Space_Grotesk',sans-serif] hidden lg:block"
              style={{ fontWeight: 400, fontSize: "1rem", lineHeight: 1.65, color: "rgba(11,27,74,0.65)" }}
            >
              Behavioral science meets design craft — every decision grounded in how people actually think.
            </motion.p>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-6 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #B8C9EE 0%, transparent 70%)", opacity: 0.55 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.65, 0.45] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "2rem 2rem 8rem 2rem", height: "clamp(320px, 48vh, 480px)" }}
              >
                <img
                  src={PORTRAIT}
                  alt="Helgi Hreinn Hjalmarsson"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(20%) contrast(1.05)", transform: "scale(1.04)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.1) 45%, transparent 100%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-['Space_Grotesk',sans-serif] text-sm text-[#0B1B4A]/80" style={{ fontWeight: 600 }}>
                    Helgi Hreinn Hjalmarsson
                  </div>
                  <div className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] text-[#0B1B4A]/60 uppercase mt-0.5">
                    Founder · USER_
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -left-8 top-1/4 rounded-2xl px-4 py-3 hidden lg:block"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(11,27,74,0.12)",
                  boxShadow: "0 8px 32px rgba(11,27,74,0.08)",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-['Space_Grotesk'] text-xl text-[#0B1B4A]" style={{ fontWeight: 700 }}>+40%</div>
                <div className="font-['Space_Mono',sans-serif] text-[11px] tracking-widest text-[#0B1B4A]/60 uppercase">Collab</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom section - Explore button centered */}
      <div className="relative z-10 px-6 md:px-14 pb-10 pt-5 flex items-center justify-center border-t border-[#0B1B4A]/[0.06]">
        <button 
          onClick={() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
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
      </div>

      {/* Client marquee */}
      <div className="relative border-t border-[#0B1B4A]/[0.05] overflow-hidden py-4">
        <motion.div
          className="flex gap-0 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <span key={i} className="flex items-center gap-6 px-6">
              <span className="font-['Space_Grotesk'] text-[11px] tracking-[0.3em] text-[#0B1B4A]/20 uppercase" style={{ fontWeight: 600 }}>
                {client}
              </span>
              <span className="text-[#0B1B4A]/10 text-sm">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}