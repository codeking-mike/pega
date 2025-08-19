import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthContext";
import Nav from "./components/Nav";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Plans from "./pages/public/OurMarkets";
import Contact from "./pages/public/Contact";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import PrivateRoute from "./auth/PrivateRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Deposit from "./pages/dashboard/Deposit";
import Withdrawal from "./pages/dashboard/Withdrawal";
import History from "./pages/dashboard/History";
import Support from "./pages/dashboard/Support";
import Profile from "./pages/dashboard/Profile";
import AccountSettings from "./pages/dashboard/AccountSettings";
import OurMarkets from "./pages/public/OurMarkets";

import PendingDeposits from "./pages/admin/PendingDeposits";
import PendingWithdrawals from "./pages/admin/PendingWithdrawals";
import Users from "./pages/admin/Users";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/markets" element={<OurMarkets/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="/dashboard" element={
            <PrivateRoute><DashboardLayout/></PrivateRoute>
          }>
            <Route index element={<Overview/>} />
            <Route path="deposit" element={<Deposit/>} />
            <Route path="withdrawal" element={<Withdrawal/>} />
            <Route path="history" element={<History/>} />
            <Route path="support" element={<Support/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<AccountSettings/>} />
          </Route>

          <Route path="/admin/deposits" element={
            <PrivateRoute roles={['admin']}><PendingDeposits/></PrivateRoute>
          }/>
          <Route path="/admin/withdrawals" element={
            <PrivateRoute roles={['admin']}><PendingWithdrawals/></PrivateRoute>
          }/>
          <Route path="/admin/users" element={
            <PrivateRoute roles={['admin']}><Users/></PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
