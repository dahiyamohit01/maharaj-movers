import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { StickyMobileCTAs } from "./StickyMobileCTAs";
import { Chatbot } from "./Chatbot";
import { ExitIntentPopup } from "./ExitIntentPopup";
import { LoadingScreen } from "./LoadingScreen";

export function Layout({ children }: { children: ReactNode }) {
  // Setup mouse glow effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />
      
      {/* Global Mouse Follow Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />

      <Navbar />
      
      <main className="flex-1 relative z-10 pt-[72px]">
        {children}
      </main>

      <Footer />
      
      <StickyMobileCTAs />
      <Chatbot />
      <ExitIntentPopup />
    </div>
  );
}
