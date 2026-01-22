import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Profile() {
    return (
        <div>
            <Sidebar type="settings" />
            <Outlet/>
        </div>
    );
}