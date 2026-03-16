import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import { useEffect } from "react";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  
  const project = projectId ? projects[projectId] : null;

  // Scroll to top when project loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-['Space_Grotesk'] text-4xl font-bold text-[#0B1B4A] mb-4">
            Project Not Found
          </h1>
          <Link
            to="/"
            className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#0B1B4A]/60 hover:text-[#0B1B4A] transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjectsData = project.relatedProjects
    ?.map((id) => projects[id])
    .filter(Boolean) || [];

  return (
    <div className="relative">
      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-24 left-6 md:left-14 z-50"
      >
        <Link
          to="/#projects"
          className="group inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#0B1B4A]/40 hover:text-[#0B1B4A] transition-colors uppercase"
          data-cursor="Back"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          All Projects
        </Link>
      </motion.div>

      {/* Hero section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(15%) contrast(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(237,241,248,0.4) 0%, rgba(5,8,20,0.85) 100%)",
            }}
          />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-14 max-w-7xl mx-auto w-full pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-['Space_Mono'] text-[8px] tracking-[0.4em] text-white/40 uppercase">
              {project.number} — {project.client}
            </span>
            <div className="h-px w-12 bg-white/20" />
            <span className="font-['Space_Mono'] text-[8px] tracking-[0.4em] text-white/40 uppercase">
              {project.year}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-['Space_Grotesk'] text-white mb-4"
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-['Space_Grotesk'] text-white/70 max-w-2xl mb-8"
            style={{ fontSize: "clamp(18px, 2vw, 28px)", lineHeight: 1.4 }}
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-['Space_Mono'] text-[8px] tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-white/20 relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white/60"
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Brief section */}
      <section className="relative px-6 md:px-14 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-6" style={{ fontWeight: 700, fontSize: "clamp(24px, 3vw, 42px)" }}>
                The Challenge
              </h2>
              <p className="font-['Space_Grotesk'] text-[#0B1B4A]/70 leading-relaxed" style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}>
                {project.brief.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-6" style={{ fontWeight: 700, fontSize: "clamp(24px, 3vw, 42px)" }}>
                Context
              </h2>
              <p className="font-['Space_Grotesk'] text-[#0B1B4A]/70 leading-relaxed" style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}>
                {project.brief.context}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="relative px-6 md:px-14 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#0B1B4A]/30 uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-6" style={{ fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1 }}>
              {project.approach.title}
            </h2>
            <p className="font-['Space_Grotesk'] text-[#0B1B4A]/70 max-w-3xl leading-relaxed" style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}>
              {project.approach.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {project.approach.methods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-full"
                  style={{ background: project.accentColor }}
                />
                <div className="pl-6">
                  <h3 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-3" style={{ fontWeight: 700, fontSize: "clamp(18px, 1.5vw, 22px)" }}>
                    {method.name}
                  </h3>
                  <p className="font-['Space_Grotesk'] text-[#0B1B4A]/60 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights section - Editorial layout */}
      <section className="relative px-6 md:px-14 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Space_Grotesk'] text-[#0B1B4A] mb-12" 
            style={{ fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Key Insights
          </motion.h2>

          <div className="space-y-12 md:space-y-20">
            {project.insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                {insight.stat && (
                  <div className="md:col-span-3">
                    <div
                      className="font-['Space_Grotesk'] text-[#0B1B4A]"
                      style={{
                        fontWeight: 700,
                        fontSize: "clamp(40px, 5vw, 72px)",
                        lineHeight: 1,
                        color: project.accentColor.replace('F4', 'AA').replace('E6', 'AA').replace('EE', 'AA').replace('EC', 'AA'),
                      }}
                    >
                      {insight.stat}
                    </div>
                  </div>
                )}
                <div className={insight.stat ? "md:col-span-9" : "md:col-span-12"}>
                  <h3 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-3" style={{ fontWeight: 700, fontSize: "clamp(22px, 2vw, 32px)" }}>
                    {insight.title}
                  </h3>
                  <p className="font-['Space_Grotesk'] text-[#0B1B4A]/70 leading-relaxed max-w-3xl" style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}>
                    {insight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width gallery */}
      <section className="relative py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={image}
                alt={`${project.title} - Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution section */}
      <section className="relative px-6 md:px-14 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#0B1B4A]/30 uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-6" style={{ fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1 }}>
              Strategic Interventions
            </h2>
            <p className="font-['Space_Grotesk'] text-[#0B1B4A]/70 max-w-3xl leading-relaxed" style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}>
              {project.solution.description}
            </p>
          </motion.div>

          <div className="space-y-12">
            {project.solution.interventions.map((intervention, index) => (
              <motion.div
                key={intervention.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 pl-8 py-2"
                style={{ borderColor: project.accentColor }}
              >
                <h3 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-3" style={{ fontWeight: 700, fontSize: "clamp(20px, 1.8vw, 28px)" }}>
                  {intervention.title}
                </h3>
                <p className="font-['Space_Grotesk'] text-[#0B1B4A]/70 leading-relaxed max-w-2xl" style={{ fontSize: "clamp(15px, 1.1vw, 18px)" }}>
                  {intervention.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="relative px-6 md:px-14 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Space_Grotesk'] text-[#0B1B4A] mb-16" 
            style={{ fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Measurable Impact
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {project.impact.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className="font-['Space_Grotesk'] text-[#0B1B4A] mb-3"
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(48px, 6vw, 80px)",
                    lineHeight: 1,
                    color: project.accentColor.replace('F4', 'CC').replace('E6', 'CC').replace('EE', 'CC').replace('EC', 'CC'),
                  }}
                >
                  {item.value}
                </div>
                <h3 className="font-['Space_Grotesk'] text-[#0B1B4A] mb-2" style={{ fontWeight: 700, fontSize: "clamp(16px, 1.3vw, 20px)" }}>
                  {item.metric}
                </h3>
                <p className="font-['Space_Grotesk'] text-[#0B1B4A]/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      {project.quote && (
        <section className="relative px-6 md:px-14 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div
              className="font-['Space_Grotesk'] text-[#0B1B4A] mb-8 italic"
              style={{
                fontWeight: 500,
                fontSize: "clamp(24px, 3vw, 42px)",
                lineHeight: 1.4,
              }}
            >
              "{project.quote.text}"
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#0B1B4A]/20" />
              <div className="font-['Space_Mono'] text-[9px] tracking-[0.3em] text-[#0B1B4A]/50 uppercase">
                {project.quote.author}, {project.quote.role}
              </div>
              <div className="h-px w-8 bg-[#0B1B4A]/20" />
            </div>
          </motion.div>
        </section>
      )}

      {/* Related projects */}
      {relatedProjectsData.length > 0 && (
        <section className="relative px-6 md:px-14 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-['Space_Grotesk'] text-[#0B1B4A] mb-12" 
              style={{ fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              Related Work
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjectsData.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    className="group block relative aspect-[16/10] overflow-hidden rounded-2xl"
                    data-cursor="View"
                  >
                    <img
                      src={relatedProject.heroImage}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ filter: "grayscale(15%)" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(5,8,20,0.9) 0%, rgba(5,8,20,0.3) 60%, rgba(5,8,20,0) 100%)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="font-['Space_Mono'] text-[8px] tracking-[0.35em] text-white/30 uppercase mb-2">
                        {relatedProject.client}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-white font-bold text-xl mb-2 group-hover:translate-x-1 transition-transform">
                        {relatedProject.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60">
                        <span className="font-['Space_Mono'] text-[8px] tracking-widest uppercase">
                          View Project
                        </span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative px-6 md:px-14 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-3 font-['Space_Mono'] text-[10px] tracking-[0.3em] text-[#0B1B4A]/60 hover:text-[#0B1B4A] transition-colors uppercase"
            data-cursor="Back"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            View All Projects
          </Link>
        </motion.div>
      </section>
    </div>
  );
}