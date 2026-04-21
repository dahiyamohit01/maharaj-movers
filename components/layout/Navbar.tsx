import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MapPin, Truck, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <Truck size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <div className="font-serif font-bold text-xl leading-none text-foreground tracking-tight">Maharaj</div>
            <div className="text-[10px] tracking-[0.2em] text-primary uppercase font-semibold">Movers</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</Link>
          
          <div className="group relative">
            <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 py-4">
              Services <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
              <div className="bg-card/95 backdrop-blur-xl border border-white/10 p-2 rounded-xl shadow-2xl min-w-[240px]">
                <Link href="/services/home-shifting" className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium">Home Relocation</Link>
                <Link href="/services/office-relocation" className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium">Office Relocation</Link>
                <Link href="/services/vehicle-transport" className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium">Vehicle Transport</Link>
                <Link href="/services/international-moving" className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium">International Moving</Link>
              </div>
            </div>
          </div>

          <Link href="/cities" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Cities</Link>
          <Link href="/blog" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Journal</Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919876543210" className="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Phone size={16} className="text-primary" /> +91 98765 43210
          </a>
          <Link href="/quote">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all">
              Get Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 pb-6 px-6 flex flex-col h-[100dvh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-2xl font-serif">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Our Services</Link>
              <Link href="/cities" className="hover:text-primary transition-colors">Coverage Area</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Journal</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            <div className="mt-auto pt-10 flex flex-col gap-4">
              <Link href="/quote">
                <Button size="lg" className="w-full bg-primary text-primary-foreground rounded-full">
                  Get Instant Quote
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="outline" size="lg" className="w-full rounded-full border-white/20">
                  <Phone size={18} className="mr-2" /> Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
