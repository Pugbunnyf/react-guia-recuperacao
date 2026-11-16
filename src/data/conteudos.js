export const conteudos = [
  {
    id: 1,
    titulo: "Git e GitHub",
    explicacao:
      "O Git guarda o histórico do projeto no seu computador (repositório local). O GitHub é o site onde esse repositório fica publicado (repositório remoto). Cada commit é um registro das mudanças com uma mensagem, o push envia os commits para o GitHub e uma branch é uma linha separada de trabalho, como a branch main.",
    exemplo: `git init -b main
git add .
git commit -m "Criar projeto React"
git push -u origin main`,
  },
  {
    id: 2,
    titulo: "Node.js e npm",
    explicacao:
      "O Node.js permite executar JavaScript fora do navegador, e é com ele que o ambiente de desenvolvimento roda. O npm é o gerenciador de pacotes: instala as dependências declaradas no projeto e executa scripts, como o que inicia o servidor de desenvolvimento. Também é importante conferir as versões instaladas.",
    exemplo: `node -v
npm -v
npm install
npm run dev`,
  },
  {
    id: 3,
    titulo: "React e JSX",
    explicacao:
      "O React é uma biblioteca para construir interfaces a partir de componentes. O JSX é a sintaxe que parece HTML, mas é escrita dentro do JavaScript. Para usar uma variável ou expressão dentro do JSX, colocamos entre chaves, e atributos como a classe usam className em vez de class.",
    exemplo: `function Saudacao() {
  const nome = "Maria";
  return <h1 className="titulo">Olá, {nome}!</h1>;
}`,
  },
  {
    id: 4,
    titulo: "Componentes e props",
    explicacao:
      "Um componente é uma função que devolve JSX, e o nome dele começa com letra maiúscula. Props são os dados que o componente pai envia para o filho, como se fossem os parâmetros da função. O filho apenas lê as props, sem alterá-las. Assim o mesmo componente pode ser reaproveitado com dados diferentes.",
    exemplo: `function Cartao(props) {
  return <p>Curso: {props.nome}</p>;
}

// Uso:
<Cartao nome="React" />`,
    erro: {
      descricao:
        "Nomear o componente com letra minúscula. O React entende que <cartao /> é uma tag HTML comum e não encontra o componente.",
      codigoErrado: `function cartao(props) {
  return <p>{props.nome}</p>;
}

<cartao nome="React" />`,
      correcao:
        "Começar o nome com letra maiúscula, tanto na função quanto no uso.",
      codigoCorreto: `function Cartao(props) {
  return <p>{props.nome}</p>;
}

<Cartao nome="React" />`,
    },
  },
  {
    id: 5,
    titulo: "Estado e Hooks",
    explicacao:
      "O estado guarda uma informação que muda durante o uso, como um contador. O useState devolve o valor atual e a função que o atualiza. Quando chamamos essa função, o React renderiza o componente de novo com a interface atualizada. Hooks só podem ser chamados no nível principal do componente.",
    exemplo: `import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <button onClick={() => setNumero(numero + 1)}>
      Cliques: {numero}
    </button>
  );
}`,
    erro: {
      descricao:
        "Declarar o Hook dentro de uma condição. A ordem dos Hooks precisa ser sempre a mesma a cada renderização.",
      codigoErrado: `function Painel({ ativo }) {
  if (ativo) {
    const [aberto, setAberto] = useState(false);
  }
  return <p>Painel</p>;
}`,
      correcao:
        "Declarar o Hook fora de condições e usar a condição somente no que será exibido.",
      codigoCorreto: `function Painel({ ativo }) {
  const [aberto, setAberto] = useState(false);

  if (!ativo) {
    return null;
  }
  return <p>Painel {aberto ? "aberto" : "fechado"}</p>;
}`,
    },
  },
  {
    id: 6,
    titulo: "Eventos e validação",
    explicacao:
      "Eventos como onClick e onChange recebem uma função que será executada quando a pessoa interage com a tela. Em campos de texto, guardamos o que foi digitado em um estado. Antes de aceitar o valor, validamos com trim(), que remove os espaços do início e do fim, para impedir textos vazios.",
    exemplo: `const [texto, setTexto] = useState("");

<input
  value={texto}
  onChange={(evento) => setTexto(evento.target.value)}
/>

if (texto.trim() === "") {
  // não permite cadastrar
}`,
    erro: {
      descricao:
        "Passar a função já executada no onClick, com parênteses. Ela roda durante a renderização e não no clique.",
      codigoErrado: `<button onClick={enviar()}>Enviar</button>`,
      correcao:
        "Passar a função sem chamá-la, ou uma função que chama enviar quando houver o clique.",
      codigoCorreto: `<button onClick={enviar}>Enviar</button>

// ou, se precisar de argumento:
<button onClick={() => enviar(valor)}>Enviar</button>`,
    },
  },
  {
    id: 7,
    titulo: "Listas e imutabilidade",
    explicacao:
      "Para mostrar uma lista, usamos map() sobre o array e devolvemos um elemento para cada item. Cada elemento precisa de uma key estável e única, como o id do item. No estado nunca alteramos o array diretamente: criamos um novo array com spread ou filter e enviamos para o setter, assim o React percebe a mudança.",
    exemplo: `const [itens, setItens] = useState([]);

// adicionar (novo array)
setItens([...itens, novoItem]);

// remover (novo array)
setItens(itens.filter((item) => item.id !== id));

// exibir
{itens.map((item) => (
  <li key={item.id}>{item.texto}</li>
))}`,
    erro: {
      descricao:
        "Alterar o array do estado diretamente com push(). O array continua sendo o mesmo e o React pode não atualizar a tela.",
      codigoErrado: `function adicionar() {
  itens.push(novoItem);
  setItens(itens);
}`,
      correcao:
        "Criar um novo array com o spread, incluindo o novo item no final.",
      codigoCorreto: `function adicionar() {
  setItens([...itens, novoItem]);
}`,
    },
  },
  {
    id: 8,
    titulo: "Arquitetura web",
    explicacao:
      "O frontend é a parte que a pessoa vê e usa no navegador. O backend roda em um servidor, guarda e processa os dados. A API é a combinação de regras pela qual o frontend pede dados ao backend e recebe uma resposta, geralmente em JSON. O localStorage guarda pequenos dados no próprio navegador. Uma SPA carrega uma única página e troca o conteúdo sem recarregar, e uma PWA é um site que pode ser instalado e usado como aplicativo.",
    exemplo: `Navegador (frontend React)
   -> pede dados (requisição para a API)
Servidor (backend)
   -> devolve a resposta (JSON)
Navegador
   -> guarda em estado e exibe na tela`,
  },
];