import { useState } from "react";
import { motion } from "framer-motion";
import client from "../../api/client"; // axios instance

export default function Withdrawal() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await client.post("/withdrawals", {
        amount,
        method,
        details,
      });

      setMessage(res.data.message);
      setAmount("");
      setMethod("");
      setDetails({});
    } catch (err) {
      setMessage(err.response?.data?.message || "Error submitting withdrawal");
    } finally {
      setLoading(false);
    }
  };

  // Render dynamic fields
  const renderMethodFields = () => {
    switch (method) {
      case "usdt":
        return (
          <>
            <label className="block text-sm text-gray-300">Wallet Address</label>
            <input
              type="text"
              value={details.wallet_address || ""}
              onChange={(e) =>
                setDetails({ ...details, wallet_address: e.target.value })
              }
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md mb-3"
            />
            <label className="block text-sm text-gray-300">Network</label>
            <input
              type="text"
              value={details.network || ""}
              onChange={(e) =>
                setDetails({ ...details, network: e.target.value })
              }
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md mb-3"
            />
          </>
        );
      case "paypal":
        return (
          <>
            <label className="block text-sm text-gray-300">PayPal Email</label>
            <input
              type="email"
              value={details.paypal_email || ""}
              onChange={(e) =>
                setDetails({ ...details, paypal_email: e.target.value })
              }
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md mb-3"
            />
          </>
        );
      case "wire_transfer":
        return (
          <>
            <label className="block text-sm text-gray-300">Bank Name</label>
            <input
              type="text"
              value={details.bank_name || ""}
              onChange={(e) =>
                setDetails({ ...details, bank_name: e.target.value })
              }
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md mb-3"
            />
            <label className="block text-sm text-gray-300">Account Name</label>
            <input
              type="text"
              value={details.account_name || ""}
              onChange={(e) =>
                setDetails({ ...details, account_name: e.target.value })
              }
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md mb-3"
            />
            <label className="block text-sm text-gray-300">Account Number</label>
            <input
              type="text"
              value={details.account_number || ""}
              onChange={(e) =>
                setDetails({ ...details, account_number: e.target.value })
              }
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md mb-3"
            />
            <label className="block text-sm text-gray-300">SWIFT Code</label>
            <input
              type="text"
              value={details.swift_code || ""}
              onChange={(e) =>
                setDetails({ ...details, swift_code: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md mb-3"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto mt-10 p-6 rounded-2xl glassmorphism shadow-xl text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">🏦 Withdraw Funds</h2>

      {message && (
        <div className="mb-4 text-center text-indigo-300 font-medium">{message}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Amount */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter withdrawal amount"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md"
          />
        </div>

        {/* Method */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Withdrawal Method</label>
          <select
            value={method}
            onChange={(e) => {
              setMethod(e.target.value);
              setDetails({});
            }}
            required
            className="w-full p-3 rounded-xl bg-gray-900 text-white border border-white/20 backdrop-blur-md"
          >
            <option value="">Select Method</option>
            <option value="usdt">USDT</option>
            <option value="paypal">PayPal</option>
            <option value="wire_transfer">Wire Transfer</option>
          </select>
        </div>

        {/* Dynamic Fields */}
        {renderMethodFields()}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold transition ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit Withdrawal"}
        </button>
      </form>
    </motion.div>
  );
}
