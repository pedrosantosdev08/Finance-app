import "../Auth.css";
import { Form } from "../../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../layouts/Auth/AuthLayout";

export default function RegisterScreen() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div>
        <button className="back" onClick={() => navigate("/")}>
          Voltar ao inicio{" "}
        </button>
      </div>
      <Form type="register" />
    </AuthLayout>
  );
}
