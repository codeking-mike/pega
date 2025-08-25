import { useEffect, useState } from "react";
import client from "../../api/client";
import toast from "react-hot-toast";

const MyDeposits = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const res = await client.get("/my-deposits");
        setDeposits(res.data);
      } catch (err) {
        toast.error("Failed to load deposits");
      } finally {
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  if (loading) return <p className="p-6 text-gray-300">Loading deposits...</p>;

  return (
    <div className="p-6 text-gray-200">
      <h2 className="text-2xl font-semibold mb-6">My Deposits</h2>

      {deposits.length === 0 ? (
        <p className="text-gray-400">No deposits found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white/15 rounded-xl shadow-lg">
            <thead>
              <tr className="bg-white/20 text-gray-300">
                <th className="p-3 text-left font-medium">Amount</th>
                <th className="p-3 text-left font-medium">Date</th>
                <th className="p-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((d) => (
                <tr
                  key={d.id}
                  className="border-t border-gray-700 hover:bg-[#2c2c2c] transition"
                >
                  <td className="p-3 font-semibold">${d.amount}</td>
                  <td className="p-3">{new Date(d.created_at).toLocaleString()}</td>
                  <td className="p-3">
                    {d.status === "pending" && (
                      <span className="bg-yellow-600 text-yellow-400 px-3 py-1 rounded-full text-sm">
                        Pending
                      </span>
                    )}
                    {d.status === "approved" && (
                      <span className="bg-green-600 text-green-400 px-3 py-1 rounded-full text-sm">
                        Approved
                      </span>
                    )}
                    {d.status === "rejected" && (
                      <span className="bg-red-600 text-red-400 px-3 py-1 rounded-full text-sm">
                        Rejected
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyDeposits;
