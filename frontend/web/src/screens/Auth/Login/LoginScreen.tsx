import "../Auth.css";
import { Form } from "../../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../../layouts/AuthLayout";

export default function LoginScreen() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div>
        <button className="back" onClick={() => navigate("/")}>
          Voltar ao inicio{" "}
        </button>
      </div>
      <Form type="login" />
    </AuthLayout>
  );
}
