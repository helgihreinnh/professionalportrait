import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { PageContainer } from "./layouts/PageContainer";

const IMG_LEGO =
  "https://images.unsplash.com/photo-1771908997889-6d043c4a9ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMGRyYW1hdGljJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczMTQ0MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_NOVO =
  "https://images.unsplash.com/photo-1573306366674-5d42fa734860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBvZmZpY2UlMjBpbnRlcmlvciUyMHBlb3BsZSUyMHdvcmtpbmclMjBDb3BlbmhhZ2VuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzMxNDQwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_MAERSK =
  "https://images.unsplash.com/photo-1770944182416-911214039dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWVyc2slMjBzaGlwcGluZyUyMGluZHVzdHJpYWwlMjBkcmFtYXRpYyUyMHdpZGV8ZW58MXx8fHwxNzczMTQ0MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_AEC =
  "https://images.unsplash.com/photo-1739054730201-4b6463484e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXJrJTIwYmx1ZSUyMHRlY2h8ZW58MXx8fHwxNzczMTQ0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080";

interface BentoCardProps {
  number: string;
  client: string;
  title: string;
  outcome: string;
  tags: string[];
  image: string;
  accentColor: string;
  delay?: number;
  projectId: string;
}

function BentoCard({
  number, client, title, outcome, tags, image, accentColor, delay = 0, projectId,
}: BentoCardProps) {
  return (
    <Link to={`/projects/${projectId}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
        whileHover="hovered"
        className="group relative overflow-hidden rounded-2xl cursor-pointer"
        style={{ height: "100%", minHeight: 0 }}
        data-cursor="View"
      >
        {/* Image layer */}
        <div className="absolute inset-0">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(20%) contrast(1.05)" }}
            variants={{ hovered: { scale: 1.06 } }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Gradient — keep, accentuates depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(5,8,20,0.94) 0%, rgba(5,8,20,0.45) 42%, rgba(5,8,20,0.08) 100%)",
            }}
          />
        </div>

        {/* Top meta */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.35em] text-white/50 uppercase">
            {number}
          </span>
          <span
            className="font-['Space_Mono',sans-serif] text-[11px] tracking-widest uppercase rounded-full px-2 py-0.5"
            style={{ background: accentColor, color: "#0B1B4A" }}
          >
            {outcome}
          </span>
        </div>

        {/* Bottom content — nudged upward slightly from edge */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.35em] text-white/50 uppercase mb-1">
            {client}
          </div>
          <div className="flex items-end justify-between gap-2">
            <h3
              className="font-['Space_Grotesk',sans-serif] text-white leading-tight flex-1"
              style={{ fontWeight: 700, fontSize: "clamp(13px, 1.5vw, 20px)" }}
            >
              {title}
            </h3>
            <motion.div
              variants={{ hovered: { rotate: 45, scale: 1.15 } }}
              transition={{ duration: 0.3 }}
              className="text-white/60 flex-shrink-0"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-['Space_Mono',sans-serif] text-[11px] tracking-widest uppercase rounded-full px-1.5 py-0.5"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative h-screen flex flex-col justify-center py-16 overflow-hidden snap-start snap-always"
    >
      <PageContainer className="flex flex-col h-full justify-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="block font-['Space_Mono',sans-serif] text-[11px] tracking-[0.45em] text-[#0B1B4A]/40 uppercase mb-4">
            04 — Selected Work
          </span>
          <h2
            className="font-['Space_Grotesk',sans-serif] tracking-tight text-[#0B1B4A]"
            style={{ fontWeight: 700, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95 }}
          >
            Examples
          </h2>
          <p
            className="mt-3 text-[#0B1B4A] max-w-xl"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "1.05rem" }}
          >
            12 projects across workplace strategy, digital product, and making.
          </p>
        </motion.div>

        {/* Desktop bento grid */}
        <div
          className="hidden md:grid gap-3 flex-1"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            height: "calc(100vh - 320px)",
            minHeight: 360,
            maxHeight: 580,
          }}
        >
          <div style={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}>
            <BentoCard
              projectId="lego"
              number="01"
              client="LEGO"
              title="Behavioral Workspace Transformation"
              outcome="+48% Collab"
              tags={["Behavioral Analytics", "UX Research"]}
              image={IMG_LEGO}
              accentColor="#D5DEF4"
              delay={0}
            />
          </div>
          <div style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
            <BentoCard
              projectId="novo-nordisk"
              number="02"
              client="Novo Nordisk"
              title="Lab Environment Design"
              outcome="Validated"
              tags={["Spatial Design", "Post-Occupancy"]}
              image={IMG_NOVO}
              accentColor="#B8C9EE"
              delay={0.08}
            />
          </div>
          <div style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
            <BentoCard
              projectId="maersk"
              number="03"
              client="MAERSK"
              title="Behavioral Pattern Analysis"
              outcome="+31% Eff"
              tags={["Sensor Data", "Analytics"]}
              image={IMG_MAERSK}
              accentColor="#DCE8E6"
              delay={0.16}
            />
          </div>
          <div style={{ gridColumn: "2 / 4", gridRow: "2 / 3" }}>
            <BentoCard
              projectId="aec-innovation"
              number="04"
              client="AEC Innovation Lab"
              title="Design Technology Platform"
              outcome="Pilot"
              tags={["PropTech", "AI Tools", "Parametric"]}
              image={IMG_AEC}
              accentColor="#C5D5EC"
              delay={0.24}
            />
          </div>
        </div>

        {/* Mobile stack */}
        <div className="md:hidden space-y-3">
          <div style={{ height: 340 }}>
            <BentoCard
              projectId="lego"
              number="01"
              client="LEGO"
              title="Behavioral Workspace Transformation"
              outcome="+48% Collab"
              tags={["Behavioral Analytics", "UX Research"]}
              image={IMG_LEGO}
              accentColor="#D5DEF4"
            />
          </div>
          <div style={{ height: 260 }}>
            <BentoCard
              projectId="novo-nordisk"
              number="02"
              client="Novo Nordisk"
              title="Lab Environment Design"
              outcome="Validated"
              tags={["Spatial Design", "Post-Occupancy"]}
              image={IMG_NOVO}
              accentColor="#B8C9EE"
            />
          </div>
          <div style={{ height: 260 }}>
            <BentoCard
              projectId="maersk"
              number="03"
              client="MAERSK"
              title="Behavioral Pattern Analysis"
              outcome="+31% Eff"
              tags={["Sensor Data", "Analytics"]}
              image={IMG_MAERSK}
              accentColor="#DCE8E6"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
