import { useState } from "react";
import GameCard from "./GameCard";
import CategoryFilter from "./CategoryFilter";
import deltaForceImage from "@/assets/game-delta-force.jpg";
import battleRoyaleImage from "@/assets/game-battle-royale.jpg";
import spaceCombatImage from "@/assets/game-space-combat.jpg";
import racingImage from "@/assets/game-racing.jpg";

const games = [
  {
    id: 1,
    title: "Delta Force: Elite Operations",
    price: "$39.99",
    originalPrice: "$59.99",
    image: deltaForceImage,
    rating: 4.8,
    category: "FPS",
    isOnSale: true,
  },
  {
    id: 2,
    title: "Cyber Battle Royale",
    price: "$29.99",
    image: battleRoyaleImage,
    rating: 4.6,
    category: "Action",
    isOnSale: false,
  },
  {
    id: 3,
    title: "Galactic Combat",
    price: "$49.99",
    originalPrice: "$69.99",
    image: spaceCombatImage,
    rating: 4.9,
    category: "Sci-Fi",
    isOnSale: true,
  },
  {
    id: 4,
    title: "Neon Velocity",
    price: "$34.99",
    image: racingImage,
    rating: 4.5,
    category: "Racing",
    isOnSale: false,
  },
  {
    id: 5,
    title: "Tactical Strike Force",
    price: "$44.99",
    originalPrice: "$59.99",
    image: deltaForceImage,
    rating: 4.7,
    category: "FPS",
    isOnSale: true,
  },
  {
    id: 6,
    title: "Urban Warfare",
    price: "$39.99",
    image: battleRoyaleImage,
    rating: 4.4,
    category: "Action",
    isOnSale: false,
  },
];

const GameGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Games");

  const filteredGames = selectedCategory === "All Games" 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Game Store</h2>
        <p className="text-gray-400">Discover amazing games for every type of player</p>
      </div>

      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            price={game.price}
            originalPrice={game.originalPrice}
            image={game.image}
            rating={game.rating}
            category={game.category}
            isOnSale={game.isOnSale}
          />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No games found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default GameGrid;