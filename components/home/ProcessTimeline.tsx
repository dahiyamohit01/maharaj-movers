import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Home, Package, Truck, Box, Wrench } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Consultation & Survey", desc: "Virtual or in-person assessment of your inventory." },
  { icon: Box, title: "Custom Crating", desc: "Building bespoke wooden crates for art and fragile items." },
  { icon: Package, title: "White-Glove Packing", desc: "Professional packing using premium corrugated sheets." },
  { icon: Truck, title: "Secure Transit", desc: "GPS-enabled closed containers for safe transport." },
  { icon: Home, title: "Unloading & Setup", desc: "Careful placement in your new home, exactly where you want it." },
  { icon: Wrench, title: "Debris Removal", desc: "We take all packing materials with us when we leave." },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Maharaj Process</h2>
          <p className="text-muted-foreground text-lg">A meticulously engineered workflow that removes chaos from the equation.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary -translate-x-1/2 shadow-[0_0_10px_rgba(var(--primary),0.8)] origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(var(--primary),0.2)] text-primary">
                  <step.icon size={24} />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="text-primary font-mono font-bold text-sm mb-2 tracking-widest">STEP 0{i + 1}</div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
