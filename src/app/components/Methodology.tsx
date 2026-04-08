import { motion } from "motion/react";
import { useState } from "react";
import { PageContainer } from "./layouts/PageContainer";

const phases = [
  {
    num: "01",
    title: "Behavioral Intelligence Gathering",
    label: "Observe",
    description:
      "Ethnographic observation and behavioral mapping combined with quantitative data collection via occupancy sensors and usage analytics.",
    methods: ["Ethnographic Observation", "Sensor Data", "Behavioral Mapping", "Cultural Analysis"],
    color: "#3350FF",
    bg: "#D5DEF4",
  },
  {
    num: "02",
    title: "Strategic Behavioral Design",
    label: "Design",
    description:
      "Evidence-based spatial intervention design with cross-functional collaboration. Integration of behavioral psychology principles with architectural solutions.",
    methods: ["Spatial Intervention", "Behavioral Psychology", "Iterative Testing", "Co-design"],
    color: "#3350FF",
    bg: "#B8C9EE",
  },
  {
    num: "03",
    title: "Solution Deployment & Activation",
    label: "Implement",
    description:
      "Rolling out behavioral interventions with stakeholder engagement and change management. Phased implementation with real-time monitoring and adjustment protocols.",
    methods: ["Change Management", "Phased Rollout", "Stakeholder Training", "Live Monitoring"],
    color: "#3350FF",
    bg: "#DCE8E6",
  },
  {
    num: "04",
    title: "Impact Evaluation & Learning",
    label: "Measure",
    description:
      "Post-occupancy behavioral assessment and documentation of behavioral change outcomes. Continuous optimization based on observed patterns.",
    methods: ["Post-occupancy Eval", "Behavioral Metrics", "Continuous Optimization", "Knowledge Transfer"],
    color: "#3350FF",
    bg: "#C5D5EC",
  },
];

export function Methodology() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const radius = 210;

  const getPosition = (index: number) => {
    const angle = (270 + index * 90) * (Math.PI / 180);
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <section
      id="methodology"
      className="relative min-h-screen flex flex-col justify-center py-16 md:py-20 overflow-hidden snap-start snap-always"
    >
      <PageContainer>
        {/* Section header — left-aligned, shifted toward top */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block font-['Space_Mono',sans-serif] text-[11px] tracking-[0.45em] text-[#0B1B4A]/40 uppercase mb-4">
              03 — Methodology
            </span>
            <h2
              className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A] leading-tight tracking-tight mb-4"
              style={{ fontWeight: 700, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95 }}
            >
              How I Work
            </h2>
            <p
              className="max-w-2xl leading-relaxed text-[#0B1B4A]"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "1.05rem" }}
            >
              Every project — whether it's a workplace, an app, or a strategy — goes
              through the same four phases. It's not a model. It's a way of thinking.
            </p>
          </motion.div>
        </div>

        {/* Two-column layout: diagram (left 2/3) + detail panel (right 1/3) */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Diagram column — diagram centred within its space */}
          <div className="flex-1 flex items-center justify-center">

            {/* Desktop circular diagram */}
            <div className="hidden lg:block relative" style={{ width: "560px", height: "560px" }}>
              {/* Centre label */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
              >
                <div
                  className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A] mb-1"
                  style={{ fontWeight: 700, fontSize: "17px" }}
                >
                  Continuous
                </div>
                <div className="font-['Space_Mono',sans-serif] text-[10px] tracking-[0.3em] text-[#0B1B4A]/60 uppercase">
                  Process
                </div>
              </motion.div>

              {/* Dashed circle path */}
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                width="520"
                height="520"
                viewBox="0 0 520 520"
              >
                <motion.circle
                  cx="260"
                  cy="260"
                  r="210"
                  fill="none"
                  stroke="rgba(11,27,74,0.06)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
                />
              </svg>

              {/* Phase nodes */}
              {phases.map((phase, i) => {
                const pos = getPosition(i);
                return (
                  <motion.div
                    key={phase.num}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute cursor-pointer group"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: `${pos.x}px`,
                      marginTop: `${pos.y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setActivePhase(i)}
                    onMouseLeave={() => setActivePhase(null)}
                  >
                    <motion.div
                      className="relative rounded-full flex items-center justify-center"
                      style={{
                        width: "112px",
                        height: "112px",
                        background: activePhase === i ? phase.bg : "white",
                        border: `3px solid ${activePhase === i ? phase.color : "rgba(11,27,74,0.12)"}`,
                        boxShadow:
                          activePhase === i
                            ? "0 12px 40px rgba(51,80,255,0.15)"
                            : "0 4px 20px rgba(11,27,74,0.06)",
                      }}
                      animate={{ scale: activePhase === i ? 1.08 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Large ghost number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A]"
                          style={{
                            fontWeight: 700,
                            fontSize: "46px",
                            opacity: activePhase === i ? 0.15 : 0.08,
                            transition: "opacity 0.3s",
                          }}
                        >
                          {phase.num}
                        </span>
                      </div>

                      {/* Label badge */}
                      <div
                        className="relative z-10 rounded-full px-3 py-1.5"
                        style={{
                          background:
                            activePhase === i ? "rgba(255,255,255,0.9)" : phase.bg,
                          border: activePhase === i ? "1px solid rgba(11,27,74,0.1)" : "none",
                        }}
                      >
                        <span
                          className="font-['Space_Mono',sans-serif] text-[10px] tracking-[0.25em] uppercase"
                          style={{ color: activePhase === i ? phase.color : "#0B1B4A" }}
                        >
                          {phase.label}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile stacked view */}
            <div className="flex flex-col gap-5 lg:hidden w-full max-w-md">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl p-6"
                  style={{ background: phase.bg, border: "2px solid rgba(11,27,74,0.08)" }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A]"
                      style={{ fontWeight: 700, fontSize: "32px", opacity: 0.2 }}
                    >
                      {phase.num}
                    </span>
                    <span
                      className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] uppercase bg-white rounded-full px-3 py-1.5"
                      style={{ color: phase.color }}
                    >
                      {phase.label}
                    </span>
                  </div>
                  <h3
                    className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A]"
                    style={{ fontWeight: 700, fontSize: "19px" }}
                  >
                    {phase.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detail panel — left/top-aligned text, desktop only */}
          <motion.div
            className="hidden lg:flex flex-col flex-shrink-0 justify-start"
            style={{ width: "360px", paddingTop: "40px" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {activePhase !== null ? (
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4"
                  style={{ background: phases[activePhase].bg }}
                >
                  <span
                    className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A]"
                    style={{ fontWeight: 700, fontSize: "13px" }}
                  >
                    Phase {phases[activePhase].num}
                  </span>
                </div>

                <h3
                  className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A] leading-tight mb-4 tracking-tight"
                  style={{ fontWeight: 700, fontSize: "clamp(24px, 2.5vw, 38px)" }}
                >
                  {phases[activePhase].title}
                </h3>

                <p
                  className="leading-relaxed mb-6 text-[#0B1B4A]"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                  }}
                >
                  {phases[activePhase].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {phases[activePhase].methods.map((m) => (
                    <span
                      key={m}
                      className="font-['Space_Mono',sans-serif] text-[10px] tracking-wider uppercase rounded-full px-3 py-1.5"
                      style={{ background: phases[activePhase].bg, color: "#0B1B4A" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="py-8">
                <p className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] text-[#0B1B4A]/40 uppercase">
                  Hover over a phase to explore
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 border-t border-[#0B1B4A]/[0.07] text-center mt-12"
        >
          <p
            className="font-['Space_Grotesk',sans-serif] italic text-[#0B1B4A]/20 leading-tight tracking-tight"
            style={{ fontWeight: 700, fontSize: "clamp(20px, 3.5vw, 52px)" }}
          >
            "Environments that don't fight human nature —
            <br className="hidden md:block" /> they work with it."
          </p>
        </motion.div>
      </PageContainer>
    </section>
  );
}
