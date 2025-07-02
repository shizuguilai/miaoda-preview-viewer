import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gaming-dark border-t border-gaming-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-gaming-primary to-gaming-secondary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">Δ</span>
              </div>
              <span className="text-white font-bold text-xl">Delta Store</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for tactical and action-packed gaming experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Store */}
          <div>
            <h4 className="text-white font-semibold mb-4">Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Browse Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Top Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Coming Soon</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">System Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Download Client</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-primary transition-colors">EULA</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gaming-border mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Delta Store. All rights reserved. Built with passion for gamers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;