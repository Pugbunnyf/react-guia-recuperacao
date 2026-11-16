import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CardConceito from '../../../../Downloads/react-guia-recuperacao/react-guia-recuperacao/src/components/CardConceito'

function App() {
  const [revisados, setRevisado(id) {
    if (revisados.includes(id)) {
      setRevisados (revisados.filter((item) => item !== id));
    } else {
      setRevisados ([revisados, id])
    }
  }]


return (
  <main className= "pagina">
    <section className= "cards">
      {conteudos.map((conteudo) => (
        <CardConceito
        key={conteudo.id}
        revisad0={revisados.includes(conteudo.id)}
        aoAlternar={alternarRevisado}/>
      ))}
    </section>

    <listaDuvidas/>
  </main>
);
}

export default App