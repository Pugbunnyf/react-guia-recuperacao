function CardConceito(props) {
  const { conteudo, revisado, aoAlternar } = props;

  return (
    <article className={revisado ? "card card-revisado" : "card"}>
      <h2>{conteudo.titulo}</h2>
      <p>{conteudo.explicacao}</p>
      <h3>exemplo</h3>
      <pre>
        <code>{conteudo.exemplo}</code>
      </pre>
      {conteudo.erro && (
        <section className="erro">
          <h3>erro comum e correçao</h3>
          <p>{conteudo.erro.descricao}</p>
          <p className="rotulo rotulo-errado">errado</p>
          <pre>
            <code>{conteudo.erro.codigoErrado}</code>
          </pre>
          <p>{conteudo.erro.correcao}</p>
          <p className="rotulo rotulo-certo">correto</p>
          <pre>
            <code>{conteudo.erro.codigoCorreto}</code>
          </pre>
        </section>
      )}
      
      <button type="button" className={revisado ? "botao botao-desfazer" : "botao"}
        onClick={() => aoAlternar(conteudo.id)} aria-pressed={revisado}>
        {revisado ? "Revisado — desmarcar" : "Marcar revisado"}
      </button>
    </article>
  );
}

export default CardConceito;