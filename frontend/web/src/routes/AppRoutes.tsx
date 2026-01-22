import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import Dashboard from "../screens/Dashboard/Dashboard";
import Transactions from "../screens/Transactions/Transactions";
import Objetives from "../screens/Objetives/Objetives";
import Settings from "../screens/Settings/Settings";
import Profile from "../screens/Profile/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/objetives" element={<Objetives />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
