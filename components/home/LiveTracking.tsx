import { motion } from "framer-motion";
import { Truck, MapPin, CheckCircle, Clock } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function LiveTracking() {
  const steps = [
    { label: "Origin", desc: "Packed & Loaded", status: "completed" },
    { label: "In Transit", desc: "Crossing borders", status: "active" },
    { label: "Local Hub", desc: "Arrived at facility", status: "pending" },
    { label: "Destination", desc: "Out for delivery", status: "pending" },
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Never Wonder Where Your Life Is.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every Maharaj relocation comes with an exclusive tracking portal. Watch your belongings cross the country with GPS-enabled transport vehicles, and receive SMS updates at every major milestone.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">GPS-Enabled Fleet</h4>
                  <p className="text-muted-foreground">Real-time location data refreshed every 15 minutes.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Predictive ETA</h4>
                  <p className="text-muted-foreground">AI-driven arrival estimates accounting for traffic and weather.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <GlassCard intensity="heavy" className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Tracking ID</div>
                  <div className="font-mono text-lg font-bold tracking-wider text-primary">MM-284-9102</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Status</div>
                  <div className="text-green-500 font-bold animate-pulse">In Transit</div>
                </div>
              </div>

              {/* Map visualization */}
              <div className="h-48 bg-background/50 rounded-xl mb-8 relative border border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')" }} />
                
                {/* Route Line */}
                <div className="absolute top-1/2 left-10 right-10 h-1 bg-white/10 rounded-full -translate-y-1/2" />
                <motion.div 
                  className="absolute top-1/2 left-10 h-1 bg-primary rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(var(--primary),0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                
                {/* Points */}
                <div className="absolute top-1/2 left-10 w-4 h-4 rounded-full bg-white -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 right-10 w-4 h-4 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/2 border-2 border-white/50" />
                
                {/* Animated Truck */}
                <motion.div 
                  className="absolute top-1/2 left-10 -translate-y-1/2 -translate-x-1/2 z-10"
                  animate={{ left: "calc(10% + 60% * 0.8)" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  <div className="w-10 h-10 bg-card rounded-full border border-primary flex items-center justify-center shadow-lg shadow-primary/20 -mt-8">
                    <Truck size={18} className="text-primary" />
                  </div>
                </motion.div>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        step.status === 'completed' ? 'bg-primary text-primary-foreground' : 
                        step.status === 'active' ? 'bg-background border-2 border-primary text-primary' : 
                        'bg-white/10 text-muted-foreground'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle size={12} /> : <div className={`w-2 h-2 rounded-full ${step.status === 'active' ? 'bg-primary animate-pulse' : 'bg-transparent'}`} />}
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`w-px h-full mt-2 absolute top-6 ${
                          step.status === 'completed' ? 'bg-primary' : 'bg-white/10'
                        }`} />
                      )}
                    </div>
                    <div className={i === steps.length - 1 ? "" : "pb-4"}>
                      <h5 className={`font-bold ${step.status === 'active' ? 'text-foreground' : 'text-muted-foreground'}`}>{step.label}</h5>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
