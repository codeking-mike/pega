import { useState } from "react";
import toast from "react-hot-toast";
import { Copy, Upload } from "lucide-react";
import { motion } from "framer-motion";
import client from "../../api/client";

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionProof, setTransactionProof] = useState(null);
  const [loading, setLoading] = useState(false);

  const walletAddresses = {
    bitcoin: "bc1qexamplebtcaddress123",
    ethereum: "0xexampleethaddress123",
    usdt: "Texampleusdtaddress123",
    paypal: "paypal.me/exampleuser",
  };

  const handleCopy = () => {
    if (!selectedMethod) {
      toast.error("Please select a deposit method first.");
      return;
    }
    navigator.clipboard.writeText(walletAddresses[selectedMethod]);
    toast.success("Wallet address copied!");
  };

  const handleProofUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTransactionProof(file);
      toast.success("Proof uploaded successfully!");
    } else {
      toast.error("Failed to upload proof.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMethod) return toast.error("Select a deposit method.");
    if (!amount || parseFloat(amount) <= 0) return toast.error("Enter a valid deposit amount.");
    if (!transactionProof) return toast.error("Upload a proof of payment.");

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("method", selectedMethod);
      formData.append("amount_usd", amount);
      formData.append("screenshot", transactionProof);

      await client.post("/deposit", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Deposit request submitted. Awaiting admin verification.");

      setSelectedMethod("");
      setAmount("");
      setTransactionProof(null);
    } catch (error) {
      console.error("Deposit error:", error);
      toast.error(error.response?.data?.message || "Failed to submit deposit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto mt-10 p-6 rounded-2xl glassmorphism shadow-xl text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">💳 Make a Deposit</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Deposit Method */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Select Deposit Method</label>
          <select
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="" disabled>
              Choose a method
            </option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="usdt">USDT</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Wallet Address */}
        {selectedMethod && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 rounded-xl bg-white/10 flex justify-between items-center text-sm"
          >
            <span className="truncate">{walletAddresses[selectedMethod]}</span>
            <button
              type="button"
              onClick={handleCopy}
              className="ml-3 p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
            >
              <Copy size={18} />
            </button>
          </motion.div>
        )}

        {/* Amount */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Deposit Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Upload Proof */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Upload Proof of Payment</label>
          <div className="flex items-center gap-3">
            <input
              type="file"
              onChange={handleProofUpload}
              className="hidden"
              id="proofUpload"
              accept="image/*,.pdf"
            />
            <label
              htmlFor="proofUpload"
              className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <Upload size={18} />
              {transactionProof ? transactionProof.name : "Choose File"}
            </label>
          </div>
        </div>

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
          {loading ? "Submitting..." : "Submit Deposit"}
        </button>
      </form>
    </motion.div>
  );
};

export default Deposit;
