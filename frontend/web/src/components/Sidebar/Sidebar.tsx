import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const titles: Record<string, string> = {
  "user/dashboard": "Dashboard",
  "user/transactions": "Transações",
  "user/objetives": "Objetivos",
  "user/profile": "Perfil",
  "user/settings": "Configurações",
};

export default function Sidebar() {
  const { pathname } = useLocation();

  const title = titles[pathname.replace("/", "")] ?? "";


  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h1>{title}</h1>
      </header>

      <nav className="sidebar-menu">
        <NavLink to="/user/dashboard" className="sidebar-item">
          Dashboard
        </NavLink>

        <NavLink to="/user/transactions" className="sidebar-item">
          Transações
        </NavLink>

        <NavLink to="/user/objetives" className="sidebar-item">
          Objetivos
        </NavLink>
      </nav>

      <nav className="sidebar-footer">
        <NavLink to="/user/profile" className="sidebar-item-footer">
          Perfil
        </NavLink>

        <NavLink to="/user/settings" className="sidebar-item-footer">
          Configurações
        </NavLink>
      </nav>
    </aside>
  );
}
