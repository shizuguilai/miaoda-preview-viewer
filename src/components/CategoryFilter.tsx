import { Button } from "@/components/ui/button";
import { Zap, Target, Rocket, Car, Gamepad2, Sword } from "lucide-react";

const categories = [
  { name: "All Games", icon: Gamepad2, count: 245 },
  { name: "Action", icon: Zap, count: 89 },
  { name: "FPS", icon: Target, count: 67 },
  { name: "Racing", icon: Car, count: 34 },
  { name: "Sci-Fi", icon: Rocket, count: 52 },
  { name: "Strategy", icon: Sword, count: 41 },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-gaming-card border border-gaming-border rounded-lg p-6 mb-8">
      <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          
          return (
            <Button
              key={category.name}
              variant={isSelected ? "gaming" : "outline"}
              className={`flex flex-col items-center p-4 h-auto space-y-2 ${
                isSelected 
                  ? "border-gaming-primary shadow-[0_0_15px_hsl(var(--gaming-primary)/0.3)]" 
                  : "border-gaming-border hover:border-gaming-primary/50"
              }`}
              onClick={() => onCategoryChange(category.name)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-xs opacity-70">({category.count})</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;