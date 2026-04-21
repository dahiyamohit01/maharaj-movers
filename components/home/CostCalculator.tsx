import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Home, Package, Shield, Warehouse } from "lucide-react";

export function CostCalculator() {
  const [size, setSize] = useState("2BHK");
  const [distance, setDistance] = useState(500);
  const [addons, setAddons] = useState({
    packing: true,
    insurance: false,
    storage: false
  });

  const sizes = [
    { id: "1BHK", base: 12000 },
    { id: "2BHK", base: 18000 },
    { id: "3BHK", base: 26000 },
    { id: "4BHK", base: 35000 },
    { id: "Villa", base: 55000 },
  ];

  const calculateCost = () => {
    const baseObj = sizes.find(s => s.id === size);
    if (!baseObj) return { min: 0, max: 0 };
    
    let min = baseObj.base;
    
    // Distance factor (approx 15 rs per km)
    min += distance * 15;
    
    if (addons.packing) min += baseObj.base * 0.2;
    if (addons.insurance) min += 4500;
    if (addons.storage) min += 8000;
    
    const max = Math.floor(min * 1.25);
    return { min: Math.floor(min), max };
  };

  const { min, max } = calculateCost();
  
  // Animate numbers
  const animatedMin = useSpring(0, { bounce: 0, duration: 1000 });
  const animatedMax = useSpring(0, { bounce: 0, duration: 1000 });

  useEffect(() => {
    animatedMin.set(min);
    animatedMax.set(max);
  }, [min, max, animatedMin, animatedMax]);

  return (
    <section className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">No hidden fees. No last-minute surprises. Use our interactive calculator to get an estimated range for your premium relocation.</p>
        </div>

        <GlassCard intensity="light" className="max-w-4xl mx-auto p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-4 block">House Size</label>
                <div className="flex flex-wrap gap-3">
                  {sizes.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSize(s.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        size === s.id 
                          ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.3)]" 
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {s.id}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-medium text-muted-foreground block">Distance</label>
                  <span className="text-sm font-bold text-primary">{distance} KM</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="3000" 
                  step="10"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Local</span>
                  <span>Intercity</span>
                  <span>Long Distance</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-4 block">Premium Add-ons</label>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Package size={18} className="text-primary" />
                      <span className="text-sm font-medium">White-Glove Packing</span>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={addons.packing}
                      onChange={(e) => setAddons(prev => ({ ...prev, packing: e.target.checked }))}
                      className="w-5 h-5 accent-primary rounded border-white/20 bg-transparent"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Shield size={18} className="text-primary" />
                      <span className="text-sm font-medium">Transit Insurance</span>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={addons.insurance}
                      onChange={(e) => setAddons(prev => ({ ...prev, insurance: e.target.checked }))}
                      className="w-5 h-5 accent-primary rounded border-white/20 bg-transparent"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Warehouse size={18} className="text-primary" />
                      <span className="text-sm font-medium">Secure Storage (1 mo)</span>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={addons.storage}
                      onChange={(e) => setAddons(prev => ({ ...prev, storage: e.target.checked }))}
                      className="w-5 h-5 accent-primary rounded border-white/20 bg-transparent"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Display */}
            <div className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
              
              <h3 className="text-xl font-serif mb-2 relative z-10">Estimated Investment</h3>
              <p className="text-sm text-muted-foreground mb-8 relative z-10">Based on industry averages for premium service</p>
              
              <div className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative z-10 mb-8 flex items-center justify-center gap-2">
                <span>₹</span>
                <motion.span>{useTransform(animatedMin, (v) => Math.round(v).toLocaleString("en-IN"))}</motion.span>
                <span className="text-2xl text-foreground">to</span>
                <motion.span>{useTransform(animatedMax, (v) => Math.round(v).toLocaleString("en-IN"))}</motion.span>
              </div>
              
              <div className="w-full bg-white/5 rounded-xl p-4 relative z-10 text-left space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base Move ({distance}km)</span>
                  <span className="font-medium">Included</span>
                </div>
                {addons.packing && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">White-Glove Packing</span>
                    <span className="font-medium">Included</span>
                  </div>
                )}
                {addons.insurance && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Transit Insurance</span>
                    <span className="font-medium">Included</span>
                  </div>
                )}
                {addons.storage && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Secure Storage</span>
                    <span className="font-medium">Included</span>
                  </div>
                )}
              </div>
              
              <p className="text-xs text-muted-foreground mt-6 relative z-10">
                *This is an estimate. Final quote requires a virtual or in-person survey.
              </p>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
}
