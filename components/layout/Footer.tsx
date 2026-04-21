import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, CheckCircle } from "lucide-react";
import { cities } from "@/data/cities";

export function Footer() {
  const topCities = cities.slice(0, 12);

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <span className="font-serif font-bold italic text-xl">M</span>
              </div>
              <div>
                <div className="font-serif font-bold text-xl leading-none text-foreground tracking-tight">Maharaj</div>
                <div className="text-[10px] tracking-[0.2em] text-primary uppercase font-semibold">Movers</div>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              India's premier concierge relocation service. Elevating the moving experience with white-glove packing, secure transit, and unmatched reliability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Premium Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/services/home-shifting" className="hover:text-primary transition-colors">Home Relocation</Link></li>
              <li><Link href="/services/office-relocation" className="hover:text-primary transition-colors">Corporate Relocation</Link></li>
              <li><Link href="/services/vehicle-transport" className="hover:text-primary transition-colors">Luxury Vehicle Transport</Link></li>
              <li><Link href="/services/international-moving" className="hover:text-primary transition-colors">International Moving</Link></li>
              <li><Link href="/services/storage-warehousing" className="hover:text-primary transition-colors">Climate-Controlled Storage</Link></li>
              <li><Link href="/services/packing-unpacking" className="hover:text-primary transition-colors">White-Glove Packing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>Level 4, Corporate Edge, Cyber City, Gurgaon, Haryana 122002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:concierge@maharajmovers.com" className="hover:text-primary transition-colors">concierge@maharajmovers.com</a>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-green-500" /> ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-green-500" /> IBA Approved Movers
              </div>
            </div>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Top Destinations</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-muted-foreground">
              {topCities.map(city => (
                <Link key={city.slug} href={`/cities/${city.slug}`} className="hover:text-primary transition-colors">
                  {city.name}
                </Link>
              ))}
            </div>
            <Link href="/cities" className="inline-block mt-6 text-primary hover:text-primary/80 font-medium text-sm transition-colors">
              View all 50+ cities →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Maharaj Movers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
