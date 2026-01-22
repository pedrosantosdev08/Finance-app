import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
    return (
        <div>
            <Sidebar type="dashboard" />
            <Outlet/>
        </div>
    );
}