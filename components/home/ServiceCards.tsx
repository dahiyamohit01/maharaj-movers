import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Home, Building2, Car, Globe, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import React, { useRef } from "react";

const services = [
  {
    title: "Home Relocation",
    desc: "Complete household shifting with white-glove packing for your most valuable possessions.",
    icon: Home,
    link: "/services/home-shifting",
    bg: "/images/service-home.png"
  },
  {
    title: "Office Relocation",
    desc: "Seamless corporate transitions minimizing downtime with structured inventory management.",
    icon: Building2,
    link: "/services/office-relocation",
    bg: "/images/service-office.png"
  },
  {
    title: "Vehicle Transport",
    desc: "Enclosed, secure carriers for your luxury cars and motorcycles with scratch-free guarantees.",
    icon: Car,
    link: "/services/vehicle-transport",
    bg: "/images/service-vehicle.png"
  },
  {
    title: "Global Moving",
    desc: "End-to-end international relocation including customs clearance and sea/air freight.",
    icon: Globe,
    link: "/services/international-moving",
    bg: "/images/hero-bg.png"
  }
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);
  const mouseYSpring = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={service.link}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: mouseYSpring,
          rotateY: mouseXSpring,
          transformStyle: "preserve-3d"
        }}
        className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 bg-background/80 z-10 transition-opacity duration-500 group-hover:bg-background/40" />
        <img 
          src={service.bg} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
        />
        
        <GlassCard intensity="light" className="absolute inset-x-4 bottom-4 p-6 z-20 translate-translate-z-[50px]">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 backdrop-blur-md">
            <service.icon size={24} />
          </div>
          <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.desc}</p>
          <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Explore Service <ArrowRight size={16} />
          </div>
        </GlassCard>
      </motion.div>
    </Link>
  );
}

export function ServiceCards() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Concierge Services</h2>
            <p className="text-muted-foreground text-lg">A full spectrum of premium relocation services designed to eliminate stress and protect your investments.</p>
          </div>
          <Link href="/services">
            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors whitespace-nowrap">
              View All Services
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 perspective-[1000px]">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
