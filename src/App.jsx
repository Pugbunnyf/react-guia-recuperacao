import { useState } from "react";
import Header from "./components/Header.jsx";
import CardConceito from "./components/CardConceito.jsx";
import ListaDuvidas from "./components/ListaDuvidas.jsx";
import { conteudos } from "./data/conteudos.js";

function App() {
  const [revisados, setRevisados] = useState([]);
  function alternarRevisado(id) {
    if (revisados.includes(id)) {
      setRevisados(revisados.filter((item) => item !== id));} 
      else {
      setRevisados([...revisados, id]);
    }
  }

  return (
    <main className="pagina">
      <Header
        titulo="trabalho recuperaçao"
        revisados={revisados.length}
        total={conteudos.length}/>

      <section className="cards">
        {conteudos.map((conteudo) => (
          <CardConceito
            key={conteudo.id}
            conteudo={conteudo}
            revisado={revisados.includes(conteudo.id)}
            aoAlternar={alternarRevisado}/>
        ))}
      </section>
      <ListaDuvidas />
    </main>
  );
}

export default App;