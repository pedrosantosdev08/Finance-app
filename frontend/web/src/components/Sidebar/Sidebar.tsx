import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/transactions": "Transações",
  "/objetives": "Objetivos",
  "/profile": "Perfil",
  "/settings": "Configurações",
};

export default function Sidebar() {
  const { pathname } = useLocation();

  const title = titles[pathname] ?? "";

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h1>{title}</h1>
      </header>

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
