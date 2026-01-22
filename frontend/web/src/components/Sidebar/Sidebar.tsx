import { NavLink } from "react-router-dom";
import "./Sidebar.css";

type SidebarType =
  | "dashboard"
  | "transactions"
  | "objetives"
  | "profile"
  | "settings";

export default function Sidebar({ type }: { type?: SidebarType }) {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h1>
          {type === "dashboard"
            ? "Dashboard"
            : type === "transactions"
            ? "Transações"
            : type === "objetives"
            ? "Objetivos"
            : type === "profile"
            ? "Perfil"
            : type === "settings"
            ? "Configurações"
            : ""}
        </h1>
      </header>

      {/* MENU PRINCIPAL */}
      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className="sidebar-item">
          Dashboard
        </NavLink>

        <NavLink to="/transactions" className="sidebar-item">
          Transações
        </NavLink>

        <NavLink to="/objetives" className="sidebar-item">
          Objetivos
        </NavLink>
      </nav>

      {/* FOOTER */}
      <nav className="sidebar-footer">
        <NavLink to="/profile" className="sidebar-item-footer">
          Perfil
        </NavLink>

        <NavLink to="/settings" className="sidebar-item-footer">
          Configurações
        </NavLink>
      </nav>
    </aside>
  );
}
