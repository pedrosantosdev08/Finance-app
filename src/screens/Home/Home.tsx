import "./HomeStyle.css";
import Dashboard from "../../assets/dashboard.png";
import HistoryTransaction from "../../assets/historyTransaction.png";
import Objetive from "../../assets/objetive.png";
import HeroBanner from "../../assets/hero-banner.png";
import Logo from "../../assets/logo-monervy.png";

export function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo Monervy" />
        </div>
        <div className="auth-actions">
          <button>Login</button>
          <button>Cadastre-se</button>
        </div>
      </header>

      <main>
        <section className="sobre-nos">
          <div className="hero">
            <img src={HeroBanner} alt="Banner principal" />
          </div>
        </section>

        <section className="funcionalidades">
          <h2>Nossas Funcionalidades</h2>
          <p>
            Recursos essenciais para acompanhar suas finanças, entender seus
            hábitos de consumo e planejar objetivos de forma organizada.
          </p>

          <article className="card-function">
            <img src={Dashboard} alt="Dashboard financeiro" />
            <div className="card-text">
              <h3>Dashboard</h3>
              <p>
                Visualize todas as suas métricas e o fluxo de caixa em um único
                painel intuitivo e fácil de usar.
              </p>
            </div>
          </article>

          <article className="card-function">
            <img src={HistoryTransaction} alt="Histórico de transações" />
            <div className="card-text">
              <h3>Histórico de Transações</h3>
              <p>
                Consulte todas as suas entradas e saídas detalhadas, com filtros
                e categorias para melhor análise financeira.
              </p>
            </div>
          </article>

          <article className="card-function">
            <img src={Objetive} alt="Definição de objetivos" />
            <div className="card-text">
              <h3>Definição de Objetivos</h3>
              <p>
                Planeje suas metas financeiras e acompanhe seu progresso de
                forma prática e visual.
              </p>
            </div>
          </article>

          <article className="call-to-action">
            <p>
              Comece agora a organizar suas finanças e tenha mais controle sobre
              o seu dinheiro.
            </p>
          </article>
        </section>
      </main>

      <footer>
        <p>FinanceApp &copy; 2026</p>
        <section className="contato">
          <p>Contato</p>
          <ul className="nav-footer">
            <li>
              <a href="https://github.com/pedrosantosdev08" target="_blank">
                Github
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/pedrodevsantos/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default Home;
