import { MagneticButton } from "@/components/ui/MagneticButton";

export function Newsletter() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary/10 border border-primary/20 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
          {/* Decorative glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the Elite Relocation Guide</h2>
            <p className="text-lg text-muted-foreground mb-8">Subscribe to receive expert tips on packing, real estate trends, and exclusive offers for your next move.</p>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-background/50 border border-white/10 focus:border-primary rounded-full px-6 py-4 outline-none transition-colors text-foreground"
                required
              />
              <MagneticButton type="submit">
                <div className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 px-8 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-colors whitespace-nowrap">
                  Subscribe Now
                </div>
              </MagneticButton>
            </form>
            <p className="text-xs text-muted-foreground mt-4 opacity-70">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
