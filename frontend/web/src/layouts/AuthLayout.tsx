import "./AuthLayout.css";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-page">
      {children}
    </div>
  );
}