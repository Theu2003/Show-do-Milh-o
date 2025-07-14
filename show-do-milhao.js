// Jogo Show do Milhão - Implementação principal
// Desenvolvido para rodar no terminal com Node.js

const readline = require('readline');

const perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    alternativas: ['A) Rio de Janeiro', 'B) Brasília', 'C) São Paulo'],
    correta: 1
  },
  {
    pergunta: 'Quem pintou a Mona Lisa?',
    alternativas: ['A) Leonardo da Vinci', 'B) Pablo Picasso', 'C) Michelangelo'],
    correta: 0
  },
  {
    pergunta: 'Qual o maior planeta do sistema solar?',
    alternativas: ['A) Terra', 'B) Júpiter', 'C) Saturno'],
    correta: 1
  },
  {
    pergunta: 'Em que continente fica o Egito?',
    alternativas: ['A) África', 'B) Ásia', 'C) Europa'],
    correta: 0
  },
  {
    pergunta: 'Qual é o elemento químico representado por O?',
    alternativas: ['A) Ouro', 'B) Oxigênio', 'C) Prata'],
    correta: 1
  },
  {
    pergunta: 'Quem escreveu Dom Quixote?',
    alternativas: ['A) William Shakespeare', 'B) Miguel de Cervantes', 'C) Machado de Assis'],
    correta: 1
  },
  {
    pergunta: 'Qual é o menor país do mundo?',
    alternativas: ['A) Vaticano', 'B) Mônaco', 'C) San Marino'],
    correta: 0
  },
  {
    pergunta: 'Em que ano o homem pisou na Lua pela primeira vez?',
    alternativas: ['A) 1969', 'B) 1972', 'C) 1959'],
    correta: 0
  },
  {
    pergunta: 'Qual é o animal símbolo da Austrália?',
    alternativas: ['A) Canguru', 'B) Coala', 'C) Ornitorrinco'],
    correta: 0
  },
  {
    pergunta: 'Quem descobriu o Brasil?',
    alternativas: ['A) Cristóvão Colombo', 'B) Pedro Álvares Cabral', 'C) Vasco da Gama'],
    correta: 1
  },
  {
    pergunta: 'Qual é o maior oceano do mundo?',
    alternativas: ['A) Atlântico', 'B) Índico', 'C) Pacífico'],
    correta: 2
  },
  {
    pergunta: 'Qual é o símbolo químico do ferro?',
    alternativas: ['A) Fe', 'B) Ir', 'C) F'],
    correta: 0
  },
  {
    pergunta: 'Quem foi o primeiro presidente do Brasil?',
    alternativas: ['A) Getúlio Vargas', 'B) Deodoro da Fonseca', 'C) Juscelino Kubitschek'],
    correta: 1
  },
  {
    pergunta: 'Qual é a moeda oficial do Japão?',
    alternativas: ['A) Yuan', 'B) Won', 'C) Iene'],
    correta: 2
  },
  {
    pergunta: 'Qual é o maior país do mundo em extensão territorial?',
    alternativas: ['A) Canadá', 'B) China', 'C) Rússia'],
    correta: 2
  }
];

const premiacoes = [
  1000, 5000, 10000, 25000, 50000, 100000, 150000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 1000000
];

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function perguntarNome(rl) {
  return new Promise(resolve => {
    rl.question('Qual seu nome? ', nome => {
      resolve(nome.trim());
    });
  });
}

function perguntarAlternativa(rl, texto) {
  return new Promise(resolve => {
    rl.question(texto, resposta => {
      resolve(resposta.trim().toUpperCase());
    });
  });
}

async function jogar() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Bem-vindo ao Show do Milhão!');
  const nome = await perguntarNome(rl);
  let rodada = 0;
  let premio = 0;
  let perguntasRodada = perguntas.slice();
  embaralhar(perguntasRodada);
  let ultimaRespostaCorreta = null;

  while (rodada < 5 && rodada < perguntasRodada.length) {
    const perguntaAtual = perguntasRodada[rodada];
    const valorRodada = premiacoes[rodada];
    console.log(`\nRodada ${rodada + 1}`);
    console.log(`Prêmio da rodada: R$ ${valorRodada.toLocaleString()}`);
    console.log(perguntaAtual.pergunta);
    perguntaAtual.alternativas.forEach((alt, idx) => {
      console.log(alt);
    });
    console.log('Digite a letra da alternativa (A, B, C) ou P para Parar:');
    const resposta = await perguntarAlternativa(rl, '> ');

    if (resposta === 'P') {
      console.log(`Você decidiu parar. Prêmio final: R$ ${premio.toLocaleString()}`);
      break;
    }

    const idxResposta = ['A', 'B', 'C'].indexOf(resposta);
    if (idxResposta === perguntaAtual.correta) {
      premio = valorRodada;
      ultimaRespostaCorreta = perguntaAtual.alternativas[perguntaAtual.correta];
      console.log('Resposta correta!');
      rodada++;
      if (rodada === 5) {
        console.log('Parabéns! Você completou todas as rodadas!');
      }
    } else {
      ultimaRespostaCorreta = perguntaAtual.alternativas[perguntaAtual.correta];
      console.log('Resposta errada!');
      console.log(`A resposta correta era: ${ultimaRespostaCorreta}`);
      premio = rodada > 0 ? premiacoes[rodada - 1] : 0;
      break;
    }
  }

  console.log('\nResumo do jogo:');
  console.log(`Jogador: ${nome}`);
  console.log(`Rodada alcançada: ${rodada} de 5`);
  if (ultimaRespostaCorreta) {
    console.log(`Última resposta correta: ${ultimaRespostaCorreta}`);
  }
  console.log(`Premiação final: R$ ${premio.toLocaleString()}`);

  const jogarNovamente = await perguntarAlternativa(rl, '\nDeseja jogar novamente? (S/N): ');
  rl.close();
  if (jogarNovamente === 'S') {
    jogar();
  } else {
    console.log('Obrigado por jogar o Show do Milhão!');
  }
}

jogar();
