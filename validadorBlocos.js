const caracterCorrespondente = {
  '(': ')',
  '[': ']',
  '{': '}',
};

Object.freeze(caracterCorrespondente);

export default function validarBlocos(strBlocos) {
  let fechamentoEsperado;
  let fechamentoObtido;

  const pilhaNivelBloco = [];
  const listaCaracteres = strBlocos.split('');

  for (let indice = 0; indice < listaCaracteres.length; indice++) {
    fechamentoEsperado = null;
    fechamentoObtido = null;

    const caracter = listaCaracteres[indice];
    switch (caracter) {
      case '(':
      case '[':
      case '{':
        const abertura = caracter;
        const fechamento = caracterCorrespondente[abertura];
        pilhaNivelBloco.push(fechamento);
        break;
      case ')':
      case ']':
      case '}':
        fechamentoEsperado = pilhaNivelBloco.pop();
        fechamentoObtido = caracter;
        break;
    }

    if (fechamentoObtido !== fechamentoEsperado) {
      let mensagemEsquecendoFechar = '';

      if (fechamentoEsperado) {
        mensagemEsquecendoFechar = `Você está se esquecendo de fechar '${fechamentoEsperado}' primeiro.`;
      }

      const espacamentoSinalizador = ' '.repeat(indice + 1);
      const mensagem = 
        `'${strBlocos}'\n` +
        `${espacamentoSinalizador}^\n` +
        'Blocos inválidos.\n' +
        `'${fechamentoObtido}' não esperado no ${indice + 1}º caracter.\n` +
        mensagemEsquecendoFechar;

      return { ehValido: false, mensagem};
    }
  }

  if (pilhaNivelBloco.length > 0) {
    fechamentoEsperado = pilhaNivelBloco.pop();
    const mensagem = 
        'Blocos inválidos.\n' +
        `Você está se esquecendo de fechar '${fechamentoEsperado}' no final.`;
    return { ehValido: false, mensagem};
  }

  return { ehValido: true, mensagem: 'Blocos válidos.'};
}
