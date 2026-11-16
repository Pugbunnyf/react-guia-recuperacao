function Header(props) {
  const porcentagem = (props.revisados / props.total) * 100;

  return (
    <header className="cabecalho">
      <h1>{props.titulo}</h1>
      <p className="subtitulo">{props.subtitulo}</p>
      <div className="progresso">
        <p className="contador">
          revisados: {props.revisados}/{props.total}
        </p>
        <div className="barra" role="progressbar"
          aria-valuemin={0}
          aria-valuemax={props.total}
          aria-valuenow={props.revisados}>
          <div className="barra-preenchida" style={{ width: porcentagem + "%" }} />
        </div>
      </div>
    </header>
  );
}

export default Header;