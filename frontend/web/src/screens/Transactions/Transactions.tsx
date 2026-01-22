import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layouts/App/AppLayout";

export default function Transactions() {
  return (
    <div>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </div>
  );
}
