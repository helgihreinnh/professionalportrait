import { motion } from "motion/react";

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
    title: "Impact Evaluation & Learning",
    label: "Measure",
    description:
      "Post-occupancy behavioral assessment and documentation of behavioral change outcomes. Continuous optimization based on observed patterns.",
    methods: ["Post-occupancy Eval", "Behavioral Metrics", "Continuous Optimization", "Knowledge Transfer"],
    color: "#3350FF",
    bg: "#C5D5EC",
  },
];

function PhaseBlock({ phase }: { phase: (typeof phases)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0 border-t border-[#0B1B4A]/[0.07] py-14 md:py-20 items-start"
    >
      {/* Phase badge + giant number */}
      <div className="mb-8 md:mb-0 md:pt-1">
        {/* Label pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5"
          style={{ background: phase.bg }}
        >
          <span
            className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] uppercase"
            style={{ color: "#0B1B4A" }}
          >
            {phase.label}
          </span>
        </div>

        {/* Giant outline number */}
        <div
          className="font-['Space_Grotesk',sans-serif] leading-none tracking-[-0.06em] select-none"
          style={{
            fontWeight: 700,
            fontSize: "clamp(80px, 14vw, 180px)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(11,27,74,0.08)",
            lineHeight: 0.85,
          }}
        >
          {phase.num}
        </div>
      </div>

      {/* Content */}
      <div className="md:pl-10">
        <h3
          className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A] leading-tight mb-5 tracking-tight"
          style={{ fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 52px)" }}
        >
          {phase.title}
        </h3>
        <p
          className="leading-relaxed mb-8 max-w-lg text-[#0B1B4A]/65"
          style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "1.0625rem" }}
        >
          {phase.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {phase.methods.map((m) => (
            <span
              key={m}
              className="font-['Space_Mono',sans-serif] text-[11px] tracking-widest uppercase rounded-full px-3 py-1.5"
              style={{ background: phase.bg, color: "#0B1B4A" }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Methodology() {
  return (
    <section
      id="methodology"
      className="relative h-screen flex flex-col justify-center py-16 px-6 md:px-14 overflow-hidden snap-start snap-always"
    >
      {/* Section uses the global ambient layer — no local background needed */}

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A] leading-tight tracking-tight mb-6"
              style={{ fontWeight: 700, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95 }}
            >
              Three-Phase Framework
            </h2>

            <p
              className="max-w-xl leading-relaxed text-[#0B1B4A]/65"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "1.125rem" }}
            >
              From observation to transformation — a systematic approach that turns complex human behavior into actionable design.
            </p>
          </motion.div>
        </div>

        {/* Phases */}
        {phases.map((phase) => (
          <PhaseBlock key={phase.num} phase={phase} />
        ))}

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-14 border-t border-[#0B1B4A]/[0.07]"
        >
          <p
            className="font-['Space_Grotesk',sans-serif] italic text-[#0B1B4A]/20 leading-tight tracking-tight"
            style={{ fontWeight: 700, fontSize: "clamp(22px, 4vw, 56px)" }}
          >
            "Environments that don't fight human nature —
            <br className="hidden md:block" /> they work with it."
          </p>
        </motion.div>
      </div>
    </section>
  );
}