// Jogo Show do Milhão - Implementação principal
// Desenvolvido para rodar no terminal com Node.js

const readline = require('readline');

const perguntas = [
  {
    pergunta: 'Em que estado brasileiro nasceu a apresentadora Xuxa?',
    alternativas: ['A) Rio de Janeiro', 'B) Rio Grande do Sul', 'C) Santa Catarina', 'D) Goiás'],
    correta: 1
  },
  {
    pergunta: 'Qual é o nome dado ao estado da água em forma de gelo?',
    alternativas: ['A) Líquido', 'B) Sólido', 'C) Gasoso', 'D) Vaporoso'],
    correta: 1
  },
  {
    pergunta: 'Qual era o apelido da cantora Elis Regina?',
    alternativas: ['A) Gauchinha', 'B) Paulistinha', 'C) Pimentinha', 'D) Andorinha'],
    correta: 2
  },
  {
    pergunta: 'Quem é a namorada do Mickey?',
    alternativas: ['A) Margarida', 'B) Minnie', 'C) A Pequena Sereia', 'D) Olívia Palito'],
    correta: 1
  },
  {
    pergunta: 'Qual é o personagem do folclore brasileiro que tem uma perna só?',
    alternativas: ['A) Cuca', 'B) Negrinho do Pastoreio', 'C) Boitatá', 'D) Saci-Pererê'],
    correta: 3
  },
  {
    pergunta: 'Fidel Castro nasceu em que país?',
    alternativas: ['A) Jamaica', 'B) Cuba', 'C) El Salvador', 'D) México'],
    correta: 1
  },
  {
    pergunta: 'Quem proclamou a república no Brasil em 1889?',
    alternativas: ['A) Duque de Caxias', 'B) Marechal Rondon', 'C) Dom Pedro II', 'D) Marechal Deodoro'],
    correta: 3
  },
  {
    pergunta: 'Quem é o patrono do exército brasileiro?',
    alternativas: ['A) Marechal Deodoro', 'B) Barão de Mauá', 'C) Duque de Caxias', 'D) Marquês de Pombal'],
    correta: 2
  },
  {
    pergunta: 'Quem era o apresentador que reprovava os calouros tocando uma buzina?',
    alternativas: ['A) Raul Gil', 'B) Bolinha', 'C) Flávio Cavalcanti', 'D) Chacrinha'],
    correta: 3
  },
  {
    pergunta: 'O que era Frankenstein, de Mary Shelley?',
    alternativas: ['A) Monstro', 'B) Gorila', 'C) Príncipe', 'D) Sapo'],
    correta: 0
  },
  {
    pergunta: 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?',
    alternativas: ['A) Virgem', 'B) Aquário', 'C) Capricórnio', 'D) Áries'],
    correta: 2
  },
  {
    pergunta: 'Quem fundou a fábrica de automóveis Ford?',
    alternativas: ['A) Harrison Ford', 'B) Gerald Ford', 'C) Henry Ford', 'D) Anna Ford'],
    correta: 2
  },
  {
    pergunta: 'Qual é a cor que se associa com os grupos ecológicos?',
    alternativas: ['A) Preta', 'B) Vermelha', 'C) Azul', 'D) Verde'],
    correta: 3
  },
  {
    pergunta: 'A água ferve a quantos graus centígrados?',
    alternativas: ['A) 200', 'B) 100', 'C) 170', 'D) 220'],
    correta: 1
  },
  {
    pergunta: 'Quando é comemorado o dia da independência do Brasil?',
    alternativas: ['A) 21 de Abril', 'B) 12 de Outubro', 'C) 7 de Setembro', 'D) 25 de Dezembro'],
    correta: 2
  },
  {
    pergunta: 'Qual lugar é também chamado de Santa Sé?',
    alternativas: ['A) Veneza', 'B) Vitória', 'C) Vancouver', 'D) Vaticano'],
    correta: 3
  },
  {
    pergunta: 'Quem tem por lema a frase: “Sempre alerta”?',
    alternativas: ['A) Médicos', 'B) Escoteiros', 'C) Bombeiros', 'D) Policiais'],
    correta: 1
  },
  {
    pergunta: 'Quem foi o grande amor de Julieta?',
    alternativas: ['A) Romeu', 'B) Orfeu', 'C) Hamlet', 'D) Iago'],
    correta: 0
  },
  {
    pergunta: 'Quantos signos formam o zodíaco?',
    alternativas: ['A) Nove', 'B) Dez', 'C) Onze', 'D) Doze'],
    correta: 3
  },
  {
    pergunta: 'Vatapá é uma comida típica de qual estado?',
    alternativas: ['A) Paraná', 'B) Santa Catarina', 'C) São Paulo', 'D) Bahia'],
    correta: 3
  },
  {
    pergunta: 'Como se chama o lugar onde são armazenadas as balas de um revólver?',
    alternativas: ['A) Cano', 'B) Tambor', 'C) Agulha', 'D) Gatilho'],
    correta: 1
  },
  {
    pergunta: 'Qual personagem da turma da Mônica tem apenas cinco fios de cabelo?',
    alternativas: ['A) Mônica', 'B) Cebolinha', 'C) Cascão', 'D) Magali'],
    correta: 1
  },
  {
    pergunta: 'Qual cantora tinha o apelido de “Ternurinha” na época da jovem guarda?',
    alternativas: ['A) Silvinha', 'B) Wanderléia', 'C) Gretchen', 'D) Martinha'],
    correta: 1
  },
  {
    pergunta: 'O churrasco é considerado uma comida típica de qual estado?',
    alternativas: ['A) Ceará', 'B) Rio Grande do Sul', 'C) Pará', 'D) Maranhão'],
    correta: 1
  },
  {
    pergunta: 'Qual cantor é o pai da dupla Sandy e Júnior?',
    alternativas: ['A) Leonardo', 'B) Xororó', 'C) Zezé Di Camargo', 'D) Chitãozinho'],
    correta: 1
  },
  {
    pergunta: 'Quem foi o criador dos personagens Pedrinho, Narizinho e Emília?',
    alternativas: ['A) Maurício de Sousa', 'B) Ziraldo', 'C) Monteiro Lobato', 'D) Machado de Assis'],
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
