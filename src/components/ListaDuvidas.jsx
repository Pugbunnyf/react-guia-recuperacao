import { useState } from "react";

function ListaDuvidas() {
  const [texto, setTexto] = useState("");
  const [duvidas, setDuvidas] = useState([]);
  const [mensagem, setMensagem] = useState("");

  function adicionarDuvida() {
    const duvidaLimpa = texto.trim();

    if (duvidaLimpa === "") {
      setMensagem("escreva uma dúvida antes de cadastrar");
      return;
    }

    const novaDuvida = { id: Date.now(), texto: duvidaLimpa };
    setDuvidas([...duvidas, novaDuvida]);
    setTexto("");
    setMensagem("");
  }

  function removerDuvida(id) {
    setDuvidas(duvidas.filter((duvida) => duvida.id !== id));
  }

  return (
    <section className="duvidas">
      <h2>minhas duvidas</h2>
      <p>registre oq nao ficou bom para eu corrigir depois</p>

      <div className="campo">
        <input
          type="text"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          placeholder="Digite sua dúvida"
          aria-label="Digite sua dúvida"/>
        <button type="button" className="botao" onClick={adicionarDuvida}>cadastrar duvida</button>
      </div>

      {mensagem !== "" && (
        <p className="mensagem-erro" role="alert"> {mensagem} </p>
      )}
      {duvidas.length === 0 ? (
        <p className="vazio">nenhuma duvida cadastrada ainda</p>)
         : (
        <ul className="lista-duvidas">
          {duvidas.map((duvida) => (
            <li key={duvida.id}>
              <span>{duvida.texto}</span>
              <button
                type="button"
                className="botao-remover"
                onClick={() => removerDuvida(duvida.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListaDuvidas;