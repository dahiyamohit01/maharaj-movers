import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Link } from "wouter";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-lg"
          >
            <GlassCard className="p-8 text-center relative overflow-hidden" intensity="heavy">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="font-serif text-primary text-xl italic mb-2">Wait before you go...</div>
              <h3 className="text-3xl font-serif font-bold mb-4">Planning Your Move?</h3>
              <p className="text-muted-foreground mb-8">
                Lock in our premium moving service today and receive a complimentary transit insurance upgrade up to ₹5 Lakhs on your first relocation.
              </p>
              
              <div className="flex flex-col gap-3">
                <Link href="/quote" onClick={() => setShow(false)}>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full text-lg h-14">
                    Claim Free Upgrade
                  </Button>
                </Link>
                <button 
                  onClick={() => setShow(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  I'll risk moving without it
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
