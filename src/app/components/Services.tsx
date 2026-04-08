import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "./layouts/PageContainer";

const services = [
  {
    number: "01",
    title: "Digital Product Design & Development",
    discipline: "Product & Tech",
    tags: ["PropTech", "DesignTech", "AI Tools"],
    description:
      "Building tools that transform how spaces are created. Behavioral analytics platforms, spatial optimization tools powered by AI, and digital twins for spatial planning.",
    accent: "#D5DEF4",
  },
  {
    number: "02",
    title: "Behavioral Intelligence as a Service",
    discipline: "Data & Intelligence",
    tags: ["APIs", "Data Platform", "Automation"],
    description:
      "Packaging expertise into scalable digital tools. Behavioral pattern recognition, space utilization prediction models, and automated behavioral analysis workflows.",
    accent: "#B8C9EE",
  },
  {
    number: "03",
    title: "Innovation Partnerships",
    discipline: "Co-creation",
    tags: ["Co-creation", "UX Design", "Pilots"],
    description:
      "Co-creating next-generation design technology. User research for design tech products, interface design for complex spatial data, and pilot program validation.",
    accent: "#DCE8E6",
  },
  {
    number: "04",
    title: "Design System Development",
    discipline: "Systems & Patterns",
    tags: ["Libraries", "Parametric", "Patterns"],
    description:
      "Creating reusable, intelligent design components. Pre-validated spatial configurations, evidence-based design pattern databases, and parametric design templates.",
    accent: "#C5D5EC",
  },
  {
    number: "05",
    title: "Education & Enablement",
    discipline: "Knowledge Transfer",
    tags: ["Workshops", "Training", "Frameworks"],
    description:
      "Enabling teams to apply behavioral design principles. Workshops, train-the-trainer programs, and self-service frameworks for internal teams.",
    accent: "#D5DEF4",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center py-16 md:py-20 overflow-hidden snap-start snap-always"
    >
      <PageContainer>
        {/* Section header — consistent position: label above, heading close to top */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block font-['Space_Mono',sans-serif] text-[11px] tracking-[0.45em] text-[#0B1B4A]/40 uppercase mb-4">
              02 — Services
            </span>
            <h2
              className="font-['Space_Grotesk',sans-serif] tracking-tight text-[#0B1B4A] mb-4"
              style={{ fontWeight: 700, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95 }}
            >
              What I Build
            </h2>
            <p
              className="max-w-xl leading-relaxed text-[#0B1B4A]"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "1.05rem",
              }}
            >
              Five disciplines that turn behavioral insight into tangible products,
              tools, and systems.
            </p>
          </motion.div>
        </div>

        {/* 5-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              className="relative group cursor-default"
            >
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden flex flex-col"
                animate={{
                  backgroundColor: active === i ? service.accent : "rgba(11,27,74,0.03)",
                }}
                transition={{ duration: 0.4 }}
                style={{ border: "1px solid rgba(11,27,74,0.08)" }}
              >
                {/* Card inner */}
                <div className="p-6 flex flex-col h-full min-h-[420px]">

                  {/* Centered accent block — acts as the "image" area */}
                  <div className="flex justify-center items-center mb-5">
                    <motion.div
                      className="rounded-xl flex items-center justify-center"
                      style={{ width: 64, height: 64, background: service.accent }}
                      animate={{ opacity: active === i ? 1 : 0.6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A]"
                        style={{ fontWeight: 700, fontSize: "22px", opacity: 0.6 }}
                      >
                        {service.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Discipline label */}
                  <div className="mb-3">
                    <span className="font-['Space_Mono',sans-serif] text-[10px] tracking-[0.3em] text-[#0B1B4A]/60 uppercase">
                      {service.discipline}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="font-['Space_Grotesk',sans-serif] text-[#0B1B4A] tracking-tight leading-tight mb-3"
                    style={{ fontWeight: 700, fontSize: "clamp(17px, 1.8vw, 21px)" }}
                    animate={{ y: active === i ? -4 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description — revealed on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      height: active === i ? "auto" : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden flex-1"
                  >
                    <p
                      className="text-[#0B1B4A]/65 leading-relaxed text-sm mb-4"
                      style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400 }}
                    >
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Spacer pushes tags to bottom */}
                  <div className="flex-1" />

                  {/* Tags — always at bottom */}
                  <div className="flex flex-wrap gap-2 mb-4 mt-4">
                    {service.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        animate={{ opacity: active === i ? 1 : 0.4 }}
                        transition={{ duration: 0.3 }}
                        className="font-['Space_Mono',sans-serif] text-[9px] tracking-wider uppercase rounded-full px-2.5 py-1"
                        style={{ background: "rgba(11,27,74,0.08)", color: "#0B1B4A" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-end">
                    <motion.div
                      animate={{
                        rotate: active === i ? 0 : 45,
                        color: active === i ? "#3350FF" : "rgba(11,27,74,0.15)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-[#B8C9EE]/50 to-transparent" />
          <span className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] text-[#0B1B4A]/60 uppercase">
            5 Core Disciplines
          </span>
        </motion.div>
      </PageContainer>
    </section>
  );
}
