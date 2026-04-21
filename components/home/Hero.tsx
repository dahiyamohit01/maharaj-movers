import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Link, useLocation } from "wouter";
import { cities } from "@/data/cities";

const recentBookings = [
  { from: "Mumbai", to: "Delhi", time: "2 mins ago" },
  { from: "Bangalore", to: "Pune", time: "5 mins ago" },
  { from: "Hyderabad", to: "Chennai", time: "12 mins ago" },
  { from: "Gurgaon", to: "Noida", time: "18 mins ago" },
];

export function Hero() {
  const [, setLocation] = useLocation();
  const [bookingIdx, setBookingIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBookingIdx((prev) => (prev + 1) % recentBookings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/quote");
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-20" />
        <img 
          src="/images/hero-bg.png" 
          alt="Luxury Moving Truck" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_alternate] z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen animate-[pulse_6s_ease-in-out_infinite_alternate-reverse] z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 text-primary">
              <Star size={14} className="fill-primary" /> #1 Premium Movers in India
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Relocation,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                Elevated.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              White-glove packing and secure transit for discerning families and executives. We treat your belongings like heirlooms.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              <div>
                <div className="text-3xl font-serif font-bold text-foreground">
                  <AnimatedCounter to={12} format={v => `${v}k+`} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Moves</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-foreground">
                  <AnimatedCounter to={50} format={v => `${v}+`} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Cities</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-foreground">
                  <AnimatedCounter to={10} format={v => `${v}+`} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-foreground">4.9</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1 flex items-center gap-1">
                  <Star size={10} className="fill-secondary text-secondary" /> Rating
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground bg-white/5 border border-white/10 rounded-full py-2 px-4 w-max">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Just Booked: <span className="text-foreground">{recentBookings[bookingIdx].from} → {recentBookings[bookingIdx].to}</span>
              <span className="opacity-50">{recentBookings[bookingIdx].time}</span>
            </div>
          </motion.div>

          {/* Right Content - Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="perspective-[1000px]"
          >
            <GlassCard intensity="heavy" className="p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                Get an Instant Estimate
              </h3>
              
              <form onSubmit={handleQuote} className="space-y-5 relative z-10">
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input 
                      type="text" 
                      placeholder="Pickup City" 
                      className="w-full bg-background/50 border border-white/10 focus:border-primary rounded-xl py-3 pl-10 pr-4 text-foreground outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="relative flex justify-center -my-3 z-10">
                    <div className="bg-card border border-white/10 rounded-full p-1 shadow-lg">
                      <ArrowRight size={16} className="text-primary rotate-90 md:rotate-0" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input 
                      type="text" 
                      placeholder="Destination City" 
                      className="w-full bg-background/50 border border-white/10 focus:border-primary rounded-xl py-3 pl-10 pr-4 text-foreground outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input 
                      type="date" 
                      className="w-full bg-background/50 border border-white/10 focus:border-primary rounded-xl py-3 pl-10 pr-4 text-foreground outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <MagneticButton type="submit" className="w-full mt-4">
                  <div className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors w-full shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                    View Estimate <ArrowRight size={18} />
                  </div>
                </MagneticButton>
                
                <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck size={14} className="text-green-500" /> Your data is secure. No spam.
                </p>
              </form>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
