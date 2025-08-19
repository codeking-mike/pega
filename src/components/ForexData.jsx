import React, { useEffect, useState } from "react";

const ForexData = () => {
  const [forex, setForex] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "a16d204f32f94e9c980e2b24b81b0a3c"; // Replace with your TwelveData key
  const symbols = "EUR/USD,GBP/USD,USD/JPY"; // Add pairs you want

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${API_KEY}`
        );
        const data = await res.json();

        // TwelveData returns an object with symbols as keys
        const formatted = Object.values(data);
        setForex(formatted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching forex data:", error);
      }
    };

    fetchData();

    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-400">
        Loading forex data...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-3xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">💱 Forex Market Data</h2>
      <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-400 border-b border-gray-700 pb-2">
        <span>Pair</span>
        <span>Price</span>
        <span>Change</span>
        <span>Percent</span>
      </div>

      {forex.map((pair, idx) => (
        <div
          key={idx}
          className="grid grid-cols-4 gap-4 py-3 border-b border-gray-800 text-sm"
        >
          <span className="font-semibold">{pair.symbol}</span>
          <span>{pair.close}</span>
          <span
            className={`${
              parseFloat(pair.change) > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {pair.change}
          </span>
          <span
            className={`${
              parseFloat(pair.percent_change) > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {pair.percent_change}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default ForexData;
