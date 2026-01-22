import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Transactions() {
    return (
        <div>
            <Sidebar type="transactions" />
            <Outlet/>
        </div>
    );
}