import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { PageContainer } from "./layouts/PageContainer";

const engagementTypes = [
  {
    type: "Product Development",
    duration: "3 – 12 months",
    description: "Full-stack digital tool development from concept to market-ready product.",
    color: "#D5DEF4",
  },
  {
    type: "Innovation Sprint",
    duration: "4 – 8 weeks",
    description: "Rapid prototyping and validation through real design projects.",
    color: "#B8C9EE",
  },
  {
    type: "Integration Services",
    duration: "2 – 6 weeks",
    description: "Adding behavioral intelligence to existing tools and workflows.",
    color: "#DCE8E6",
  },
  {
    type: "Retainer Partnership",
    duration: "Ongoing",
    description: "Continuous product evolution, feature development, and strategic advisory.",
    color: "#C5D5EC",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen flex flex-col justify-center py-16 overflow-hidden snap-start snap-always"
    >
      <PageContainer>
        {/* Section header — same pattern as all other sections */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="block font-['Space_Mono',sans-serif] text-[11px] tracking-[0.45em] text-[#0B1B4A]/40 uppercase mb-4">
              06 — Contact
            </span>
            <h2
              className="font-['Space_Grotesk'] text-[#0B1B4A] leading-[0.92] tracking-tight"
              style={{ fontWeight: 800, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95 }}
            >
              Let's Talk
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left — contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="leading-relaxed mb-8 max-w-md text-[#0B1B4A]"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: "1.1rem" }}
            >
              I'm available for advisory work, project collaborations, and strategic
              partnerships within workplace design, digital product development, and
              user experience.
            </p>

            {/* Contact details — name and info listed clearly */}
            <div className="mb-8">
              <div
                className="font-['Space_Grotesk'] text-[#0B1B4A] mb-1"
                style={{ fontWeight: 700, fontSize: "1rem" }}
              >
                Helgi Hreinn Hjalmarsson
              </div>
              <div className="font-['Space_Mono'] text-[10px] tracking-[0.3em] text-[#0B1B4A]/50 uppercase mb-6">
                Architect · Copenhagen
              </div>

              <div className="space-y-4">
                {[
                  { Icon: Mail,    label: "helgihreinn@me.com",    href: "mailto:helgihreinn@me.com" },
                  { Icon: Phone,   label: "+45 4083 1842",         href: "tel:+4540831842" },
                  { Icon: MapPin,  label: "Copenhagen, Denmark",   href: null },
                ].map(({ Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(11,27,74,0.06)" }}
                    >
                      <Icon size={14} style={{ color: "rgba(11,27,74,0.4)" }} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="font-['Space_Grotesk'] text-[0.95rem] hover:text-[#0B1B4A] transition-colors duration-200 text-[#0B1B4A]/70"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="font-['Space_Grotesk'] text-[0.95rem] text-[#0B1B4A]/50">
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links — pushed down */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { Icon: Github,      label: "GitHub",    href: "https://github.com/HelgiHreinnH/geist-ux-architect" },
                { Icon: Linkedin,    label: "LinkedIn",  href: "#" },
                { Icon: ArrowUpRight, label: "Live Site", href: "https://userpage.lovable.app" },
              ].map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, background: "rgba(11,27,74,0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 font-['Space_Mono'] text-[9px] tracking-widest uppercase rounded-xl px-4 py-2.5 transition-all duration-200"
                  style={{
                    background: "rgba(11,27,74,0.06)",
                    color: "rgba(11,27,74,0.55)",
                    border: "1px solid rgba(11,27,74,0.08)",
                  }}
                >
                  <Icon size={11} />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — engagement types */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-['Space_Mono'] text-[10px] tracking-[0.3em] uppercase mb-5 text-[#0B1B4A]/30">
              Engagement Types
            </div>
            <div className="space-y-3">
              {engagementTypes.map((eng, i) => (
                <motion.div
                  key={eng.type}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group rounded-2xl p-5 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(11,27,74,0.07)",
                    backdropFilter: "blur(8px)",
                    cursor: "default",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: eng.color }} />
                      <span
                        className="font-['Space_Grotesk'] text-sm text-[#0B1B4A]"
                        style={{ fontWeight: 600 }}
                      >
                        {eng.type}
                      </span>
                    </div>
                    <span
                      className="font-['Space_Mono'] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: eng.color, color: "#0B1B4A" }}
                    >
                      {eng.duration}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed pl-5 text-[#0B1B4A]/50"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400 }}
                  >
                    {eng.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          className="border-t pt-7 mt-10 flex items-center justify-between flex-wrap gap-4"
          style={{ borderColor: "rgba(11,27,74,0.07)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(11,27,74,0.06)" }}
            >
              <span className="font-['Space_Mono'] text-[10px] text-[#0B1B4A]/40">U</span>
            </div>
            <span
              className="font-['Space_Grotesk'] text-sm tracking-[0.1em] text-[#0B1B4A]/30"
              style={{ fontWeight: 500 }}
            >
              USER_
            </span>
          </div>
          <div className="font-['Space_Mono'] text-[9px] tracking-widest uppercase text-[#0B1B4A]/20">
            © 2025 USER. All rights reserved. — Copenhagen, Denmark
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
