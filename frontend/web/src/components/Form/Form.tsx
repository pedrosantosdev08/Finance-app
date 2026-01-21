import { Link } from "react-router-dom";
import "./Form.css";

export function Form({ type }: { type?: "login" | "register" }) {
  return (
    <>
      <div className="form-wrapper">
        <form className="form-container">
          <h1>{type === "login" ? "Login" : "Cadastro"}</h1>
          <p>
            {type === "login"
              ? "Faça login para continuar"
              : "Crie uma conta para continuar"}
          </p>

          <label htmlFor="Usuário">Usuario</label>
          <input id="Usuario" type="text" placeholder="Usuário" />

          {type === "register" && (
            <>
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                type="email"
                placeholder="seu.email@exemplo.com"
              />
            </>
          )}

          <label htmlFor="Senha">Senha</label>
          <input id="Senha" type="password" placeholder="Senha" />

          {type === "register" && (
            <>
              <label htmlFor="ConfirmarSenha">Confirmar senha</label>
              <input
                id="ConfirmarSenha"
                type="password"
                placeholder="Confirmar senha"
              />
            </>
          )}

          <button type="submit" className="button">
            {type === "login" ? "Entrar" : "Cadastrar"}
          </button>
          <p className="auth-link">
            {type === "login" ? (
              <>
                Não tem uma conta? <Link to="/register">Cadastre-se</Link>
              </>
            ) : (
              <>
                Já tem uma conta? <Link to="/login">Faça login</Link>
              </>
            )}
          </p>
        </form>
      </div>
    </>
  );
  ("");
}
