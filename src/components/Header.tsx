import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gaming-dark border-b border-gaming-border sticky top-0 z-50 backdrop-blur-md bg-gaming-dark/90">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gaming-primary to-gaming-secondary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">Δ</span>
            </div>
            <span className="text-white font-bold text-xl">Delta Store</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search games..." 
                className="pl-10 bg-gaming-card border-gaming-border text-white placeholder:text-muted-foreground focus:border-gaming-primary"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gaming-primary transition-colors">Store</a>
            <a href="#" className="text-white hover:text-gaming-primary transition-colors">Library</a>
            <a href="#" className="text-white hover:text-gaming-primary transition-colors">News</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="gaming" size="sm" className="hidden md:flex">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-gaming-secondary text-gaming-dark text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t border-gaming-border pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search games..." 
                className="pl-10 bg-gaming-card border-gaming-border text-white placeholder:text-muted-foreground"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-white hover:text-gaming-primary transition-colors py-2">Store</a>
              <a href="#" className="text-white hover:text-gaming-primary transition-colors py-2">Library</a>
              <a href="#" className="text-white hover:text-gaming-primary transition-colors py-2">News</a>
            </nav>
            <Button variant="gaming" className="w-full">
              <User className="w-4 h-4" />
              Sign In
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;