import { motion } from "motion/react";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1634651754953-1565eca58d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhhdmlvcmFsJTIwcmVzZWFyY2glMjBvYnNlcnZhdGlvbiUyMHVzZXIlMjBzdHVkeSUyMGRhcmslMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzczMTQ0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const table = [
  ["Assume how spaces should be used", "Observe how spaces are actually used"],
  ["Design for average user", "Design for behavioral patterns"],
  ["One-time delivery", "Continuous optimization"],
  ["Satisfaction surveys", "Behavioral outcome measurement"],
  ["Space-centered", "Human-centered"],
];

export function About() {
  return (
    <section id="about" className="relative h-screen flex flex-col justify-center py-16 overflow-hidden snap-start snap-always">

      {/* Top half: image + bio side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-14 max-w-[1400px] mx-auto w-full">
        {/* Image */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
          className="relative overflow-hidden"
          style={{ minHeight: "400px" }}
        >
          <img
            src={ABOUT_IMG}
            alt="Behavioral research"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "grayscale(25%) contrast(1.1)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, transparent 60%, #FFFFFF 100%)" }}
          />
          {/* Float badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute bottom-8 left-8"
          >
            <div
              className="rounded-2xl px-5 py-4"
              style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(20px)", border: "1px solid rgba(11,27,74,0.12)" }}
            >
              <div className="font-['Space_Grotesk'] text-sm text-[#0B1B4A]" style={{ fontWeight: 600 }}>
                10+ Years Experience
              </div>
              <div className="font-['Space_Mono'] text-[8px] tracking-widest text-[#0B1B4A]/40 uppercase mt-0.5">
                Behavioral Design
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="px-8 md:px-14 py-20 flex flex-col justify-center"
        >
          <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#0B1B4A]/30 uppercase mb-6 block">
            05 — About
          </span>
          <h2
            className="font-['Space_Grotesk'] text-[#0B1B4A] leading-tight tracking-tight mb-8"
            style={{ fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            Helgi Hreinn
            <br />
            <span style={{ fontWeight: 300, color: "rgba(11,27,74,0.35)" }} className="italic">
              Hjalmarsson
            </span>
          </h2>

          <div
            className="space-y-4 text-[#0B1B4A]/50 leading-relaxed mb-10"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
          >
            <p>
              Founder of USER_, a behavioral design consultancy at the intersection of
              architecture, behavioral psychology, and digital innovation. Based in
              Copenhagen with a global perspective.
            </p>
            <p>
              With 10+ years transforming environments for Fortune 500 companies — LEGO, Novo
              Nordisk, MAERSK, Barclays — my work is rooted in a simple belief: spaces should
              be designed for how people{" "}
              <em className="not-italic text-[#3350FF]" style={{ fontWeight: 500 }}>actually</em>{" "}
              behave, not how we assume they will.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { l: "Email", v: "helgihreinn@me.com" },
              { l: "Phone", v: "+45 4083 1842" },
              { l: "Base", v: "Copenhagen, Denmark" },
            ].map(({ l, v }) => (
              <div key={l} className="flex items-center gap-3">
                <span
                  className="font-['Space_Mono'] text-[8px] tracking-widest uppercase rounded-full px-2.5 py-1 flex-shrink-0"
                  style={{ background: "#D5DEF4", color: "#0B1B4A", minWidth: "56px", textAlign: "center" }}
                >
                  {l}
                </span>
                <span className="font-['Space_Grotesk'] text-sm text-[#0B1B4A]">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Comparison table */}
      <div className="px-6 md:px-14 py-20 border-t border-[#B8C9EE]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#0B1B4A]/30 uppercase">
              The USER_ Difference
            </span>
            <div className="flex-1 h-px bg-[#B8C9EE]/30" />
          </motion.div>

          <div>
            {/* Table header */}
            <div className="grid grid-cols-2 pb-3 border-b border-[#0B1B4A]/10 mb-0">
              <span className="font-['Space_Mono'] text-[8px] tracking-[0.3em] text-[#0B1B4A]/25 uppercase">
                Traditional
              </span>
              <span className="font-['Space_Mono'] text-[8px] tracking-[0.3em] text-[#3350FF] uppercase">
                USER_
              </span>
            </div>

            {table.map(([trad, user], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="grid grid-cols-2 border-b border-[#0B1B4A]/6 group hover:bg-[#D5DEF4]/20 transition-colors duration-300"
              >
                <div className="py-4 pr-8">
                  <span
                    className="text-[#0B1B4A]/30 text-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300 }}
                  >
                    {trad}
                  </span>
                </div>
                <div className="py-4">
                  <span
                    className="text-[#0B1B4A] text-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500 }}
                  >
                    {user}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}