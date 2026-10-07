import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="band band-ink">
      <div className="container-page">
        <p className="kicker">Erro 404</p>
        <h1 className="title">
          Página <span className="braced">não encontrada</span>
        </h1>
        <Link to="/" className="btn mt-10">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
