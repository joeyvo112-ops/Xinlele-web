import * as Icons from "lucide-react";
import { CATEGORIES } from "../data";

interface CategoryListProps {
  onCategorySelect?: (category: string) => void;
  selectedCategory?: string;
}

export default function CategoryList({ onCategorySelect, selectedCategory }: CategoryListProps) {
  
  // Custom Icon Selector Map safely matching the Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Nut":
        return (
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6"
          >
            {/* Behind shell */}
            <path d="M48 55 C54 62 68 58 74 50 C80 42 78 28 66 22 C64 21 62 20 60 20" />
            
            {/* Main front shell */}
            <path d="M22 68 C12 58 15 42 28 32 C34 27 41 29 45 34 C49 39 53 39 57 34 C61 29 68 27 74 32 C87 42 90 58 80 68 C74 74 67 71 63 66 C59 61 55 61 51 66 C47 71 40 74 34 74 C28 74 25 71 22 68 Z" />
            
            {/* Custom shell texture/dashes */}
            <path d="M30 46 L34 42" />
            <path d="M38 52 L42 48" />
            <path d="M32 58 L36 54" />
            <path d="M42 60 L46 56" />

            <path d="M56 46 L60 42" />
            <path d="M64 52 L68 48" />
            <path d="M58 58 L62 54" />
            <path d="M68 60 L72 56" />
          </svg>
        );
      case "Sprout":
        return (
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6"
          >
            {/* Shelled peanut / peanut kernel contour matching uploaded photo */}
            <path d="M 21 44 C 18 30, 40 22, 65 28 C 80 32, 85 41, 84 52 C 83 66, 62 76, 38 72 C 24 70, 23 54, 21 44 Z" />
            
            {/* Longitudinal grain stripes on seed skin */}
            <path d="M 26 40 C 40 33, 60 35, 75 42" />
            <path d="M 24 50 C 42 46, 62 48, 79 53" />
            <path d="M 28 60 C 45 58, 62 59, 75 62" />
          </svg>
        );
      case "Candy":
        return <Icons.Candy className="h-6 w-6 stroke-[1.5]" />;
      case "Soup":
        return (
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6"
          >
            {/* Spoon handle on left */}
            <path d="M 22 48 L 10 33" />

            {/* Chopsticks holding noodles */}
            {/* Back Chopstick */}
            <line x1="24" y1="12" x2="91" y2="12" />
            
            {/* Vertical noodles lifted up */}
            <path d="M 38 12 L 38 55" />
            <path d="M 47 12 L 47 55" />
            <path d="M 56 12 L 56 55" />
            <path d="M 65 22 L 65 55" />

            {/* Front Chopstick */}
            <line x1="24" y1="22" x2="91" y2="22" />

            {/* Noodles inside the bowl (curves) */}
            <path d="M 17 55 C 22 38, 42 38, 48 55" />
            <path d="M 33 55 C 38 38, 58 38, 64 55" />
            <path d="M 50 55 C 55 38, 75 38, 81 55" />

            {/* Bowl Rim line */}
            <line x1="10" y1="55" x2="90" y2="55" />

            {/* Bowl Body outline */}
            <path d="M 14 55 C 14 80, 34 90, 50 90 C 66 90, 86 80, 86 55" />

            {/* Bowl Footstand */}
            <path d="M 38 90 L 38 93 C 38 95, 62 95, 62 93 L 62 90" />
          </svg>
        );
      case "Leaf":
        return <Icons.Leaf className="h-6 w-6 stroke-[1.5]" />;
      case "Cookie":
        return <Icons.Cookie className="h-6 w-6 stroke-[1.5]" />;
      default:
        return <Icons.Activity className="h-6 w-6 stroke-[1.5]" />;
    }
  };

  return (
    <div className="relative -mt-16 z-20 max-w-5xl mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-wrap justify-center items-center gap-6 border border-border-earth/10">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.label;
          return (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => onCategorySelect && onCategorySelect(cat.label)}
              className={`flex flex-col items-center justify-center p-4 hover:scale-105 transition-all w-[110px] md:w-[130px] rounded-xl cursor-pointer select-none group text-center space-y-3 ${
                isSelected 
                  ? "bg-primary/5 text-primary border border-primary/20 shadow-xs" 
                  : "bg-stone-50/50 hover:bg-stone-50 text-earth-dark/90 border border-transparent"
              }`}
            >
              {/* Circular Icon framing with gold-warm tones as Image 1 */}
              <div className={`p-3.5 rounded-full flex items-center justify-center transition-colors shadow-xs ${
                isSelected 
                  ? "bg-primary text-white" 
                  : "bg-accent/15 text-primary group-hover:bg-accent/35 group-hover:text-secondary"
              }`}>
                {renderIcon(cat.icon)}
              </div>
              <span className={`text-[11px] md:text-xs font-display font-extrabold tracking-tight line-clamp-2 leading-tight min-h-[28px] md:min-h-[32px] flex items-center justify-center`}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
