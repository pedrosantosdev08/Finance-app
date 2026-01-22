import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AppLayout } from "../../layouts/App/AppLayout";

export default function Objetives() {
    return (
        <div>
            <AppLayout>
                
                <Outlet/>
            </AppLayout>
        </div>
    );
}