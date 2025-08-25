// src/pages/Overview.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import client from "../../api/client";
import { toast } from "react-hot-toast";

export default function Overview() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const meRes = await client.get("/me");
        setUser(meRes.data);

        const txRes = await client.get("/transactions");
        setTransactions(txRes.data);
      } catch (err) {
        console.error("Error fetching overview data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Normalize values
  function normalizeWallet(user) {
    return {
      ...user,
      total_usd: parseFloat(user.total_usd),
      total_btc: parseFloat(user.total_btc),
      profit_usd: parseFloat(user.profit_usd),
      profit_btc: parseFloat(user.profit_btc),
    };
  }

  // 🔹 Handles withdraw: moves profit into total balance
  const handleWithdrawProfit = async () => {
    if (!user) return;
    try {
      const updatedUser = {
        ...user,
        total_usd: Number(user.total_usd) + Number(user.profit_usd),
        total_btc: Number(user.total_btc) + Number(user.profit_btc),
        profit_usd: 0,
        profit_btc: 0,
      };
      setUser(updatedUser);

      const res = await client.post("/withdraw-profit");
      if (res.status === 200) {
        setUser(normalizeWallet(res.data.user));
        toast.success("Profit withdrawn successfully 🎉", {
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (err) {
      console.error("Error withdrawing profit:", err);
    }
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {user && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* 🔹 Total Balance Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl backdrop-blur-md bg-white/20 border border-white/20 shadow-lg text-white flex flex-col justify-between transition"
          >
            <div>
              <h2 className="text-sm font-medium opacity-80">Total Balance</h2>
              <p className="text-3xl font-bold mt-2">${user.total_usd}</p>
              <p className="text-sm opacity-70">{user.total_btc} BTC</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => navigate("/dashboard/deposit")}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:bg-white/30 rounded-lg text-sm transition"
              >
                <ArrowDownTrayIcon className="h-4 w-4" /> Deposit
              </button>
              <button
                onClick={() => navigate("/dashboard/withdrawal")}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500  hover:bg-white/30 rounded-lg text-sm transition"
              >
                <ArrowUpTrayIcon className="h-4 w-4" /> Withdraw
              </button>
            </div>
          </motion.div>

          {/* 🔹 Profit Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl backdrop-blur-md bg-white/20 border border-white/20 shadow-lg text-white flex flex-col justify-between transition"
          >
            <div>
              <h2 className="text-sm font-medium opacity-80">Profit</h2>
              <p className="text-3xl font-bold mt-2">+${user.profit_usd}</p>
              <p className="text-sm opacity-70">+{user.profit_btc} BTC</p>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleWithdrawProfit}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:bg-white/30 rounded-lg text-sm transition"
              >
                <ArrowUpTrayIcon className="h-4 w-4" /> Withdraw Profit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Transactions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-white"
      >
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        {loading ? (
          <p>Loading transactions...</p>
        ) : transactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-300 border-b border-white/10">
                  <th className="py-2">ID</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, idx) => (
                  <motion.tr
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-2">{tx.id}</td>
                    <td>{tx.type}</td>
                    <td>{new Date(tx.created_at).toLocaleDateString()}</td>
                    <td>${tx.amount_usd}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No transactions found.</p>
        )}
      </motion.div>
    </div>
  );
}
