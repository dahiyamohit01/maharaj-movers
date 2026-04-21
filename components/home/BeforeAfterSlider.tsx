import { useState, useRef, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    if (!isDragging) return;
    handleMove((e as MouseEvent).clientX);
  };

  const handleTouchMove = (e: TouchEvent | React.TouchEvent) => {
    if (!isDragging) return;
    handleMove((e as TouchEvent).touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", () => setIsDragging(false));
    window.addEventListener("touchend", () => setIsDragging(false));
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Art of Packing</h2>
          <p className="text-muted-foreground text-lg">See the difference white-glove service makes. We use premium corrugated sheets, bubble wrap, and custom crating for high-value items.</p>
        </div>

        <GlassCard intensity="light" className="p-2 max-w-5xl mx-auto overflow-hidden rounded-3xl">
          <div 
            ref={containerRef}
            className="relative w-full aspect-video md:aspect-[21/9] select-none cursor-ew-resize rounded-2xl overflow-hidden"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/images/packing-after.png" 
                alt="Premium packed box" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white font-medium z-10 pointer-events-none">
                Maharaj Standard
              </div>
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 w-full h-full border-r-2 border-primary"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img 
                src="/images/packing-before.png" 
                alt="Messy packed box" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white font-medium z-10 pointer-events-none">
                Typical Mover
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="w-8 h-12 bg-white rounded-full shadow-xl flex items-center justify-center gap-1">
                <div className="w-0.5 h-6 bg-gray-400 rounded-full" />
                <div className="w-0.5 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
