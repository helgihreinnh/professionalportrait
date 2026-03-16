import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate } from "react-router";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Methodology", href: "#methodology" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    
    // If we're on a project page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(11,27,74,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={goHome}
          className="flex items-center gap-2.5"
          data-cursor="Home"
        >
          <span
            className="font-['Space_Grotesk',sans-serif] tracking-[0.2em] text-sm text-[#0B1B4A] transition-colors duration-500"
            style={{ fontWeight: 700 }}
          >
            USER_
          </span>
        </button>

        {/* Desktop links - centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] uppercase relative group transition-colors duration-300 text-[#0B1B4A]/60 hover:text-[#0B1B4A]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#3350FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </div>

        {/* Contact button - right */}
        <motion.button
          onClick={() => scrollTo("#contact")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="hidden md:flex font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] uppercase rounded-full px-5 py-2 transition-all duration-300"
          style={{
            background: "rgba(11,27,74,0.07)",
            color: "rgba(11,27,74,0.75)",
            border: "1px solid rgba(11,27,74,0.1)",
          }}
        >
          Contact →
        </motion.button>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-[#0B1B4A]/60"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {[...navLinks, { label: "Contact", href: "#contact" }].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-['Space_Mono',sans-serif] text-[11px] tracking-[0.3em] uppercase text-left text-[#0B1B4A]/65 hover:text-[#0B1B4A] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}