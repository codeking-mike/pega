import React, { useEffect, useState } from "react";

const MarketData = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
        );
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-400">
        Loading market data...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🌐 Cryptocurrency Market Data</h2>
      <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-400 border-b border-gray-700 pb-2">
        <span>Name</span>
        <span>Price (USD)</span>
        <span>24h Change</span>
        <span>Market Cap</span>
        
      </div>

      {coins.map((coin) => (
        <div
          key={coin.id}
          className="grid grid-cols-5 gap-4 py-3 border-b border-gray-800 text-sm items-center"
        >
          <div className="flex items-center gap-2">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <span className="font-semibold">{coin.name}</span>
          </div>
          <span>${coin.current_price.toLocaleString()}</span>
          <span
            className={`${
              coin.price_change_percentage_24h > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
          <span>${coin.market_cap.toLocaleString()}</span>
          
        </div>
      ))}
    </div>
  );
};

export default MarketData;
