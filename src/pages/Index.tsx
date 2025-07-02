import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <HeroSection />
      <GameGrid />
      <Footer />
    </div>
  );
};

export default Index;
