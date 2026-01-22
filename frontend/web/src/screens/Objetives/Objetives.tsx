import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Objetives() {
    return (
        <div>
            <Sidebar type="objetives" />
            <Outlet/>
        </div>
    );
}