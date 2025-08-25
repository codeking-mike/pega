import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthContext";
import Nav from "./components/Nav";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import OurMarkets from "./pages/public/OurMarkets";
import Contact from "./pages/public/Contact";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Forgot from "./pages/public/Forgot";

import PrivateRoute from "./auth/PrivateRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Deposit from "./pages/dashboard/Deposit";
import Withdrawal from "./pages/dashboard/Withdrawal";
import History from "./pages/dashboard/History";
import Support from "./pages/dashboard/Support";
import Profile from "./pages/dashboard/Profile";
import AccountSettings from "./pages/dashboard/AccountSettings";
import MyDeposits from "./pages/dashboard/MyDeposits";

import PendingDeposits from "./pages/admin/PendingDeposits";
import PendingWithdrawals from "./pages/admin/PendingWithdrawals";
import Users from "./pages/admin/Users";

// import toaster
import { Toaster } from "react-hot-toast";

// New layout for public pages
function PublicLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Add toaster globally */}
        <Toaster position="top-right" reverseOrder={false} />
        
        <Routes>
          {/* Public routes with Nav */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/markets"
            element={
              <PublicLayout>
                <OurMarkets />
              </PublicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicLayout>
                <Contact />
              </PublicLayout>
            }
          />
          <Route
            path="/login"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PublicLayout>
                <Register />
              </PublicLayout>
            }
          />
          <Route
            path="/forgot"
            element={
              <PublicLayout>
                <Forgot />
              </PublicLayout>
            }
          />

          {/* Dashboard routes with dashboard layout */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Overview />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="history" element={<History />} />
            <Route path="support" element={<Support />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path="my-deposits" element={<MyDeposits />} />
          </Route>

          {/* Admin-only routes */}
          <Route
            path="/admin/deposits"
            element={
              <PrivateRoute roles={["admin"]}>
                <PendingDeposits />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/withdrawals"
            element={
              <PrivateRoute roles={["admin"]}>
                <PendingWithdrawals />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <PrivateRoute roles={["admin"]}>
                <Users />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
