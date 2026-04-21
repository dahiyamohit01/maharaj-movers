import { motion } from "framer-motion";
import { Star, Play, Quote } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const reviews = [
  { name: "Arjun Mehta", role: "CEO, TechFlow", text: "The most seamless move I've ever experienced. The white-glove packing for my art collection was phenomenal.", rating: 5, avatar: "AM" },
  { name: "Priya Sharma", role: "Architect", text: "Moved from Mumbai to Bangalore. Not a single scratch on my designer furniture. Highly recommend their premium service.", rating: 5, avatar: "PS" },
  { name: "Rahul Desai", role: "NRI Relocation", text: "Coordinated my entire international move while I was abroad. Completely hands-off experience. Brilliant team.", rating: 5, avatar: "RD" },
];

export function TrustSection() {
  return (
    <section className="py-24 relative z-10 bg-background overflow-hidden border-y border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Trusted by India's Elite</h2>
          <p className="text-muted-foreground text-lg">Over 12,000 successful luxury relocations. Don't just take our word for it.</p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
              <img src={`/images/team.png`} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Play size={24} className="ml-1" />
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <Quote size={24} className="text-primary mb-2 opacity-50" />
                <p className="font-serif italic text-lg leading-snug">"Flawless execution from start to finish."</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Clone */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="text-5xl font-bold">4.9</div>
            <div>
              <div className="flex gap-1 text-secondary mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="fill-secondary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Based on 850+ reviews</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <GlassCard key={i} intensity="light" className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    {review.avatar}
                  </div>
                  <div>
                    <h5 className="font-bold">{review.name}</h5>
                    <div className="text-xs text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 text-secondary mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} className="fill-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 border-t border-white/5 pt-12 overflow-hidden flex relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex gap-16 whitespace-nowrap items-center text-muted-foreground/50 font-serif text-2xl tracking-widest uppercase"
          >
            {/* Repeat content twice for seamless loop */}
            <span>ISO 9001:2015 CERTIFIED</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>IBA APPROVED</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>12,000+ RELOCATIONS</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>100% SECURE TRANSIT</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>ISO 9001:2015 CERTIFIED</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>IBA APPROVED</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>12,000+ RELOCATIONS</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>100% SECURE TRANSIT</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
