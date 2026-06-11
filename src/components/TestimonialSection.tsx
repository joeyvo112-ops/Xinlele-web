import { TESTIMONIAL } from "../data";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-surface-cream relative overflow-hidden text-center">
      
      {/* Decorative Repeating Translucent Background watermark texts matching exactly Image 1 */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-4 space-y-6">
        <p className="font-display font-black text-2xl md:text-5xl lg:text-7xl uppercase tracking-widest text-earth-dark whitespace-nowrap">
          FARM QUALITY &bull; USDA ORGANIC
        </p>
        <p className="font-display font-black text-2xl md:text-5xl lg:text-7xl uppercase tracking-widest text-earth-dark whitespace-nowrap">
          LOCAL FIRST &bull; NATURE TRUST
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        
        {/* Quote Mark Icon upper-crown */}
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto shadow-2xs">
          <Quote className="h-5 w-5 transform rotate-180" />
        </div>

        {/* Big stylized quote paragraph */}
        <div className="relative max-w-3xl mx-auto">
          {/* Left Decorative huge quote mark */}
          <span className="absolute -top-16 -left-6 md:-left-12 text-accent/60 font-serif text-[120px] leading-none select-none opacity-50">
            “
          </span>
          
          <p className="font-sans italic text-md md:text-lg text-earth-dark/90 leading-relaxed relative z-10 font-medium">
            "{TESTIMONIAL.quote}"
          </p>

          {/* Right Decorative huge quote mark */}
          <span className="absolute -bottom-24 -right-6 md:-right-12 text-accent/60 font-serif text-[120px] leading-none select-none opacity-50">
            ”
          </span>
        </div>

        {/* User Card */}
        <div className="flex flex-col items-center space-y-3.5 pt-4">
          
          {/* Avatar bound in elegant green ring */}
          <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-primary to-accent shadow-md">
            <img
              src={TESTIMONIAL.avatar}
              alt={TESTIMONIAL.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
          </div>

          <div>
            <h4 className="font-display font-extrabold text-sm text-earth-dark">
              {TESTIMONIAL.name}
            </h4>
            <p className="text-4xs text-stone-500 font-bold uppercase tracking-wider mt-0.5">
              {TESTIMONIAL.role} / {TESTIMONIAL.location}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
