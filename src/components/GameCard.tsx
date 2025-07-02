import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

interface GameCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  category: string;
  isOnSale?: boolean;
}

const GameCard = ({ title, price, originalPrice, image, rating, category, isOnSale }: GameCardProps) => {
  return (
    <div className="bg-gaming-card border border-gaming-border rounded-lg overflow-hidden hover:border-gaming-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--gaming-primary)/0.2)] hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isOnSale && (
          <Badge className="absolute top-2 left-2 bg-gaming-secondary text-gaming-dark font-bold">
            SALE
          </Badge>
        )}
        <div className="absolute top-2 right-2 bg-gaming-dark/80 rounded-md px-2 py-1 flex items-center space-x-1">
          <Star className="w-3 h-3 text-gaming-secondary fill-current" />
          <span className="text-white text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <Badge variant="outline" className="mb-2 text-gaming-primary border-gaming-primary">
          {category}
        </Badge>
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {originalPrice && (
              <span className="text-muted-foreground text-sm line-through">{originalPrice}</span>
            )}
            <span className="text-gaming-secondary font-bold text-lg">{price}</span>
          </div>
          
          <Button variant="gaming" size="sm" className="min-w-fit">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;