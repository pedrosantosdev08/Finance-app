import Sidebar from "../../components/Sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-content">
        {children}
      </main>
    </div>
  );
}
