import { MessageSquare, PhoneCall } from "lucide-react";
import { Link } from "wouter";

export function StickyMobileCTAs() {
  return (
    <div className="md:hidden fixed bottom-6 right-4 z-40 flex flex-col gap-3">
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 relative"
      >
        <span className="absolute inset-0 rounded-full bg-green-500/50 animate-ping" />
        <MessageSquare size={24} className="relative z-10" />
      </a>
      <a 
        href="tel:+919876543210" 
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
}
