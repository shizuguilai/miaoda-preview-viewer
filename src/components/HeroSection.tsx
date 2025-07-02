import { Button } from "@/components/ui/button";
import { Play, ShoppingCart } from "lucide-react";
import deltaForceImage from "@/assets/game-delta-force.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-gaming-dark via-gaming-dark/90 to-gaming-dark flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${deltaForceImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-dark via-gaming-dark/80 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="bg-gaming-secondary text-gaming-dark px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Featured Game
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Delta Force
            <span className="block text-gaming-primary text-4xl md:text-5xl mt-2">
              Elite Operations
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the ultimate tactical warfare with cutting-edge graphics, 
            realistic physics, and intense multiplayer combat. Join the elite forces 
            and dominate the battlefield.
          </p>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-lg line-through">$59.99</span>
              <span className="text-gaming-secondary text-3xl font-bold">$39.99</span>
            </div>
            <span className="bg-gaming-secondary text-gaming-dark px-3 py-1 rounded-md font-bold">
              -33% OFF
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <ShoppingCart className="w-5 h-5" />
              Buy Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gaming-border text-white hover:bg-gaming-primary">
              <Play className="w-5 h-5" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-gaming-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-40 right-40 w-1 h-1 bg-gaming-secondary rounded-full animate-pulse opacity-40 animation-delay-1000" />
      <div className="absolute top-1/2 right-10 w-3 h-3 bg-gaming-primary/30 rounded-full animate-float" />
    </section>
  );
};

export default HeroSection;