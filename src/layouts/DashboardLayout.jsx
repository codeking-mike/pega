import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout(){
  return (
    <div className="flex min-h-[80vh]">
      <aside className="w-64 p-4 border-r space-y-3">
        <Link to="/dashboard" className="block">Overview</Link>
        <Link to="/dashboard/deposit" className="block">Deposit</Link>
        <Link to="/dashboard/withdrawal" className="block">Withdrawal</Link>
        <Link to="/dashboard/history" className="block">Trade History</Link>
        <Link to="/dashboard/support" className="block">Support</Link>
        <Link to="/dashboard/profile" className="block">Profile</Link>
        <Link to="/dashboard/settings" className="block">Account Settings</Link>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
